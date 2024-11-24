import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

// middlewares
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 342343243224,
    title: "abd",
  },
  {
    id: 342343241224,
    title: "usman",
  },
  {
    id: 342343241999,
    title: "hassan",
  },
];

// Routes

// Get all users
app.get("/", (req, res) => {
  res.send(users);
});

// add a user
app.post("/user", (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({
      message: "Title is required",
    });
    return;
  }

  users.push({
    id: Date.now(),
    title,
  });

  res.status(201).json({
    message: "User has been added Successfully",
    data: users,
  });
});

// get all user
app.get("/user", (req, res) => {
  res.status(200).json({
    data: users,
  });
});

// get a single user
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(404).json({
      message: " user not found",
    });
    return;
  }

  res.status(200).json({
    data: users[index],
  });
});

// delete a user
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(404).json({
      message: "no user found",
    });
    return;
  }

  users.splice(index, 1);
  res.status(200).json({
    message: "user is deleted",
    data: users,
  });
});

// edit a user
app.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const index = users.findIndex((item) => item.id === +id)

    if(index === -1){
        res.status(404).json({
            message: "no user found"
        })
        return
    }
    if(!title){
        res.status(400).json({
            message: "title is required"
        })
        return
    }

    users[index].title = title;

    res.status(200).json({
        message: "user edited",
        data: users
    })



});

// Server

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
