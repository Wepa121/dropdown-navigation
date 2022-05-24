import React, { useEffect, useRef, useState } from "react"
import logo from "../images/logo.svg"
import todo from "../images/icon-todo.svg"
import calendar from "../images/icon-calendar.svg"
import reminders from "../images/icon-reminders.svg"
import planning from "../images/icon-planning.svg"
import iconDown from "../images/icon-arrow-down.svg"
import iconUp from "../images/icon-arrow-up.svg"
import menu from "../images/icon-menu.svg"
import close from "../images/icon-close-menu.svg"
import {NavCss} from "./styles/nav.styled"
import {detail} from "./styles/nav.styled"

export function Nav(){
    //drop-down ucin vary
    const [drop, setDrop] = useState("none")
    const [drop2, setDrop2] = useState("none")
    //buttony
    const [updown, setUpdown] = useState(iconDown);
    const [updown1, setUpdown1] = useState(iconDown);
    
    // drop-downy uytgedyan function
    function onDrop(){
		if(drop === "none"){
            setDrop("block")
            setUpdown(iconUp)
        } 
		else{
            setDrop("none")
            setUpdown(iconDown)
        } 
	}
    
    function onDrop2(){
		if(drop2 === "none"){
            setDrop2("block");
            setUpdown1(iconUp)
        } 
		else{
            setDrop2("none")
            setUpdown1(iconDown)
        } 
	}

    

    // kici ekranda X we beyleki ucin
    const [x, setX] = useState("none");      
    const [c, setC] = useState("block");
    const [a, setA] = useState("");

    // ekran basylanda none etmek ucin gerek
    let menuRef = useRef();
    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setDrop("none");
                setUpdown(iconDown);
            }
        }
        document.addEventListener("mousedown", handler)
        return ()=>{
            document.removeEventListener("mousedown", handler)
        }
    });

    let menuRef2 = useRef();
    useEffect(()=>{
        let handler2 = (e)=>{
            if(!menuRef2.current.contains(e.target)){
                setDrop2("none");
                setUpdown1(iconDown);
            }
        }
        document.addEventListener("mousedown", handler2)
        return ()=>{
            document.removeEventListener("mousedown", handler2)
        }
    });


    return(
    <NavCss baha = {drop}
    baha2 = {drop2}
    bahaX = {x}
    bahaC = {c}
    detail={a}>
    <div>
        <img src = {logo} alt =""/>
    </div>

    <span onClick = {()=>{
        setX("flex");
        setC("none")
        setA(detail);
        }}><img src = {menu} alt = ""/></span>
    


    <div>
        <span onClick = {()=>{
        setX("none");
        setC("block")
        setA("");}}><img src = {close} alt = ""/></span>

        <div>
            <div ref = {menuRef}><label  onClick={onDrop}><a href = "#features">Features</a><img src = {updown} alt = ""/></label>
                <div >
                    <div><img src={todo} alt = " "/><span>Todo List</span></div>
                    <div><img src={calendar} alt = " "/><span>Calendar</span></div>
                    <div><img src={reminders} alt = " "/><span>Reminders</span></div>
                    <div><img src={planning} alt = " "/><span>Planning</span></div>
                </div>
            </div>
            <div ref = {menuRef2}><label onClick={onDrop2}><a href = "#company">Company</a><img src = {updown1} alt = ""/></label>
                <div>
                    <a href="#history">History</a>
                    <a href="#team">Our Team</a>
                    <a href="#blog">Blog</a>
                </div>
            </div>
            <div><a href = "#careers">Careers</a></div>
            <div><a href = "#about">About</a></div>
        </div>
        <div>
            <div><a href = "#login">Login</a></div>
            <span>Register</span>
        </div>
    </div>
    
    </NavCss>
    )
}