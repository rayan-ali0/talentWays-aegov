import { IoMdClose } from "react-icons/io";
import { InfoTable } from "./InfoTable";

type ViewInfoProps = {
    openSide: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ViewInfo = ({ openSide }: ViewInfoProps) => {
    return (
        <main>
            {/* section for الطرف الاول */}
            <section className=" mb-16 ">
                <div className="flex flex-row justify-between pb-6 mb-6 border-b-[3px] border-[#f3f2f1]">

                    <span className="font-bold text-[1.6em] sm:text-md md:text-xl lg:text-3xl">الطرف الأول (المنفذ)</span>
                    <span><IoMdClose className="text-2xl" onClick={() => openSide(false)} /></span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-6">
                    <div className="flex flex-col w-full sm:w-6/12 h-full gap-4">
                        <span className="font-bold text-lg"> طبيعة الطرف</span>
                        <span className="text-aegold-500">شخص طبيعي</span>
                    </div>
                    <div className="flex flex-col w-full sm:w-6/12 h-full gap-4 ">
                        <span className="font-bold text-lg">درجة الرقابة</span>
                        <span className="text-aegold-500">اختر</span>
                    </div>
                </div>
            </section>

            {/* section for البيانات الرئيسية*/}

            <section className="mb-16">
                <div className="flex flex-row justify-between pb-6 mb-6 border-b-[3px] border-[#f3f2f1]">
                    <span className="font-bold text-[1.6em] sm:text-md md:text-xl lg:text-3xl"> البيانات الأساسية </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-6 mb-6">
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4  ">
                        <span className="font-bold text-lg">الإسم باللغة العربية</span>
                        <span className="text-aegold-500"> محمد محمد محمد</span>
                    </div>
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4 ">
                        <span className="font-bold text-lg"> الاسم باللغة الانجليزية</span>
                        <span className="text-aegold-500">Mohammed Mohammed Mohammed</span>
                    </div>
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4 ">
                        <span className="font-bold text-lg"> الجنس</span>
                        <span className="text-aegold-500">ذكر</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-6  mb-6">
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4 ">
                        <span className="font-bold text-lg"> الديانة </span>
                        <span className="text-aegold-500">  ديانة </span>
                    </div>
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4 ">
                        <span className="font-bold text-lg">  تاريخ الميلاد</span>
                        <span className="text-aegold-500">  29/09/1990</span>
                    </div>
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4 ">
                        <span className="font-bold text-lg"> الحالة الاجنماعية</span>
                        <span className="text-aegold-500">متزوج</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-start border-b-[3px] border-[#f3f2f1] pb-6  mb-6">
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4  ">
                        <span className="font-bold text-lg"> مكان الاقامة </span>
                        <span className="text-aegold-500">  دبي </span>
                    </div>
                    <div className="flex flex-col w-full sm:w-4/12 h-full gap-4  ">
                        <span className="font-bold text-lg">   الجنسية</span>
                        <span className="text-aegold-500"> الإمارات العربية المتحدة</span>
                    </div>

                </div>

            </section>

            <section className=" mb-16 ">
                <InfoTable butI="proofs" />
                <InfoTable butI="address" />
                <InfoTable butI="contact" />
            </section>

            <section className="border-t-[3px] border-[#f3f2f1] flex flex-col-reverse sm:flex-row justify-end gap-5 pt-6">
                <button className="aegov-btn btn-outline" type="button"> إلغاء</button>
                <button className="aegov-btn" type="button">تأكيد</button>

            </section>
        </main>
    )
}
