import { useState,useEffect } from "react";
const honorList=[
    "2022-09-03 賀！本校榮獲111年度雙和區語文競賽，國中團體組第二名！",
    "022-08-31 狂賀!!恭喜901參加「111年新北市學生美展」榮獲佳績!",
    "2022-06-14 狂賀!!!本校學生參加110學年度校園菸檳危害防制教育介入輔導計畫「網紅就是你」短片競賽榮獲國中組佳作",
    "2022-06-14 狂賀!!!本校榮獲110學年度校園菸檳危害防制教育介入輔導計畫「校園菸檳危害防制教育推廣」績優學校榮獲『優等』！",
    "2022-06-14 狂賀!!!本校榮獲110學年度健康促進學校輔導計畫前後測成效評價成果報告-優良",
    "2021-12-15 狂賀！恭喜本校參加「110年新北市學生美展」榮獲佳績！",
    "2021-12-02 賀！本校學生參加110年度弘揚孝道繪畫及漫畫比賽榮獲佳績",

]
const HomeValue=()=>{

return(
    <div className="container flex-auto h-max ml-7">
    
        <div className="h-max">
<img src="https://www.zcjh.ntpc.edu.tw/var/file/0/1000/randimg/mobileadv_158_3819310_87386.jpg"></img>
    </div> 
    <div className="dots  mt-3 flex justify-center">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>    
    </div>
    {honorList.map(link=>(
    <div className="border-b border-gray-400 py-2 px-3 hover:text-violet-600">{link}</div>
))}

 
   
    </div>
)

}

export default HomeValue