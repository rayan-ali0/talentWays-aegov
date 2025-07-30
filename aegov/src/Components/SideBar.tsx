import { useState } from "react"
import { FiInfo } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from "framer-motion";

type sideBarProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const sidebarVariants: Variants = {
    hidden: { x: '100%' as const },
    visible: { x: '0%' as const, transition: { type: 'spring', stiffness: 300, damping: 30 } }, // Slide IN from left
    exit: { x: '100%' as const, transition: { type: 'spring', stiffness: 300, damping: 30 } } // Slide OUT to the left
};

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
};


export const SideBar = ({ isOpen, setIsOpen }: sideBarProps) => {
    const [activeElt, setActiveElt] = useState("")
    // const [isOpen, setIsOpen] = useState(false)

    console.log("activeElt =", activeElt);

    return (
        <main className=" h-[600px] overflow-hidden">
            {isOpen ? (
                <AnimatePresence>
                    <motion.div className="relative  border-5 border-aegold-50 "
                        key="sidebar-modal">
                        <motion.div className="fixed inset-0 bg-black bg-[rgba(0,0,0,0.3)] z-[1]"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" />
                        {/* <motion.div className="fixed p-12 inset-y-0 right-0  w-full md:w-3/4 bg-[#FFFFFF] z-[30] overflow-auto shadow-lg "
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ViewInfo openSide={setSelectedRow} />
                        </motion.div> */}
                    </motion.div>
                </AnimatePresence>



            ) : (<></>)}
            <div className={`${isOpen ? " fixed p-12 inset-y-0 right-0 w-full md:w-3/4 bg-[#FFFFFF] z-[2] overflow-auto shadow-lg" : "aegov-tab tab-pills h-full"}`}>
                <div className={` ${isOpen?"block":"lg:hidden"}`}>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} color="#B68A35" />
                </div>
                <ul className={` 
                tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto
                lg:flex flex-col items-center h-full overflow-y-auto
             scrollbar-thin
               scrollbar-thumb-aegold-400
  scrollbar-track-aegold-200
  scrollbar-thumb-rounded
  scrollbar-track-rounded ${isOpen?" flex mt-8 right-3 w-11/12 z-[3]":"hidden"}`}
                    data-tabs-toggle="#SampleLayout-Tabs-07" role="tablist">

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() =>{ {setActiveElt("tab1");setIsOpen(false)} ;setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab1" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />
                            معلومات الملف
                        </span>
                    </li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab2");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab2" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>

                            <FiInfo size={25} />

                            بيانات الأطراف</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab3");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab3" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الجلسات القضائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab4");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab4" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            المطالبات</span></li>


                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab5");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab5" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الطلبات القضائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab6");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab6" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            القرارات الإجرائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab7");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab7" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الأحكام و القرارات </span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => {setActiveElt("tab8");setIsOpen(false)}} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab8" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />
                            الإشعارات
                        </span>
                    </li>


                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab8")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab8" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />
                            الإشعارات
                        </span>
                    </li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab8")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab8" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />
                            الإشعارات
                        </span>
                    </li>





                </ul>
            </div>


        </main>
    )
}
