import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

function enchancedFetch(url: any, init: any) {
    return fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        'Access-Control-Allow-Origin': '*',
      },
    }).then(response => response);
  };
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/api/graphql",
    credentials: 'include',
    fetchOptions: {
      mode: 'cors',
    },
    fetch: enchancedFetch,
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  export default client;