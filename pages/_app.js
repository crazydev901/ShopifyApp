import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import { Provider as ReduxProvider } from "react-redux";
import Cookies from "js-cookie";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import withReduxStore from "../lib/with-redux-store";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include"
  }
});

class MyApp extends App {
  render() {
    const { Component, reduxStore, pageProps } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true
    };

    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <ReduxProvider store={reduxStore}>
          <Provider config={config}>
            <AppProvider i18n={translations}>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
            </AppProvider>
          </Provider>
        </ReduxProvider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
