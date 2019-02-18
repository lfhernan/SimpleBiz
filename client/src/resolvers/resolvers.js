import gql from 'graphql-tag';

export default {
    Query:{
        // getLoginStatus: (_, variables, { cache })=>{
        //     const query = gql`
        //     query {
        //         loggedIn @client {
        //         status
        //       }
        //     }
        //   `;
        //   return cache.readQuery({query})
        // }
        getLoginStatus:gql`
            query {
                loggedIn @client {
                status
              }
            }
        `
    },
    Mutation: {
        login: (_, variables, { cache }) => {
            
            cache.writeData({loggedIn: true})
            return true
        },
        logout: (_, variables, { cache }) => {
            
            cache.writeData({loggedIn: false})
            return false
        },
    }
}