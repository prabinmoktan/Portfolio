import { ExternalLink } from "lucide-react";
import ecommerce from "../../assets/ecommerce.png";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

interface CardTypes{
    title: string;
    description: string;
    technologies?: string[];
    onClick?: React.ReactEventHandler;
    disabled?: boolean;
}


const Card = ({title, description, technologies, onClick, disabled } : CardTypes) => {
  
  return (
    <>
   

   
      <div className=" dark:bg-black/60 dark:hover:bg-zinc-900 hover:bg-blue-50  rounded-lg dark:border transition-all duration-300 dark:border-gray-800 overflow-hidden flex flex-col gap-8 px-5 pb-5  ">
        <div className="overflow-hidden">

        <img src={ecommerce} alt="logo" className="w-full hover:scale-130 h-70 transform transition-transform duration-350 overflow-hidden"/>
        </div>
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-zinc-400">
         {description}
        </p>
        <div className="flex gap-x-5 flex-wrap gap-y-2">
            {
                technologies?.map((tech, index)=>(
                    <Badge key={index} title={tech} initial/>
                ))
            }

        </div>
        <div className="flex gap-10">
            <Button title={"Live Demo"} iconFirst={<ExternalLink size={'14px'}/>} normal onClick={onClick} disabled={disabled}/>
            {/* <Button title={"View Code"} iconFirst={<Github size={'14px'}/>} normal onClick={onClick}/> */}
        </div>
      </div>
     
    
      
    </>
  );
};

export default Card;
