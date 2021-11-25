const express = require("express");
const { graphqlHTTP } = require("express-graphql");

import schema from "./schema";

const app = express();

app.listen(4000, () => {
  console.log("Now listening to port 4000.");
});

//Binding express with GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);
