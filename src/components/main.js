import React, { useEffect, useState } from "react";
import {MainDiv, ImgDiv, OtherDiv} from "./styles/main.styled";
import audio from "../images/client-audiophile.svg"
import databiz from "../images/client-databiz.svg"
import maker from "../images/client-maker.svg"
import meet from "../images/client-meet.svg"
import desktop from "../images/image-hero-desktop.png"
import mobile from "../images/image-hero-mobile.png"

export const Main=()=>{
    const [width, setWidth] = useState(window.innerWidth);

    function handleResize(){
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
       window.addEventListener("resize", handleResize)
       return ()=>{
        window.removeEventListener("resize", handleResize)
       }
    
    },[])


    let img = desktop;
    if(width <= 500){
        img = mobile;
    }

    return(
        <MainDiv>
            <ImgDiv>
                <img src = {img} alt = ""/>
            </ImgDiv>
            
        
            <OtherDiv>
                <h1>Make remote work </h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <span>Learn more</span>
                <div>
                    <img src = {databiz} alt = ""/>
                    <img src = {audio} alt = ""/>
                    <img src = {meet} alt = ""/>
                    <img src = {maker} alt = ""/>
                </div>
            </OtherDiv>
        </MainDiv>
    )
}