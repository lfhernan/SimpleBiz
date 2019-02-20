import {gql} from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
export default gql`
  type User {
    id: ID
    name: String!
    companyId: String!
    username: String!
    type: String!
  }
  type Query {
    secret: String
    getUser(id: String!): User
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
  }
`;

