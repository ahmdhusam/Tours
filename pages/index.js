import axios from "axios";

import { getTours } from "../utils/getTours";

import MainHome from "../Components/Home";

export default function Home(props) {
    return <MainHome {...props} />;
}

export async function getStaticProps() {
    const res = await getTours();
    const data = res.data;

    return {
        props: { tours: data || [] },
        revalidate: 3600,
    };
}
