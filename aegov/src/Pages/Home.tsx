
import { NavBar } from "../Components/NavBar"
import { Party12 } from "../Components/Party12"
import { SideBar } from "../Components/SideBar"
import { ViewInfo } from "../Components/ViewInfo"
import { useState } from "react"
import { Members } from "../Components/Members"
import { FileInfo } from "../Components/FileInfo"
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from "framer-motion";
import { AdminResp } from "../Components/AdminResp"


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


const mockDataa = [
    { id: 1, name: "سليم سليم سليم", email: "user@gmail.com", phone: "+971 3204 349" },
    { id: 2, name: "سليم سليم سليم", email: "user@gmail.com", phone: "+971 3204 349" },
    { id: 3, name: "سليم سليم سليم", email: "user@gmail.com", phone: "+971 3204 349" },
    { id: 4, name: "سليم سليم سليم", email: "user@gmail.com", phone: "+971 3204 349" },
];

export const Home = () => {
    const [selectedRow, setSelectedRow] = useState(false)
    console.log(selectedRow)


    return (
        <main className="flex flex-col p-3 gap-10">
            <AnimatePresence>
                {selectedRow && (
                    <motion.div className="relative  border-5 border-aegold-50 "
                        key="sidebar-modal">
                        <motion.div className="fixed inset-0 bg-black bg-[rgba(0,0,0,0.3)] z-[10]"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit" />
                        <motion.div className="fixed p-12 inset-y-0 right-0  w-full md:w-3/4 bg-[#FFFFFF] z-[30] overflow-auto shadow-lg "
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ViewInfo openSide={setSelectedRow} />
                        </motion.div>
                    </motion.div>

                )}
            </AnimatePresence>

            <h1 className="text-xl sm:text-5xl border sm:border-aegold-400">ملف التنفيذ</h1>
            <section className="rounded-md w-full h-[100px] border border-aegold-500 overflow-hidden">
                <NavBar />
            </section>
            <section className="flex flex-row justify-between gap-7">
                <div className="w-[23%] ">
                    <SideBar />
                </div>
                <div className="w-[75%] flex justify-between  gap-12 flex-col ">
                    {/* <FileInfo />
                    <AdminResp />
                    <Members /> */}
                    <Party12 mockData={mockDataa} openSide={setSelectedRow} partT="first"/>
                    <Party12 mockData={mockDataa} openSide={setSelectedRow} partT="second"/>

                </div>
            </section>
        </main >
    )
}
