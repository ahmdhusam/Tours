import axios from "axios";

import MainHome from "../Components/Home";

export default function Home(props) {
    return <MainHome {...props} />;
}

export async function getStaticProps() {
    const res = await axios.get("https://course-api.com/react-tours-project");
    const data = res.data;

    return {
        props: { tours: data || [] },
    };
}
