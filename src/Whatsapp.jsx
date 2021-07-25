import React from "react"

import "./Whatsapp.css"
import CardPart from "./CardPart"

const Whatsapp = () => {
    return (
        <>
            <div className="main_class">
                <div className="heading_part">
                    <h2>Whatsapp</h2>
                    <ul>
                        <img width="30px" height="30px" className="img_1" src="https://img.icons8.com/ios/50/000000/search.png" />
                        <img src="https://img.icons8.com/ios/50/000000/ellipsis.png" />
                    </ul>
                </div>
                <div className="components">
                    <img src="https://img.icons8.com/material-outlined/24/000000/camera--v2.png" />
                    <li>CHATS</li>
                    <li>STATUS</li>
                    <li>CALLS</li>
                    
                </div>
                <div className="cards">
                    <CardPart
                        time="2:45 AM"
                        emojis="😍"
                        img="https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/06/full/1599414882-8697.jpg"
                        name="Elon Musk"
                        msg="Next is Ethereum"
                    />

                    <CardPart
                        time="6:23 AM"
                        emojis="🤷‍♂️"
                        img="https://www.gulftoday.ae/-/media/gulf-today/images/articles/opinion/2021/2/4/jeff-bezos.ashx?h=450&la=en&w=750&hash=8A7D996DE1101C1F7F6F19E3FD78B955"
                        name="Jeff Bezoz"
                        msg="Moon We Are Coming!!"
                    />

                    <CardPart
                        time="7:45 PM"
                        emojis="💖"
                        img="https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F08%2Fsir-richard-branson-BRANSONBEER0719.jpg"
                        name="RichardBarson"
                        msg="Jeff Don't Leave Without Me"
                    />

                    <CardPart
                        time="8:34 PM"
                        emojis="👌"
                        img="https://th.bing.com/th/id/OIP.1RPc0OU88Erov_-mYqMgNwHaE8?pid=ImgDet&rs=1"
                        name="Amit Shah"
                        msg="Chlo International Trip Pr "
                    />

                    <CardPart
                        time="9:00 PM"
                        emojis="🐱‍🏍"
                        img="https://th.bing.com/th/id/OIP.eTvxzFQE-PJhf63-hEkO7AHaEK?pid=ImgDet&rs=1"
                        name="Modi"
                        msg="Abb Konsi trip pr chalna h "
                    />

                    <CardPart
                        time="6:08 AM"
                        emojis="🙌"
                        img="https://th.bing.com/th/id/OIP.rXMBsAYsdDhukYObjaojDgHaFj?pid=ImgDet&rs=1"
                        name="Mamta Baneerje"
                        msg="Ruko Me Bhi Aa rhi hu "
                    />
                </div>
            </div>
        </>
    )
}

export default Whatsapp;