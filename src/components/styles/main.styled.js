import styled from "styled-components"

export const MainDiv = styled.div`
    margin: 0px auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    max-width: 900px;
    padding: 20px;
    
    @media(max-width:500px){
        flex-direction: column;
        padding: 0px;
    }
`

export const ImgDiv = styled.div`
    img{
        width: min(21rem, 43vw);
    }

    @media(max-width: 500px){
        img{
            width: 100%;
        }
    }
    
`

export const OtherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        width: min(24.5rem, 49vw);
        line-height:  min(4rem, 8vw);
        padding-top: 60px;
        font-size: min(4rem, 8vw);
        
    }
    p{  
        color:hsl(0, 0%, 41%);
        font-size: min(1rem, 1.8vw);
        width: min(22rem, 43vw);
        
    }
    span{   
        width: min(7.5rem, 16.27vw);
        font-size: min(1rem, 2.17vw);
        padding: min(0.5rem, 1.08vw) 0px;
        text-align: center;
        border: 1px black solid;
        border-radius: 10px;
        color: white;
        background-color: black;
        &: hover{
            color: black;
            background-color: hsl(0, 0%, 98%);;
            cursor: pointer;
        }
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img:nth-of-type(1){
        width: min(5.3rem, 11.5vw);
    }
    img:nth-of-type(2){ 
        width: min(3.4rem, 7.37vw);
    }
    img:nth-of-type(3){
        width: min(4.2rem, 9.11vw);
    }
    img:nth-of-type(4){
        width: min(4rem, 8.67vw);
    }

    @media(max-width:500px){
        h1{
            margin: 0px auto;
            font-size: 10vw;
            width: auto;
        }
        p{  
            text-align: center;
            padding: 0px 5px;
            margin: 0px auto;
            margin-top: 20px;
            font-size: 5.2vw;
            width: auto;
        }
        span{
            margin: 40px auto;
            width: 7.5rem;
            font-size: 1rem;
            padding: 0.5rem 0px;
        }
        div{
            margin: 0px 20px;
            display: flex;
            justify-content: space-between; 
            height: 20px;     
        }

        img:nth-of-type(1){
            width: max(5.3rem, 11.5vw);
        }
        img:nth-of-type(2){ 
            width: max(3.4rem, 7.37vw);
        }
        img:nth-of-type(3){
            width: max(4.2rem, 9.11vw);
        }
        img:nth-of-type(4){
            width: max(4rem, 8.67vw);
        }
    }
`