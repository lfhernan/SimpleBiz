import {gql} from 'apollo-boost'

export default gql`
{
  getEmployees{
    name
    username
    imageurl
    type
  }
}
`