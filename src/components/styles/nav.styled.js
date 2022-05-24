import styled from "styled-components"

export const NavCss = styled.div`
    // background-color: red;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    & > span{
        display: none;
        img{
            width: 25px;
        }
    }
    & > div:nth-of-type(1){
        margin-top: 10px;
        & > img{
            width: 60px;
        }
    }
    & > div:nth-of-type(2){
        margin-left: 40px;
        width: 100%;
        // background-color: yellow;
        display: flex;
        justify-content: space-between;
        & > div{
            & > div{
                display: inline-block;
                position: relative;
                margin: 0px min(1rem, 2vw);
                // font-size: 0.75rem;
                font-size: min(0.75rem, 1.63vw);
                a{
                    text-decoration: none;
                }
                img{
                    margin-left: 5px;
                    width: 8px;
                }
                & > div{
                    position: absolute;
                    right: 0px;
                    top: 30px;
                    display: ${({baha})=>baha};
                    min-width: 110px;
                    padding: 8px 15px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 2px 2px 10px hsl(0, 0%, 41%);
                    div{
                        margin: 8px 0px;
                    }
                    img{
                        margin-right: 10px;
                    }
                }
            
            }
            & > div:nth-of-type(2){
                position: relative;
                display: inline-block;
                & > div{
                    position: absolute;
                    display: ${({baha2})=>baha2};
                    left: 0px;
                    right: default;
                    min-width: 90px;
                    a{
                        display: block;
                        margin: 8px 0px;
                        color: black;
                    }
                }
            }
            
        }
        & > div:nth-of-type(2){

            span{
                margin-left: 10px;
                font-size: 0.75rem;
                border: 2px solid black;
                border-radius: 7px;
                padding: 4px 12px;
            }
        }

        & > span{
            display: none;
            img{
                width: 25px;
            }
        }
        
    }
    
    @media(max-width:500px){
        justify-content: space-between;
        & > span{
            display: ${({bahaC})=>bahaC};
        }
        & > div:nth-of-type(2){
            display: none;
        }
        & > div:nth-of-type(2){
            & > div{
                & > div{
                    font-size: 0.75rem;    
                }
            }
            & > span{
                display: ${({bahaX})=>bahaX};
            }
            ${({detail})=>detail}
        }        
    }   
    
`


export const detail = `
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: flex-start;
    width: 60%;
    position: absolute;
    right: 0;
    top:0;
    height: 100%;
    & > span{
        align-self: end;
        padding: 20px 30px;
    }
    & > div{
        display: flex;
        flex-direction: column;
        & > div{
            position: static;
            background-color: white;
            
            margin-bottom: 20px;
            & > div{
                background-color: white;
                box-shadow: none;
                position: static;
                
            }
        }
        & > div:nth-of-type(2){
            position: static;
            margin-bottom: 20px;
            & > div{
                position: static;
            }
        }
        & > span{
            align-self: center;
        }

    }
    & > div:nth-of-type(2){
        
        div{
            align-self: center;
            
        }
    }    
    
`


