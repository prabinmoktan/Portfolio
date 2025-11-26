import { skills, technologies } from "../../constant";
import Badge from "../../ui/Badge";
import SkillCard from "../skillCard/SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="flex flex-col gap-y-8" id="skills">
        <article className="text-center ">
          <motion.h3 className="text-4xl font-bold"
          initial={{opacity:0, scaleY:0, y:20}}
          // animate={{opacity:1}}
          transition={{duration:.5}}
          whileInView={{opacity:1, scaleY:1, y: 0, }}>
            Skills and Technologies
          </motion.h3>
          <motion.p className="text-gray-400 mt-4" initial={{opacity:0, scaleY:0, y:20}}
          // animate={{opacity:1}}
          transition={{duration:.5}}
          whileInView={{opacity:1, scaleY:1, y: 0, }}>
            Proficient in modern web development technologies and frameworks
          </motion.p>
        </article>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-x-12 sm:gap-4">
          {skills?.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.name}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {technologies?.map((tech, index) => (
            <Badge key={index} title={tech.name} primary />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
