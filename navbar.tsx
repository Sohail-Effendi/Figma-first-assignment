import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container mx-20">
        <nav className="text-white justify-around flex w-[1322px] h-[91px] left-[58px] items-center">
        <div className="w-[187px] h-[58px] mt-[17px] flex left-[136px] items-center">
        <h3 className="w-[152px] h-[32px] top-[13px] font-bold text-[24px] leading-[32px] tracking-[0.1px] mb-4"> BrandName </h3>
        </div>
               <div className="flex w-[815px] h-[58px] top-[16px] left-[364px] justify-between items-center">
               <ul className="flex w-[275px] h-[24px] gap-[21px]">
                    <li className="w-[43px] h-[24px]"> Home </li>
                    <li className="w-[59px] h-[24px]"> Product </li>
                    <li className="w-[52px] h-[24px]"> Pricing </li>
                    <li className="w-[58px] h-[24px]"> Contact </li>
                    </ul>
          
          <div className="w-[189px] h-[52px] top-[3px] flex justify-between rounded-md items-center mx-24">
          
                <div className="w-[41px] h-[22px]"> Login </div>
                <div className="bg-[#23A6F0] w-[110px] h-[52px] px-6 py-4">JOINUS </div>
            </div>
            </div>
            </nav>
        </div>

    )
}