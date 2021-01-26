import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             sidebar : false,
        }
    }

    showSidebar = () => {
        this.setState({sidebar:true});
    }

    hideSidebar = () =>{
        this.setState({sidebar:false});
    }
    
    render() {
        return (
            <div id="my-navbar">
                <nav className="navbar-top">
                <div className="nav-wrapper">
                    <span className="sidebar-toggler" onClick={this.showSidebar}> X </span>
                    <a href="/"> Home </a>
                </div>
                </nav>
                <ul className={!this.state.sidebar? "nav-menu" : "nav-menu nav-menu-show"}>
                <li> <Link to="/" className="subheader"> Interview Portal </Link> </li>
                <hr/>
                <li> <Link onClick={this.hideSidebar} to="/"> Forum </Link></li>
                <li> <Link onClick={this.hideSidebar} to="/checklist"> CheckList </Link> </li>
                <hr/>
                <li> <a rel="noopener noreferrer" onClick={this.hideSidebar} href="https://surya1231.github.io/Codeforces-contest/" target="_blank"> ContestPortal </a></li>
                <li> <a rel="noopener noreferrer" onClick={this.hideSidebar} href="https://codeshows.github.io/" target="_blank"> Codeshows </a></li>
                <hr />
                <li> <Link onClick={this.hideSidebar} to="/about"> About </Link> </li>
                <li> <Link onClick={this.hideSidebar} to="/feedback"> Feedback </Link> </li>
                </ul>
                {this.state.sidebar && <div className="sidenav-overlay" onClick={this.hideSidebar} />}
            </div>
        )
    }
}

export default Navbar
