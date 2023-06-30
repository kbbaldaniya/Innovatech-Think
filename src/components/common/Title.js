import React from 'react'

const Title = ({ title }) => {
  return (
    <div className='title'>
      <span className='front-title'>{title.toUpperCase()}</span>
      <span className='back-title'>{title.toUpperCase()}</span>
    </div>
  )
}

export default Title
