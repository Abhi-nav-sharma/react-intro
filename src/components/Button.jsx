import React from "react";
import styles from "./Button.module.css"
const getStyleType=(type)=>{
    switch(type){
        case 'success':
            return{
                color: 'red'
            }
        case 'warning':
            return{
                color:'orange'
            }
        case 'error':
            return{
                color:'green'
            }
        default:
            return {}
    }
}

function Button(props){
    const {title,disabled,type}=props

    const style= {
        //camel case
        padding: '1rem',
        margin: "0.25rem",
        minWidth:'10rem'
    }
    const styleType= getStyleType(type)
    console.log(styles)
    // return(<button style={style}>
    return(
        <>
    <button disabled={disabled} className={styles.button} style={styleType}>
        {title}
    </button>
    <div></div>
    </>
    )
}

export default Button