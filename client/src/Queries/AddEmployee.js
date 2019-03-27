import {gql} from 'apollo-boost'

export default gql`
mutation($name: String!, $password: String!, $username: String!, $type: String!){
    register(
        name: $name
        password: $password
        username: $username
        type: $type
    )
    {
        name
    }
}
`