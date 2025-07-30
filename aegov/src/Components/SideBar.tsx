import { useState } from "react"
import { FiInfo } from "react-icons/fi";

export const SideBar = () => {
    const [activeElt, setActiveElt] = useState("")
    console.log("activeElt =", activeElt);

    return (
        <main>
            <div className="aegov-tab tab-pills">
                <ul className="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto
                flex flex-col items-center " data-tabs-toggle="#SampleLayout-Tabs-07" role="tablist">

                    {/* <ul className="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto" data-tabs-toggle="#SampleLayout-Tabs-07" role="tablist"> */}
                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab1")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab1" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg> */}
                            معلومات الملف
                        </span>
                        {/* <button onClick={() => setActiveElt("tab1")} data-tabs-target="#body-item1-sample-07" role="tab" id="tab-item1-sample-01" aria-controls="body-item1-sample-07" className={`tab-link gap-3 whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start rounded-lg
                        ${activeElt==="tab1"?"bg-aegold-500 text-aegold-400":"" }`} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true" /><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
                            معلومات الملف
                        </button> */}
                    </li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab2")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab2" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>

                            <FiInfo size={25} />

                            بيانات الأطراف</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab3")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab3" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الجلسات القضائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab4")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab4" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            المطالبات</span></li>


                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab5")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab5" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الطلبات القضائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab6")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab6" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            القرارات الإجرائية</span></li>

                    <li role="presentation" className="w-11/12  flex flex-row justify-start items-center">
                        <span onClick={() => setActiveElt("tab7")} className={`gap-3 h-10 lg:h-12 px-4 lg:px-6 w-full flex justify-start items-center rounded-lg  ${activeElt === "tab7" ? "bg-aegold-200 text-aegold-400" : "hover:bg-slate-50"}`}>
                            <FiInfo size={25} />

                            الأحكام و القرارات </span></li>

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
