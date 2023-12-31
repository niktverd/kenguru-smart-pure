import type {AppProps} from 'next/app'
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "src/graphql/apollo";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;