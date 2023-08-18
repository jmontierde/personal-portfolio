import React from 'react'

const Footer = () => {
  const image2 = "./images/bg2.png"
  return (
    <section id='contact'>
      <div className='flex flex-col justify-center items-center h-screen space-y-12 text-white bg-no-repeat bg-center' style={{backgroundImage: `url(${image2})`}}>
          <h2 className='md:text-7xl max-w-7xl text-center container px-6 mx-auto underline-offset-2 text-3xl'>Let's <span className='opacity-50'> connect to discuss how we can </span> bring your vision to life ↣</h2>
          <div className='border-t border-gray-300 py-8 text-xs md:text-xl opacity-80'>
              <a href="#href" className='mr-6'>montierdejayson@gmail.com</a>
              <a href="#href" className='mr-6'>behance</a>
              <a href="#href" className='mr-6'>linkedin</a>
              <a href="#href" className='mr-6'>instagram</a>
          </div>
      </div>
    </section>

  )
}

export default Footer