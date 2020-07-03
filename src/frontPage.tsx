import React from 'react'
import {
    Link
  } from "react-router-dom";
export function Frontpage() {
    return(
        <p style={{textAlign: 'center'}}>What a fancy front page! <Link to="/my-properties">Go to My Properties for some action</Link></p>
        
    )
}