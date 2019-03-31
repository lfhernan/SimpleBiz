import {gql} from 'apollo-boost'

export default gql`
mutation($id: ID!){
    deleteEmployee(
        id: $id
    )
    {
        name
    }
}
`