import axios from "axios";
import { getTours } from "../../utils/getTours";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(501).json({ message: "Not Implemented" });
        return;
    }

    try {
        const toursRes = await getTours();

        const data = toursRes.data;

        res.status(200).json(data);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
