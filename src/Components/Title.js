import React from 'react'

const Title = ({title, title2}) => {
  return (
    <div className="section-title">
      <h2>{title}<span> {title2}</span></h2>
    </div>
  )
}

export default Title
