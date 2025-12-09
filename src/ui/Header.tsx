"use client";

import { TextAlignJustify, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RouteLink from "./RouteLink";
import { navItem } from "../constant";
import styles from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: { key: string; }) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center w-full h-20 px-5 md:px-10 fixed top-0 left-0    backdrop-blur-md z-50 shadow-sm">
        <h3 className="text-3xl font-semibold tracking-tight">PORTFOLIO</h3>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex justify-between w-1/3 ${styles.headerItem}`}>
          <RouteLink />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
        >
          {showMenu ? <X size={28} /> : <TextAlignJustify size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 text-gray-600 backdrop-blur-sm z-50"
            onClick={() => setShowMenu(false)}
          >
            {/* Sliding Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 w-3/4 h-full bg-white shadow-xl p-6 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()} // prevent closing on inside click
            >
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="self-end p-2 rounded-lg hover:bg-black/5"
              >
                <X size={28} />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col gap-4 text-lg font-medium">
                {navItem.map((item) => (
                  <button
                    key={item.id}
                    className="text-left py-2 px-2 rounded hover:bg-black/5 transition"
                    onClick={() => {
                      const element =document.getElementById(item.id);
                      if(element){
                        element.scrollIntoView({behavior: 'smooth'})
                      }
                      // Close menu after clicking
                      setShowMenu(false);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
