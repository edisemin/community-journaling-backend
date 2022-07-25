const express = require('express');
const app = express();
const cors = require('cors');
const {readFile, writeFile} = require('fs');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false})) // This middleware is needed to get access to the data from the frontend html input field values 
const data = require("./data/mock-comments");

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Community Journaling!");
  });
  
  app.get("/posts", (req, res) => {
    res.send(data);
  });

app.post("post", (req, res) => {
    const blogPost = req.body;
    readFile("comment.json")
    try {
        const data = JSON.parse();
        const countEntries = Object.keys(data);
        writeFile("comment.json", JSON.stringify(data), ({...data, [countEntries + 1] : "content", 
    "like" : {
        "is-there" : false,
        "number" : 0
    },
    "funny" : {
        "is-there" : false,
        "number" : 0
    },
    "angry" : {
        "is-there" : false,
        "number" : 0
    },
}))
    } catch (error) {
        return res.status(406).send(error.message);
    }
})

//   app.post("/posts/emojis", (req, res) => {
//     try {
      
//       const emojis = [];
//       emojis.push(req.body.like);
//       emojis.push(req.body.funny);
//       emojis.push(req.body.angry);
  
  
//       posts[id][""] = emojis;
//         writeFile(data, JSON.stringify(posts), (err) => {
//         res.status(201).send("reaction successfully added");
//       });
      
//     } catch (error) {
//         return res.status(406).send(error.message);
//     }
//   });

//   app.post("/posts/gif", (req, res) => {
//     try {
//         const gif = req.body.gif;
  
//         posts[]["gif"] = gif;
//             writeFile(data, JSON.stringify(posts), (err) => {
//             res.status(201).send("gif successfully added");
//         });
//     } catch (error) {
//         return res.status(406).send(error.message);
//     }  
//   });



module.exports = app
