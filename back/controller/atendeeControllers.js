import argon2 from "argon2";
import jwt from "jsonwebtoken";
import voucher_codes from "voucher-code-generator"
import {
  postNewDataM,
  getByIdM,
  getUserByEmailM,
} from "../model/atendeeModules.js";

// creates and returns jwt token

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

// writes jwt cookie to front

const sendTokenCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
};

// uplaod new data to sql

export const postNewDataC = async (req, res) => {
  try {

    // ticket code generator
    const ticketCode = voucher_codes.generate({
      length: 8,
      count: 1
    })[0];

    const newData = req.body;
    // attach ticket code to data
    newData.ticketCode = ticketCode;

    if (
      !newData.name ||
      !newData.emailAddress ||
      !newData.githubUsername ||
      !newData.avatar ||
      !newData.password ||
      !newData.ticketCode
    ) {
      res.status(400).json({
        status: "fail",
        message: `Error, missing info`,
      });
      return;
    }

    const hash = await argon2.hash(newData.password);

    newData.password = hash;
    
    const newAtendee = await postNewDataM(newData);

    newAtendee.password = undefined;
    res.status(201).json({
      status: "success",
      data: newAtendee,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error writing data to db, ${error} `,
    });
  }
};

// get data by id

export const getByIdC = async (req, res) => {
  try {
    const { id } = req.params;
    const atendee = await getByIdM({ id });

    if (atendee === undefined) {
      return res.status(404).json({
        status: "fail",
        message: "No attendees found",
      });
    }

    atendee.password = undefined;

    res.status(200).json({
      status: "success",
      data: atendee,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

//vartotojo prisijungimo duomenų patikrinimas ir jwt tokeno įrašymas
export const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const attendee = await getUserByEmailM(emailAddress);
    if (!attendee)
      return res.status(401).json({
        status: "fail",
        message: "Wrong email or pwassword",
      });

    const passwordCorrect = await argon2.verify(attendee.password, password);

    if (!passwordCorrect)
      return res.status(401).json({
        status: "fail",
        message: "Wrong email or pwassword",
      });

    const token = signToken(attendee.id);
    sendTokenCookie(token, res);

    attendee.password = undefined;

    res.status(200).json({
      status: "logged in",
      data: attendee,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

//autorizacijos middleware, routes apsaugai nuo neregistruotų vartotojų
export const protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token) {
      throw new Error("You are not logged in! Please log in to get access");
    }

    const decodedAttendee = jwt.verify(token, process.env.JWT_SECRET);

    const currentAttendee = await getByIdM(decodedAttendee);

    if (!currentAttendee) {
      throw new Error(
        "The user belonging to this token does not longer exist",
        401,
      );
    }

    req.user = currentAttendee;

    next();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

//patikrins kokią rolę turi prisijungęs vartotojas ir pagal rolę suteiks teises į informaciją
export const allowAccessTo = (...roles) => {
  return (req, res, next) => {
    try {
      // console.log(req.user.roles);
      // console.log(roles);
      // console.log(req.user);
      // console.log(!roles.includes(req.user.role));

      if (!roles) {
        res.status(403).json({
          status: "Fail",
          message: "You do not have the permission",
        });
      }
      next();
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };
};

//logout user
export const logout = (req, res) => {
  return res.clearCookie("jwt").status(200).json({
    status: "success",
    message: "Your are now logged out",
  });
};

export const getAuthenticatedUser = (req, res, next) => {
  try {
    req.user.password = undefined;

    res.status(200).json({
      status: "success",
      data: req.user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
