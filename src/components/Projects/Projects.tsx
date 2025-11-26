import { projects } from "../../constant";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <article id="projects" className="flex flex-col gap-y-8">
        <article className="text-center ">
          <motion.h3
            className="text-4xl font-bold"
            initial={{ opacity: 0, scaleY: 0, y: 20 }}
            // animate={{opacity:1}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
          >
            Featured Projects
          </motion.h3>
          <motion.p
            className="text-gray-400 mt-4 "
            initial={{ opacity: 0, scaleY: 0, y: 20 }}
            // animate={{opacity:1}}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
          >
            A selection of projects showcasing my skills in modern web
            development
          </motion.p>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects?.map((project, index) => (
            <div key={index} className="">
              <Card
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                onClick={() => window.open(`${project.links?.demo}`)}
                disabled={!project.links}
              />
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Projects;
