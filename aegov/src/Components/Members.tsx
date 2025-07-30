
type PartyRow = {
    name: string;
    role: string;
    appt: string;
    dateStart: string;
    dateFinish: string;

};



const mockData: PartyRow[] = [
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
    { name: "سليم سليم سليم", role: "قاضي", appt: "تعيين", dateStart: "25/5/2025", dateFinish: "25/7/2025" },
];

export const Members = () => {
    return (
        <main className="flex flex-col justify-between gap-8   rounded-lg" >
            <section className="">
                <h5 className="text-[1.6em] sm:text-md md:text-xl lg:text-3xl">
                    أعضاء الهية
                </h5>
            </section>
            <section className="flex flex-col sm:flex-row justify-end gap-5 ">
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
            <section className="overflow-x-auto">
                <table className="w-full text-sm text-right 
                    border-[3px]  border-[#f3f2f1] rounded-lg">
                    <thead >
                        <tr className="text-blue bg-[#f3f2f1] h-14">
                            <th className="min-w-[160px] px-4 py-2">الاسم</th>
                            <th className="min-w-[160px] px-4 py-2">الدور</th>
                            <th className="min-w-[160px] px-4 py-2">تعيين او ندب؟ </th>
                            <th className="min-w-[160px] px-4 py-2">تاريخ الندب</th>
                            <th className="min-w-[160px] px-4 py-2">تاريخ الانتهاء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((row) => (
                            <tr key={row.name} className="text-black rounded-lg h-14">
                                <td className="min-w-[160px] px-4 py-2 font-bold">{row.name}</td>
                                <td className="min-w-[160px] px-4 py-2">{row.role}</td>
                                <td className="min-w-[160px] px-4 py-2">{row.appt}</td>
                                <td className="min-w-[160px] px-4 py-2">{row.dateStart}</td>
                                <td className="min-w-[160px] px-4 py-2">{row.dateFinish}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="flex justify-end">
                <div className="flex items-center justify-center">
                    <div className="aegov-pagination max-sm:hidden" role="navigation">
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
