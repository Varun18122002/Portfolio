import React from "react";
import { styles } from "../styles";


const Cards = () => {

    // bg-blue-500 bg-opacity-20 rounded-[50px] 
    return (
        <div className= {`${styles.paddingX} grid gap-0.2`}>
            <div className="align-left" >
                
                <p className="font-black text-white lg:text-[100px] md:text-[80px] sm:text-[70px] sm:pr-[18px] text-[70px] mt-2   ">Hello!!</p>
                <p className={"font-black text-white lg:text-[100px] md:text-[80px] sm:text-[70px] sm:pr-[18px] text-[60px]  mt-2  "}>I'm 
                <span className={`text-[#915eff]`}>&nbsp;Varun</span></p>
            </div>
            <div>
                <p className="text-[#dfd9ff] lg:block font-medium lg:text-[28px] sm:text-[15px] md:text-[20px]">
                    Well, I enjoy in creating, crafting &nbsp;<br className=" sm:block hidden xs:block"/>
                    and experience through coding <br className="sm:block hidden xs:block" />
                    <br className="sm:block xs:block hidden"/> And I love to <span className={`text-[#915eff]`}> CODE</span>
                </p>

            </div>
        </div>
    )
}

export default Cards;