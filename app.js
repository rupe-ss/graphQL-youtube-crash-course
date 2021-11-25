const schema = require("./schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.listen(4000, () => {
  console.log("Now listening to port 4000.");
});

//Binding express with GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
