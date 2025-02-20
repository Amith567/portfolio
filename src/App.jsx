import React from 'react'
import "./App.css"
import Intro from "./Intro/Intro.jsx"
import Project from "./Project/Project.jsx"
import Lang from "./Lang/Lang.jsx"
import Footer from "./footer/Footer.jsx"
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
const language=[
  {
    "img":"/html.png",
    "title":"html",
    "state":"excellent"

  },
  {
    "img":"/css.png",
    "title":"css","state":"excellent"

  },
  {
    "img":"/js.jpg",
    "title":"js","state":"good"

  },
  {
    "img":"/python.jpg",
    "title":"python","state":"good"

  },
  {
    "img":"/java.png",
    "title":"java","state":"average"

  }
]
function App() {
  return (
    <div>
      <Intro />
      <Project  work={work}/>
      <Lang language={language}/>
      <Footer />
    </div>
  )
}

export default App
