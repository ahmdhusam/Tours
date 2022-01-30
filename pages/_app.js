import { Fragment } from "react";
import Head from "next/head";

import { QueryClientProvider, QueryClient } from "react-query";

import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tours Complete</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#49a6e9" />
                <meta name="description" content="Tours By NextJS" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Fragment>
    );
}

export default MyApp;
