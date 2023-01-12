import React from 'react'
import "../styles/NavOptionSection.css"
const NavOptions = ({miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories}) => {
  return (
    <div className='navOptionSection'>
          {
            //  ---------- is true then display it --------------------- 
            miPhones && miPhones.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            redmiPhones && redmiPhones.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            tv && tv.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            laptop && laptop.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            fitnessAndLifeStyle && fitnessAndLifeStyle.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            home && home.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            audio && audio.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }


          {
            //  ---------- is true then display it --------------------- 
            accessories && accessories.map((item, index)=>(
            <div key={item.image}>
                <img key={item.image} src={item.image} alt={`Product ${index}`} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
            ))
          }

    </div>
  )
}

export default NavOptions