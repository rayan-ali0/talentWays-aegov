

export const AdminResp = () => {
  return (
    <main className='w-full gap-3'>

      <section className='flex flex-row justify-between mb-8'>
        <h5 className="text-[1.6em] sm:text-md md:text-xl lg:text-3xl">
          الهيئة المسؤولة</h5>
      </section>

      <section className=' flex flex-col gap-10 '>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-5">

          <div className="flex flex-col gap-3 w-6/12">
            <span className="font-bold">اسم المحكمة</span>
            <span className="text-aegold-500">محكمة</span>
          </div>
          <div className="flex flex-col gap-3 w-6/12">
            <span className="font-bold">رمز المحكمة </span>
            <span className="text-aegold-500">123</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 justify-between border-b-[3px] border-[#f3f2f1] pb-5">
          <div className="flex flex-col gap-3 w-6/12">
            <span className="font-bold">اسم الدائرة</span>
            <span className="text-aegold-500">دائرة تنفيذ</span>
          </div>
          <div className="flex flex-col gap-3 w-6/12">
            <span className="font-bold"> رمز الدائرة</span>
            <span className="text-aegold-500">23423</span>
          </div>
        </div>
      </section>
    </main>
  )
}
