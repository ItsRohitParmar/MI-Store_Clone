import React from 'react'
import VideoCard from "./VideoCard"
import "../styles/Video.css"
const Videos = ({video}) => {
  return (
    <div className='VideoCardSection'>
        {   
            video.map((item, index)=>(
                <VideoCard index={index} image={item.image} name={item.name} key={item.image}/>
            ))
        }
    </div>
  )
}

export default Videos