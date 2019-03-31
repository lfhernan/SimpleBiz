import {gql} from 'apollo-boost'

export default gql`
mutation($id: ID!, $name: String, $type: String, $imageurl: String){
    editCompanyEmployee(
        id: $id,
        name: $name,
        type: $type,
        imageurl: $imageurl
    )
    {
        name
    }
}
`