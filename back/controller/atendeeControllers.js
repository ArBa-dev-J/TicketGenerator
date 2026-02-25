import { postNewDataM, getByIdM } from "../model/atendeeModules.js";

// uplaod new data to sql

export const postNewDataC = async (req, res) => {
  try {
    const newData = req.body;

    if (
      !newData.name ||
      !newData.emailAddress ||
      !newData.githubUsername ||
      !newData.avatar
    ) {
      res.status(400).json({
        status: "fail",
        message: `Error, missing info`,
      });
      return;
    }

    const topic = await postNewDataM(newData);
    res.status(201).json({
      status: "success",
      data: topic,
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

    if (atendee.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No attendees found",
      });
    }

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
