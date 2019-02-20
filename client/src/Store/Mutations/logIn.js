import {gql} from 'apollo-boost'

export default gql`
    mutation logIn($status: Boolean!){
        logIn(status: $status) @client
    }
`