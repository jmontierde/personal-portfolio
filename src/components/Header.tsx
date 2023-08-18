import React from 'react'
const Header = () => {
  const image1 = "./images/bg1.png"
  return (
      <div className='flex justify-center items-center h-screen bg-no-repeat bg-center' style={{backgroundImage: `url(${image1})`}}>
      <h1 className='container px-6 text-3xl text-white md:text-7xl max-w-7xl font-satoshi '>
        Design solutions <span className='opacity-50'>that are</span>  visually 
        appealing, impactful, and aligned 
        <span className='opacity-50'> with your brand's messaging and goals.</span>
        </h1>
      </div>
    
  )
}

export default Header