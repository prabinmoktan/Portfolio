interface skillCardTypes{
    title: string;
    icon: string;
    description: string;
}


const SkillCard = ({title, icon, description}: skillCardTypes) => {
  return (
    <>
    <div className="w-full flex flex-col  items-center dark:bg-zinc-800 dark:hover:bg-zinc-800 hover:bg-blue-50 hover:outline hover:outline-gray-800 border border-gray-700 rounded-2xl px-10 text-center py-3">
        <img src={icon} alt="" className="h-8 w-8 aspect-square text-white"/>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="dark:text-gray-300">{description}</p>

    </div>
    
    </>
  )
}

export default SkillCard