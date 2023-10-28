import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold from-gradient-blue-100 via-gradient-blue-200 to-gradient-blue-300 bg-gradient-to-r bg-clip-text text-transparent'>
      {" "}
      {text}
      {" "}
    </span>
  )
}

export default HighlightText
