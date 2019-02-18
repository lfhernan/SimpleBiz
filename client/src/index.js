import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {ApolloClient} from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import defaults from './resolvers/defaults'
import { withClientState } from 'apollo-link-state';
const httpLink=createHttpLink({
    uri: 'http://localhost:4000/graphql',
    // credentials: 'include',
    // fetchOptions: {
    // mode: 'no-cors'
    // }
});

const authLink=setContext((_,{headers}) =>
{
    // get the authentication token from local storage if it exists
    const token=localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token||''
        }
    }
});



const client=new ApolloClient({
    link: authLink.concat(httpLink),
    cache : new InMemoryCache(),
    clientState:{
        defaults: {
            modalOpen: false
         },
        resolvers: {}
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
