import React from 'react'
import "./Project.css"
import MediaCard from '../Card/MediaCard'
function Project(props) {
  return (
    <div className='project-container' > 
    <h1 id="project">projects</h1><div className='project-cont'>
{props.work.map((Project,index)=>(
    
    <MediaCard 
    key={index}
    img={Project.img}
    title={Project.title}
    description={Project.description}
    code={Project.code}
    host={Project.host}
    />
))}

    </div></div>
  
)}

export default Project
