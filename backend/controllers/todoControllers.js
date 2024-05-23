const mongoose = require("mongoose");

const Todo = require("../models/todoModel");

const getTodos = async(req,res)=>{
  // res.send("All Todos Here!!");
  const allTodos = await Todo.find();
  // console.log(allTodos);
}

const createTodos = async(req,res)=>{

  // console.log(req.body);

  const {title, description , isCompleted} = req.body;

  if(!title || !description){
    // res.send("Plz Fill All The Details");

    // In-build class in JS for ---> Error 
    res.status(400);
    throw new Error("Please Fill All The Details.")
  }

  const newTodo = await Todo.create({
    title,
    description,
    isCompleted 
  })

  if(newTodo){
    res.status(201).json(newTodo);
  }else{
    res.status(401);
    throw new Error("Something Went Wrong Here!!");
  }

  // res.send("Todo Created !!");
}

const getSingleTodo = async(req,res)=>{
  // res.send("Get Single Todo Here!!")

  const todo = await Todo.findById(req.params.id)

  if(!todo){
    res.status(404)
    throw new Error("Todo Not Found");
  }

  res.status(200).json(todo);

}

const updateTodo = async(req,res)=>{
  // res.send("Todo Edited!!");

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id , req.body , {new : true, 
  });

  if(!updateTodo){
    res.status(400)
    throw new Error("Cannot Update Todo");
  }

  res.status(200).json(updatedTodo);

}

const deleteTodo = async(req,res)=>{
  // res.send("Todo Deleted !!");

 await Todo.findByIdAndDelete(req.params.id)

  res.status(200).json({
    msg : "Todo Deleted Here !!",
  });
};


module.exports = {getTodos , createTodos , getSingleTodo , updateTodo , deleteTodo}