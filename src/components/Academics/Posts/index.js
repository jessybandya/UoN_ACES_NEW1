import React from 'react'
import "../styles.css"
import { Link } from "react-router-dom"
function index() {
  return (
    <div className="login1">
    <div className="loginForm">
   
     {/* <a href="/academics/year1">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 1</span></button>
     </a>

        
     <a href={`/academics/year2`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 2</span></button>
     </a>

     <a href={`/academics/year3`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 3</span></button>
     </a>

     <a href={`/academics/year4`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 4</span></button>
     </a>

     <a href={`/academics/year5`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 5</span></button>
     </a> */}

<div className="btnsView" style={{display: "flex",flexWrap: "wrap"}}>
            <Link style={{fontSize:18}} to="/academics/year1">
        
                <span></span>
        
                <span></span>
        
                <span></span>
        
                <span></span>
        
                First Year (Year 1)
        
            </Link>
            <Link style={{fontSize:18}} to="/academics/year2">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>

        Second Year (Year 2)

    </Link>
    <Link style={{fontSize:18}} to="/academics/year3">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>

        Third Year (Year 3)

    </Link>
    <Link style={{fontSize:18}} to="/academics/year4">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>
        Fourth Year (Year 4)

    </Link>
    <Link style={{fontSize:18}} to="/academics/year5">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>
        Fifth Year (Year 5)

    </Link>
    </div>
    </div>
  </div>
  )
}

export default index
