const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose')

//mongoose.connect("mongodb://localhost/test5")

const Entry = mongoose.model("Entry", {
  title: String
})

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Entry {
    id: ID!
    title: String!
  }
  type Mutation {
    createEntry(title: String!): Entry
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  },
  Mutation: {
    createEntry: async (_, { title }) => {
      const entry = new Entry({ title })
      await entry.save() // save it in the database
      return entry
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
