"use client";
import { AnimatePresence , motion } from "framer-motion";
import Navbar from "./Navbar";
import Video from "./Video";

const TransistionProvider = ({children}) =>{

return(
    <AnimatePresence>
    <div className="w-screen h-screen bg-black to-green to-pink">
    <motion.div className="h-screen w-screen fixed bg-gradient-to-b from-green-300 to-pink-300 rounded-b-[100px] z-40"
        animate ={{height:"0vh"}}
        exit ={{height:"100vh"}}
        transition={{duration:2.5 , ease:"easeOut"}}
        
    />
    <div className="h-24">
        <Navbar/>
        <Video/>
    </div>
    <div className="h-[calc(100vh-6rem)]" >{children}</div>
    </div>
    </AnimatePresence>

)
}

export default TransistionProvider