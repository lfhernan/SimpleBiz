import {gql} from 'apollo-boost'

export default gql`
mutation($email: String!,$password: String!){
  loginCompany(email:$email,password:$password)
}

`