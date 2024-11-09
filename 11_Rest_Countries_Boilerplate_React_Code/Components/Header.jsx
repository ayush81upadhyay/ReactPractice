import React from 'react'

const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-content'>
            <h2 className='title'>
                <a href='/'>Find your favourite country's detail!</a>
            </h2>
            <p className='theme-changer'>
                <i className="fa-regular fa-solid fa-moon">Dark Mode</i>
            </p>
        </div>
    </header>
  )
}

export default Header