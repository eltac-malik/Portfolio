import React,{useState} from 'react'
import "style/Navbar.css"
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {hideType} from 'redux/styleSlice'

function Navbar() {

    const [side,setSide] = useState("")
    const [bar,setBar] = useState("")
    const dispatch = useDispatch()

    const handleOpen = ()=>
    {
        setSide("open-side")
        dispatch(hideType("hidden"))
        setBar("hide")
    }

    const handleClose = ()=>
    {
        setSide("")
        dispatch(hideType(""))
        setBar("")
    }

    const handleSide = ()=>
    {
        setTimeout(() => {
            setSide("")
            setBar("")
        }, 100);
    }

    return (
        <div className='nav'>
            <i onClick={handleOpen} className={`fa-solid fa-2x fa-bars ${bar}`}></i>
            <h1><Link className='link' to='/home'>Eltac</Link></h1>
            <div className="links">
                <p><Link className='link' to='/home'>Home</Link></p>
                <p><Link className='link' to='/about'>About</Link></p>
                <p><Link className='link' to='/resume'>Resume</Link></p>
                <p><Link className='link' to='/portfolio'>Portfolio</Link></p>
                <p><Link className='link' to='/skills'>Skills</Link></p>
                <p><Link className='link' to='/contact'>Contact</Link></p>
            </div>
            <div></div>
            <div className={`side ${side}`}>
            <i onClick={handleClose} className="fa-solid fa-2x fa-xmark"></i>
            <div className="nav-side">
            <Link onClick={handleSide} className={`side-link`} to='/home'>Home</Link>
            <Link onClick={handleSide} className='side-link' to='/about'>About</Link>
            <Link onClick={handleSide} className='side-link' to='/resume'>Resume</Link>
            <Link onClick={handleSide} className='side-link' to='/portfolio'>Portfolio</Link>
            <Link onClick={handleSide} className='side-link' to='/skills'>Skills</Link>
            <Link onClick={handleSide} className='side-link' to='/contact'>Contact</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar
