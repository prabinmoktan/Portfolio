import { Github, Mail, MoveRight } from "lucide-react";
import unknown from "../../assets/Unknown.png";
import "../../index.css";
import Button from "../../ui/Button";
import { email, githubLink } from "../../constant";
import { easeInOut, motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <section id="heroSection ">
        <section className="grid md:grid-cols-2 md:gap-10 sm:grid-cols-1 md:px-10 h-[60vh] items-center">
          <div className="flex flex-col gap-y-8 w-full mt-10">
            <div>
              <p className="glassmorphism border  text-blue-500 py-2 px-12 inline-flex rounded-3xl  ">
                Available for work
              </p>
            </div>

            <div>
              <motion.h3
                className="text-7xl font-bold"
                initial={{ y: -10, opacity: 0 }}
                animate={{y:0, opacity: 1}}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                PRABIN LAMA
              </motion.h3>
            </div>
            <div className="flex items-center w-full gap-5">
              <motion.div
                initial={{ x: -40, opacity: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <p className="text-lg glassmorphism border border-zinc-700 px-6 py-1 ">
                  <strong className="dark:text-white font-bold">+3 Years</strong>{" "}
                  React
                </p>
              </motion.div>
              <p className="text-xl ">|</p>
              <motion.div
                initial={{ x: 40, opacity: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <p className="text-lg glassmorphism border border-zinc-700 px-6 py-1">
                  <strong className="dark:text-white font-bold">Freelance</strong>{" "}
                  Mern Stack
                </p>
              </motion.div>
            </div>
            <div className=" flex gap-x-10">
              <Button title="View Projects" icon={<MoveRight />} primary />
              <Button title="Contact Me" />
              {/* <div className="glassmorphism border border-zinc-700 px-6 py-1 rounded-md">Contact me</div> */}
            </div>
            <motion.div className="flex gap-10 ">
              <Button
                title={""}
                iconFirst={<Github size={"18px"} />}
                normal
                onClick={() => {
                  window.open(`${githubLink}`);
                }}
              />
              <Button
                title=""
                iconFirst={<Mail size={"18px"} />}
                normal
                onClick={() => (window.location.href = `mailTo:${email}`)}
              />
            </motion.div>
          </div>

          <div className="flex justify-center items-center ">
            <img src={unknown} alt="" className="h-full md:h-2/3" />
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
