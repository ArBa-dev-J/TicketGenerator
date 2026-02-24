import { postNewDataM } from "../model/atendeeModules.js";

// uplaod new data to sql

export const postNewDataC = async (req, res) => {
    try {
        const newData = req.body;

        if (!newData.name || !newData.emailAdress || !newData.githubUsername || !newData.avatar) {
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
} 