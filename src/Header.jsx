import React from 'react'
import "./Header.css"
import {FaUndo, FaRedo, FaPalette} from "react-icons/fa";
import { MdSend, MdDescription} from "react-icons/md";

function Header() {
  return (
    <header className='header'>
        <div className='header-left'>
            <MdDescription className='doc-icon'></MdDescription>
                <span className='form-title'>Untitled Form</span>
        </div>
        <div className='header-center'>
            <button className='header-button'>Questions</button>
            <button className='header-button'>Responses</button>
            <button className='header-button'>
                 Settings
            </button>
        </div>
        <div className='header-right'>
            <FaPalette className='icon'></FaPalette>
            <FaUndo className='icon'></FaUndo>
            <FaRedo className='icon'></FaRedo>
            <button className='send-button'>
                <MdSend className='send-icon'/> Send
            </button>
        </div>
    </header>
  )
}

export default Header