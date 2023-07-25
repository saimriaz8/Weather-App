import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import './search.css';
export default function Search(props) {
   const searchinput = useRef();
    return (
        <div className="container shadow d-flex search">
            <input className="search-input my-3 py-2" value={props.searchdata} onChange={()=> props.eventHandler(searchinput.current.value)} ref={searchinput} placeholder="Search here" />
            <Button onClick={props.searchweatherHandler} className="btn btn-dark my-3 mx-2">Search</Button>
        </div>
    )
}