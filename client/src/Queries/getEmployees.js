import {gql} from 'apollo-boost'

export default gql`
{
  getEmployees{
    id
    name
    username
    imageurl
    type
  }
}
`