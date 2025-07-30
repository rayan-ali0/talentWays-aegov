import { FaPlus, FaEye } from "react-icons/fa6";

type PartyRow = {
    id: number;
    name: string;
    email: string;
    phone: string;
};


type Party12Props = {
    mockData: PartyRow[];
    openSide?: React.Dispatch<React.SetStateAction<boolean>>;
    partT: string

};

export const Party12 = ({ mockData, openSide, partT }: Party12Props) => {

    return (
        <main className="flex flex-col justify-between gap-8  rounded-lg" >
            <section className="flex flex-col sm:flex-row  justify-between sm:items-center gap-6 sm:gap-0  items-start sm:justify-start ">
                {partT === "first" ? (
                    <h5 className="text-[1.4em] sm:text-md md:text-xl lg:text-3xl sm:w-full">
                        الطرف الأول(المنفذ)
                    </h5>
                ) :
                    (
                    <h5 className="text-[1.4em] sm:text-md md:text-xl lg:text-3xl sm:w-full">
                            الطرف الثاني(المنفذ ضده)
                        </h5>
                    )}

                <button className="size-sm aegov-btn lg:size-lg md:size-md sm:w-auto w-full" type="button">
                    <FaPlus />
                    اضافة
                </button>
            </section>
            <section className="flex flex-col sm:flex-row justify-end gap-5">
                <div className="aegov-form-control control-secondary">
                    <div className="form-control-input">

                        <input type="search" name="search_input" id="search_input" placeholder="ابحث عن الاسم" />
                        <span className="control-prefix p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="16" />
                                <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                            </svg>
                        </span>
                    </div>
                </div>
                <button className="aegov-btn btn-outline" type="button">ابحث</button>

            </section>
            <section className="overflow-hidden">
                <div className="rounded-lg overflow-x-auto ">

                    <table className="w-full text-sm text-right 
                border-[3px]  border-[#f3f2f1]  ">
                        <thead >
                            <tr className="text-black bg-[#f3f2f1] h-14">
                                <th className="min-w-[130px] px-4 py-2">رقم التسلسل</th>
                                <th className="min-w-[160px] px-4 py-2">الإسم</th>
                                <th className="min-w-[160px] px-4 py-2">البريد الإلكتروني</th>
                                <th className="min-w-[160px] px-4 py-2">الهاتف</th>
                                <th className="min-w-[120px] px-4 py-2">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.map((row) => (
                                <tr key={row.id} className="text-black rounded-lg h-14">
                                    <td className="min-w-[130px] px-4 py-2 font-bold">{row.id}</td>
                                    <td className="min-w-[160px] px-4 py-2">{row.name}</td>
                                    <td className="min-w-[160px] px-4 py-2">{row.email}</td>
                                    <td className="min-w-[160px] px-4 py-2">{row.phone}</td>
                                    <td className="min-w-[120px] px-4 py-2 "><FaEye className="inline text-[#9C7B3F]" onClick={() => openSide?.(true)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="flex justify-end">
                <div className="flex items-center justify-center w-full md:w-auto ">
                    <div className="aegov-pagination " role="navigation">
                        <a className="aegov-pagination-previous" rel="prev" aria-label="Previous Page" href="#">
                            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                            </svg>
                            <span>السابق</span>
                        </a>
                        <a className="aegov-pagination-page aegov-pagination-smaller xs:hidden" title="Page 1" href="#">1</a>
                        <a className="aegov-pagination-page aegov-pagination-smaller" title="Page 2" href="#">2</a>
                        <span aria-current="page" className="aegov-pagination-current">3</span>
                        <a className="aegov-pagination-page aegov-pagination-larger" title="Page 4" href="#">4</a>
                        <a className="aegov-pagination-page aegov-pagination-larger xs:hidden" title="Page 5" href="#">5</a>
                        <span className="aegov-pagination-extend">...</span>
                        <a className="aegov-pagination-page aegov-pagination-larger" title="Page 17" href="#">17</a>
                        <a className="aegov-pagination-next" rel="next" aria-label="Next Page" href="#">
                            <span>التالي</span>
                            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none" />
                                <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
