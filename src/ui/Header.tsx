import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
import styles from "./Header.module.css"
import RouteLink from "./RouteLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-screen  h-20 px-2">
        <h3 className="text-3xl">PORTFOLIO</h3>
        <nav 
        
        className={`flex justify-between w-1/3 ${styles.headerItem}` }
        >
          {/* {navItem &&
            navItem?.map((item, index) => (
              <Button title={item.name} key={index}/>
            ))} */}
            <RouteLink/>
        </nav>
        {showMenu ? <X onClick={()=> setShowMenu(!showMenu)} className="md:hidden"/> : <TextAlignJustify onClick={()=> setShowMenu(!showMenu)} className="md:hidden"/>}
      </div>
    </>
  );
};

export default Header;
