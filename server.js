// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

var friends = [
    { name: 'Anushan Ragunathan',
image: '',
answerOne: '',
answerTwo: '',
answerThree: '',
answerFour: '',
answerFive: '',
answerSix: '',
answerSeven: '',
answerEight: '',
answerNine: '',
answerTen: '',
 }]

// Routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Displays all users results
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
//Creates new user 
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newfriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    friends.push(newfriend);
  
    res.json(newfriend);
  });


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
