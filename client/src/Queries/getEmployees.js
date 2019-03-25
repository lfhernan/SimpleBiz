import {gql} from 'apollo-boost'

export default gql`
{
    getEmployees{
      id
      name
      imageurl
      type
    }
  }
`