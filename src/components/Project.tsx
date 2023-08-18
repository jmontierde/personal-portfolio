import React from 'react'

const Project = () => {
  return (
    <section id='projects'>
      <div className='container px-6 mx-auto'>
          <h2 className='md:mt-48 mt-24 text-xl md:text-5xl text-white max-w-5xl opacity-80'>Producing high-quality designs that effectively convey clients unique vision and goals. </h2>
          <div className='grid md:grid-cols-2 mt-12 md:mt-32 gap-12 cursor-pointer'>
              <img className='h-96 w-full opacity-50 hover:opacity-100 ' src="./images/work1.png" alt="" />
              <img className='h-96 w-full opacity-50 hover:opacity-100' src="./images/work2.png" alt="" />
              <img className='h-96 w-full opacity-50 hover:opacity-100' src="./images/work3.png" alt="" />
              <img className='h-96 w-full opacity-50 hover:opacity-100' src="./images/work4.png" alt="" />
          </div>
      </div>
    </section>
  )
}

export default Project