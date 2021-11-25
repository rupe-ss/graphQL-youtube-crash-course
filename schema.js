/* 
Schema has three things.
1. Define types 
2. Relation between the types
3. Root Queries
*/

const schema = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code inside here will go and grab from database.
      },
    },
  }),
});

module.exports = new schema.GraphQLSchema({
  query: RootQuery,
});
