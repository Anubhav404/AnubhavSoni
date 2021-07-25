import React from "react"

import "./Whatsapp.css"

const CardPart = (props) => {
    return (
        <>
        <div className="main_msg_box">

         <img width="60px" height="60px" className="main_img" src={props.img}/>
        <div className="message_part">
            <li>{props.name} <span className="span">{props.time} </span></li>
            <li>{props.msg} <span className="span">{props.emojis} </span></li>

        </div>
        </div>
        </>
    )
}

export default CardPart;