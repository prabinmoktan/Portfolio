import { navItem } from "../constant";
import { motion } from "framer-motion";

const RouteLink = () => {
  return (
    <>
      <div className=" w-full flex justify-between">
        {navItem?.map((item, id) => (
          <motion.div
          key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: id * 0.1 }}
          >
            <button
              
              className=" cursor-pointer underlineAnimation"
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default RouteLink;
