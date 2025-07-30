
export const FileInfo = () => {
    return (
        <main className='w-full gap-3'>

            <section className='flex flex-row justify-between mb-8'>
                <h5 className="text-[1.6em] sm:text-md md:text-xl lg:text-3xl">
                    معلومات الملف</h5>
                <button className="aegov-btn btn-sm btn-soft btn-secondary text-aegreen-400" type="button">قيد التداول</button>
            </section>

            <section className=' flex flex-col gap-10 '>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-5">
                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold">رقم الملف</span>
                        <span className="text-aegold-500">AJM-D01/2014/FI</span>
                    </div>
                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold">طبيعة الخلاف </span>
                        <span className="text-aegold-500">مدني</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-5">
                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold">نوع الملف</span>
                        <span className="text-aegold-500">ملف تنفيذ</span>
                    </div>
                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold"> درجة التقاضي</span>
                        <span className="text-aegold-500">---</span>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-5">

                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold"> تاريخ الانتاج</span>
                        <span className="text-aegold-500">25/12/2023</span>
                    </div>
                    <div className="flex flex-col gap-3 w-6/12">
                        <span className="font-bold">تاريخ التحديث</span>
                        <span className="text-aegold-500">25/12/2023</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
