import { sql } from "../dbConnection.js";

// post new data

export const postNewDataM = async (newData) => {
  const { name, emailAdress, githubUsername, avatar } = newData;
  const data = { name, emailAdress, githubUsername, avatar };

  const dataList = await sql`
    INSERT INTO atendees ${sql(
      data,
      "name",
      "emailAdress",
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
SELECT * FROM atendees
WHERE id = ${id}
`;
};
