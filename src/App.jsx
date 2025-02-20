import React from 'react'
import "./App.css"
import Intro from "./Intro/Intro.jsx"
import Project from "./Project/Project.jsx"
const work=[
  {
    "img":"/studyhive.png",
    "title":"study hive",
    "description":"react,java",
    "code":"https://github.com/SabarishAV/Study-Hive",
    "host":"https://study-hive-app.vercel.app/"
  }, {
    "img":"/tictac.png",
    "title":"tic tac toe ",
    "description":"react",
    "code":"https://github.com/Amith567/mulern-web-tictac",
    "host":"https://mulern-web-tictac-qec03ngem-amith-ps-projects.vercel.app"
  }, {
    "img":"/todo.jpg",
    "title":"todo list",
    "description":"react",
    "code":"https://github.com/Amith567/mulern-web-todo",
    "host":"https://mulern-web-todo.vercel.app/"
  }, {
    "img":"/fb.jpg",
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
