import React from 'react'
import { MdSearch } from "react-icons/md";
import './note.css'

function Search({setSearchText}) {
    return (
        <div>
            <div className ="search">
                <MdSearch className ="search-icon"/>
                <input type ="text" placeholder ="type here to search ..." 
                onChange ={(e) =>{setSearchText(e.target.value)}}/>
            </div>
        </div>
    )
}

export default Search
