import Image from "next/image";
import { useState } from "react";

import styles from "../../styles/Home/Tour.module.scss";

export default function Tour({ id, image, name, price, info, onNotIntersted }) {
    const [isSeeMore, setIsSeeMore] = useState(false);

    const seeMoreHandler = () => {
        setIsSeeMore((prev) => !prev);
    };

    let description;
    let seeMore;

    if (isSeeMore) {
        description = info;
        seeMore = "See Less";
    } else {
        description = `${info?.substr(0, 200)}... `;
        seeMore = "See More";
    }

    return (
        <article className={styles.tour}>
            <header>
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={150}
                    layout="responsive"
                />
            </header>
            <main className={styles.tour__content}>
                <header>
                    <h4 className={styles.tour__content_title}>{name}</h4>
                    <span className={styles.tour__content_price}>${price}</span>
                </header>
                <main>
                    <p className={styles.tour__content_description}>
                        {description}
                        <button
                            className={styles.tour__content_description_btn}
                            onClick={seeMoreHandler}
                        >
                            {seeMore}
                        </button>
                    </p>
                </main>
                <footer>
                    <button
                        className={styles.tour__content_btn}
                        onClick={onNotIntersted.bind(null, id)}
                    >
                        Not Interested
                    </button>
                </footer>
            </main>
        </article>
    );
}
