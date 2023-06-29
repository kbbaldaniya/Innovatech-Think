import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='title'>
      <span className='front-title'>{title}</span>
      <span className='back-title'>{title}</span>
    </div>
  )
}

export default Title
