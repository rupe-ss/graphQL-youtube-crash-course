const schema = require('./schema/schema');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.listen(4000, () => {
  console.log('Now listening to port 4000.');
});

mongoose.connect(
  'mongodb+srv://rupess:test123@cluster0.wzxhy.mongodb.net/Cluster0?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

app.use(cors());
//Binding express with GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
