import {gql} from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
export default gql`
  type User {
    id: ID
    name: String!
    companyId: String!
    imageurl: String
    username: String!
    type: String!
    scheduleId: String
  }
  type Company {
    id: ID
    companyName:String!
    owner: String!
    email: String!
    industry: String!
}
  type Query {
    secret: String
    getUser(id: String!): User
    getCompany: Company
    getEmployees:[User]
  }
  type Mutation {
    register(
      name: String!
      password: String!
      companyId: String!
      username: String!
      type: String!
    ): User!
    login(name: String!, password: String!): String
    createCompany(
    companyName:String!,
    owner: String!,
    email: String!,
    industry: String!,
    password: String!): Company
    loginCompany(email: String!, password: String!):String!
  }
`;