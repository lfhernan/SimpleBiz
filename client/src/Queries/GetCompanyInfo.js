import {gql} from 'apollo-boost'

export default gql`
    {
  getCompany{
    companyName
    id
    industry
    owner
  }
}
`