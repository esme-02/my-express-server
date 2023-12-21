
const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: emseraldacruz614@gmail.com ");
});

app.get("/about", function(req, res) {
    res.send("Hello I am Esmeralda, I am learning web development on Udemy. I am learning how the backend of a website works. I want to do freelance work in web development.")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Crocheting</li><li>Going to festivals</li><li>code</li></ul>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
