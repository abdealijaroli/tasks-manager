
import React from 'react'

const Header = ({title}) => {
    return (
    <div className="bg">
        <header className='header'>
            <h2>{title}</h2>
            <button className='add-btn'>Add</button>
        </header>
    </div>
    )
}

Header.defaultProps = {
    title: 'Tasks Manager'
}

export default Header
