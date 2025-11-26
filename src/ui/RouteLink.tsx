import { navItem } from "../constant"

const RouteLink = () => {
  return (
    <>
    <div className=" w-full flex justify-between">
    {
        navItem?.map((item, id)=>(
            <button key={id} className=" cursor-pointer underlineAnimation" onClick={()=>{
                const element = document.getElementById(item.id)
                if(element){
                    element.scrollIntoView({behavior: "smooth"})
                }
            }}>
            {item.name}
        </button>
        ))
    }
    </div>
   
   
    </>
  )
}

export default RouteLink