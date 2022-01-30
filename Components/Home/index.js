import { useState } from "react";

import { useQuery } from "react-query";
import axios from "axios";

import styles from "../../styles/Home/Index.module.scss";

import Tour from "./Tour";

const getTours = () => axios.get("/api/tours");

const options = (setTours) => ({
    enabled: false,
    onSuccess: (data) => setTours(data?.data),
});

export default function MainHome(props) {
    const [tours, setTours] = useState(props.tours || []);

    const { isLoading, isError, data, error, refetch } = useQuery(
        "tours",
        getTours,
        options(setTours)
    );

    const notInterstedHandler = (id) => {
        setTours((prev) => prev?.filter((tour) => tour.id !== id));
    };

    let toursContent;

    if (isLoading) {
        toursContent = <div>Loading...</div>;
    }

    if (isError) {
        toursContent = <div>{error}</div>;
    }

    if (!!tours.length) {
        toursContent = tours?.map((tour) => (
            <Tour
                key={tour.id}
                {...tour}
                onNotIntersted={notInterstedHandler}
            />
        ));
    }

    return (
        <main className={styles.mainHome}>
            <header>
                <h1 className={styles.mainHome__title}>Our Tours</h1>
            </header>
            <main className={styles.mainHome__content}>
                {toursContent}

                {tours.length === 0 && (
                    <button
                        className={styles.mainHome__content_btn}
                        onClick={refetch}
                    >
                        Refetch
                    </button>
                )}
            </main>
        </main>
    );
}
