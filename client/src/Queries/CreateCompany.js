import {gql} from 'apollo-boost'

export default gql`
mutation($companyName: String!, $owner: String!, $email: String!, $industry: String!, $password: String!){
    createCompany(
        companyName: $companyName,
        owner: $owner,
        email: $email,
        industry: $industry,
        password: $password
    )
    {
        id
    }
}

`