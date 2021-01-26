import React,{useState} from 'react'
import {IoIosMenu} from 'react-icons/io' 
import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Topbar() {
    const [Animate, setAnimate] = useState({left:"-100%" ,transition : "left 0.5s"});
    return (
        <>
        <div className="fixed top-0 w-full h-16 bg-blue-700 z-10">
            <div className="w-full h-full px-6 py-4 flex max-w-6xl mx-auto">
                <div className="text-left text-3xl w-3/5" > <span onClick = {() => setAnimate((Animate) => ( {left:"0%" , transition : "left 0.5s"}))}> <IoIosMenu/> </span> </div>
                <div className="text-center w-3/5 font-semibold"><Link to="/"> Interview<span className="font-bold">Portal</span> </Link></div>
                <div className="text-right text-3xl w-3/5"> <span className="float-right"><FaUserCircle/> </span></div>
            </div>      
        </div>
        <div className="w-4/5 max-w-xs h-screen fixed top-0 z-40 bg-white" style={Animate}>
            <li className="w-full px-8 h-16 bg-blue-200 font-bold text-blue-700 py-4 list-none"> Interview Portal</li>
            <hr/>
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300"> 
                <Link to="/" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))}> Home </Link> 
            </li>
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300"> 
             <Link to="/checklist" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))}>Checklist</Link>
            </li>
            <hr />
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300">
                <a rel="noopener noreferrer" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))} href="https://surya1231.github.io/Codeforces-contest/" target="_blank"> ContestPortal </a>
            </li>
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300"> 
            <a rel="noopener noreferrer" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))}  href="https://codeshows.github.io/" target="_blank"> Codeshows </a> 
            </li>
            <hr/>
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300"> 
                <Link to="/about" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))} > About </Link> 
            </li>
            <li className="w-full px-10 py-4 h-14 text-base font-semibold text-black opacity-75 list-none hover:bg-gray-300">
                <Link to="/feedback" onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))} > Feedback </Link> 
            </li>
            <hr />
        </div>
        {
          Animate.left==="0%" && <div className="w-full z-30 h-screen fixed top-0 opacity-50 left-0 bg-black" 
          onClick = {() => setAnimate((Animate) => ( {left:"-100%" , transition : "left 0.5s"}))}></div> 
        }
        </>
    )
}

export default Topbar
