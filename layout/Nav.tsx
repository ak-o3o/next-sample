import React, { useState, useRef, useEffect, forwardRef } from 'react';

export default function Nav() {
  //change header
  const [headerColor, setHeaderColor] = useState(true)
  const listenScrollEvent = () => {
    let changeHeaderRect = 100 
    if(window.scrollY > changeHeaderRect){
      setHeaderColor(false)
    }else{
      setHeaderColor(true)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <>
    <header className="nav" data-color={ headerColor ? 'blue' : 'white' } style={{position: 'fixed', height: '50px',  width:'100%', borderBottom: '1px solid black'}}>
      navbar
    </header>
    <style >{`
    .nav[data-color="blue"]{
      background-color: blue;
    }
    .nav[data-color="white"]{
      background-color: white;
    }
    `}</style>
    </>
);
}

