import React from 'react';
import {NavBtn, NavBtnLink} from "./NavbarElements";

const Signup = () => {
    return (
        <div className='signup'>
            <td rowSpan="20">
                <div style={{ paddingLeft: "40px",paddingRight: "40px", textAlign:"left",fontFamily:"fantasy",
                    paddingTop:"100px",paddingBottom:"100px"}}>
                    <h2>Let' Start</h2><br/>
                    <p>Progravida nibh vel velit auctor alinean, iorem quis bibendum.</p>
                </div>
            </td>
            <td rowSpan="20">
                <div style={{paddingRight: "40px",paddingLeft:"400px",paddingTop:"100px",paddingBottom:"100px"}}>
                    <span><input type="text"></input>
                        <NavBtn><NavBtnLink to="/">Sign UP</NavBtnLink></NavBtn></span>
                </div>
            </td>     
        </div>
    );
};

export default Signup;