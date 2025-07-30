
export const NavBar = () => {
    return (
        <main className="bg-[#f3f2f1] w-full h-full flex flex-row justify-between p-4">
            <section className="flex flex-col h-full justify-around">
                <span className="font-bold">عنوان1</span>
                <span>القيمة</span>
            </section>

            <section className="flex flex-col h-full justify-around">
                <span className="font-bold">عنوان</span>
                <span>162626</span>
            </section>

            <section className="flex flex-col h-full justify-around">
                <span className="font-bold">عنوان</span>
                <span>1717</span>
            </section>

            <section className="flex flex-col h-full justify-around">
                <span className="font-bold">عنوان</span>
                <span>2727</span>
            </section>

            <section className="flex flex-col h-full justify-around">
                <span className="font-bold">عنوان</span>
                <span className="bg-aegreen-600 text-whitely-50 py-1 px-2 rounded-lg"> تفعيل</span>
                {/* <button className="aegov-btn btn-secondary" type="button">اضافة</button> */}
            </section>

        </main>
    )
}
