const typeDefs = `
  scalar Date

  type Note {
    id: ID!
    title: String!
    body: String!
    created_at: Date
  }

  type Query {
    allNotes: [Note!]!
    findNote(id: ID!): Note
  }

  type Mutation {
    addNote(
      title: String!
      body: String!
    ): Note

    editNote(
      id: ID!
      title: String!
      body: String!
    ): Note

    deleteNote(
      id: ID!
    ): Note
  }
`;

module.exports = typeDefs;
