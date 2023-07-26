const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("../models/user.js");

//Router Middlewares
app.use(express.json());

//Type of query (Hint)

/*

1. / --> this means we need to consider all users
2. /?name=swa --> Will return count of all the user name that have prefix swa. We will (Swaraj Jain, Swarak agrawal, etc). 
3. /?name= -->this means we need to consider all users

*/

// Complete this Route which will return the count of Number of Prefixmatch for the name in the query/

app.get("/", async function (req, res) {
  var count = 0;

  //Write you code here
  //update count variable
  const prefix = req.query.name || ""; // Get the 'name' query parameter from the request
  const count = await users.countDocuments({
    name: { $regex: `^${prefix}`, $options: "i" },
  });
  // res.send(JSON.stringify(count));

  res.send(JSON.stringify(count));
});

module.exports = app;
