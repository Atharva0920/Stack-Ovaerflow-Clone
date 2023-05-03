import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe.svg'

const LeftSideBar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active' >
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <p style={{ color: 'hsl(210,8%,45%)' }}>PUBLIC</p>
                    <NavLink to='/Questions' className='side-nav-links'>
                        <img src={Globe} alt='globe' width='16px' height='16px' />
                        <p style={{ paddingLeft: '10px' }}>Questions</p>
                    </NavLink>

                    <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '40px' }}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '40px' }}>
                        <p>User</p>
                    </NavLink>
                    <NavLink to='/Community' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                        <p>Community</p>
                    </NavLink>
                </div>
            </nav>
        </div>

    )
}

export default LeftSideBar