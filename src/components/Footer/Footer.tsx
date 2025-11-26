import { ArrowUp, Github, Mail } from "lucide-react";
import { navItem } from "../../constant";
import Button from "../../ui/Button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    
    })
  }
  return (
    <>
      <footer className="w-full  bg-black  h-full px-2 md:px-16 py-10 flex flex-col gap-y-8 mt-2 xs:w-screen">
        <div 
       
        className="w-full flex justify-between h-full px-2  md:px-16 md:py-10 "
        >
          <div className="gap-4 md:gap-8 flex justify-between ">
            {navItem?.map((nav, index) => (
              <button
              key={index}
              className="cursor-pointer underlineAnimation"
              onClick={() => {
                const element = document.getElementById(nav.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {nav.name}
            </button>
            
            ))}
          </div>

          <div className=" flex gap-4 md:gap-8 float-right">
            <a href="">
              <Github size={"16px"} className="hover:scale-125 duration-300" />
            </a>

            <a href="">
              <Mail size={"16px"} className="hover:scale-125 duration-300" />
            </a>
          </div>
        </div>
        <div className=" border border-b-0 border-gray-700 w-full"></div>
        <div className="flex justify-between items-center">
            <p >© 2025 Portfolio. Built with React & Tailwind css</p>
            <Button iconFirst={<ArrowUp size={"1rem"}/>} title="" onClick={scrollToTop}/>
            
        </div>
      </footer>
     
    </>
  );
};

export default Footer;
