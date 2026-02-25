import { sql } from "../dbConnection.js";

// post new data

export const postNewDataM = async (newData) => {
  const { name, emailAddress, password, githubUsername, avatar } = newData;
  const data = { name, emailAddress, password, githubUsername, avatar };

  const dataList = await sql`
    INSERT INTO attendees ${sql(
      data,
      "name",
      "emailAddress",
      "password",
      "githubUsername",
      "avatar",
    )}
    returning *
    `;
  return dataList[0];
};

// get user by email

export const getUserByEmailM = async (emailAddress) => {
  const users = await sql`
    select * from users where email=${emailAddress}
    `;

  return users[0];
};

// get by id for ticker generation

export const getByIdM = async ({ id }) => {
  return await sql`
SELECT * FROM attendees
WHERE id = ${id}
`;
};

