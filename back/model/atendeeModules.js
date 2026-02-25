import { sql } from "../dbConnection.js";

// post new data

export const postNewDataM = async (newData) => {
  const { name, emailAddress, githubUsername, avatar } = newData;
  const data = { name, emailAddress, githubUsername, avatar };

  const dataList = await sql`
    INSERT INTO attendees ${sql(
      data,
      "name",
      "emailAddress",
      "githubUsername",
      "avatar",
    )}
    returning *
    `;
  return dataList[0];
};

// get by id

export const getByIdM = async ({ id }) => {
  return await sql`
SELECT * FROM attendees
WHERE id = ${id}
`;
};
