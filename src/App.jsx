import React from 'react'
import "./App.css"
import Intro from "./Intro/Intro.jsx"
import Project from "./Project/Project.jsx"
const work=[
  {
    "img":"../../src/assets/studyhive.png",
    "title":"study hive",
    "description":"react,java",
    "code":"https://github.com/SabarishAV/Study-Hive",
    "host":"study-hive-app.vercel.app"
  }, {
    "img":"../../src/assets/tictac.png",
    "title":"tic tac toe ",
    "description":"react",
    "code":"https://github.com/Amith567/mulern-web-tictac",
    "host":"mulern-web-tictac.vercel.app"
  }, {
    "img":"../../src/assets/todo.jpg",
    "title":"todo list",
    "description":"react",
    "code":"https://github.com/Amith567/mulern-web-todo",
    "host":"mulern-web-todo.vercel.app"
  }, {
    "img":"../../src/assets/fb.jpg",
    "title":"fb login",
    "description":"html,css,js",
    "code":"https://github.com/Amith567/facebook_login_page",
    "host":"https://amith567.github.io/facebook_login_page/"
  }
]
function App() {
  return (
    <div>
      <Intro />
      <Project  work={work}/>
    </div>
  )
}

export default App
