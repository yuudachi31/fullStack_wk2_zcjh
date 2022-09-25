import { useState,useEffect } from "react";
const Sidebar=()=>{
const sibarlink=["111新北市美術比賽(東區臺商專區)",
"家庭教育專區",
"110教學正常化",
"學習扶助資源中心",
"自強國中本土語專區",
"110學年度公開授課",
"校外人士協助教學或活動專區",
"新北市課程計畫備查資源網"
]
return(
    <>
    
        <div className="container w-64 h-max ">
       <img className="w-36 mb-12"src="https://www.zcjh.ntpc.edu.tw/var/file/0/1000/plugin/mobile/pictures/linkdet_239_8389827_70367.jpg"></img>
       <img className="w-36 mb-6"src="https://www.zcjh.ntpc.edu.tw/var/file/0/1000/plugin/mobile/pictures/linkdet_246_4165260_05570.png
"></img>
<div className=" text-xl border-b-2 border-gray-700 text-center pb-2">
    各專區連結
</div>
<div className="relative">
    {sibarlink.map(link=>(
    <div className="border-b border-gray-400 py-2 px-3 link-style  hover:text-violet-600">{link}</div>
))}
</div>

    </div> 
    


 
   
    </>
)

}

export default Sidebar