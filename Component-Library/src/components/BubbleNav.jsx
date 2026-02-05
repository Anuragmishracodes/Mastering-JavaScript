import React from 'react'

const BubbleNav = () => {
  return (
    <div className="nav-wrap">
      <div className="bubble active"></div>
      <div className="bubble hover"></div>
      <nav className="nav">
        <a className="active" href="#">Projects</a>
        <a href="#">Gallery</a>
        <a href="#">Studio</a>
        <a href="#">Profile</a>
      </nav>
    </div>
  )
}

export default BubbleNav
