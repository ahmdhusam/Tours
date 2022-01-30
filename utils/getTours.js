import axios from "axios";

export const getTours = () =>
    axios.get("https://course-api.com/react-tours-project");
