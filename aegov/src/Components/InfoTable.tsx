import { FaPlus, FaEye } from "react-icons/fa6";



type InfoTableProps = {
    butI: "proofs" | "address" | "contact"; // You can keep it generic as `string` if needed
};

type tab1 = {
    النوع: string;
    الرقم: number;
    الحالة: string;

};


const mockData: tab1[] = [
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
    { النوع: "جواز السفر", الرقم: 1234567, الحالة: "سارية" },
];


type tab2 = {
    النوع: string;
    الدولة: string;
    "الإمارة/المدينة": string;

};



const mockData2: tab2[] = [
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
    { النوع: "جواز سفر", الدولة: "جمهورية مصر العربية", "الإمارة/المدينة": "القاهرة" },
];


type tab3 = {
    "طريقة التواصل": string;
    البيانات: number;
    النوع: string;

};



const mockData3: tab3[] = [
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
    { "طريقة التواصل": "هاتف متحرك", البيانات: +971567801, النوع: "عمل" },
];

export const InfoTable = ({ butI }: InfoTableProps) => {
    const headers1 = Object.keys(mockData[0]);
    const headers2 = Object.keys(mockData2[0]);
    const headers3 = Object.keys(mockData3[0]);
    return (
        <main className="mb-16">
            {butI === "proofs" ?
                (
                    <section className="mb-5 text-[1.6em] sm:text-md md:text-xl lg:text-3xl font-bold">
                        الثبوتيات
                    </section>
                ) :
                butI === "address" ? (
                    <section className="mb-5 text-[1.6em] sm:text-md md:text-xl lg:text-3xl font-bold">
                        العناوين
                    </section>
                ) : (
                    <section className="mb-5 text-[1.6em] sm:text-md md:text-xl lg:text-3xl font-bold">
                        بيانات التواصل
                    </section>
                )
            }



            <section className="rounded-lg overflow-hidden">
                <div className="w-full  overflow-x-auto">


                    <table className="w-full text-sm text-right 
                border-[3px]  border-[#f3f2f1]">
                        <thead >
                            {butI === "proofs" ? (
                                <tr className="text-black bg-[#f3f2f1] h-14">

                                    {headers1.map((header, i) => (
                                        <th key={i} className="min-w-[160px] px-4 py-2">{header}</th>

                                    ))
                                    }
                                    <th className="min-w-[120px] px-4 py-2">الإجراءات</th>


                                </tr>
                            ) : butI === "address" ? (
                                <tr className="text-black bg-[#f3f2f1] h-14">

                                    {headers2.map((header, i) => (
                                        <th key={i} className="min-w-[160px] px-4 py-2">{header}</th>

                                    ))
                                    }
                                    <th className="min-w-[120px] px-4 py-2">الإجراءات</th>


                                </tr>
                            ) : (
                                <tr className="text-black bg-[#f3f2f1] h-14">

                                    {headers3.map((header, i) => (
                                        <th key={i} className="px-4 py-2">{header}</th>

                                    ))
                                    }
                                    <th className="px-4 py-2">الإجراءات</th>


                                </tr>
                            )}

                        </thead>
                        <tbody>
                            {mockData.map((row, i) => (
                                <tr key={i} className="text-black rounded-lg h-14">
                                    <td className="px-4 py-2 font-bold">{row.النوع}</td>
                                    <td className="px-4 py-2">{row.الرقم}</td>
                                    <td className="px-4 py-2">{row.الحالة}</td>
                                    <td className="px-4 py-2 "><FaEye className="inline text-[#9C7B3F]" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}
