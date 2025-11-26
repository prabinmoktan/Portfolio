import { experiences } from "../../constant"
import Badge from "../../ui/Badge"

const Experience = () => {
  return (
    <>
    <section id="experience">
        <article className="text-center gap-y-10">
            <h3 className="text-4xl font-bold"> Professional Experience</h3>
            <p className="text-gray-400 mt-4">My journey in web development and frontend engineering</p>
        </article>
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 ">
            {experiences.map((exp, index) => {
                return (
                    <div
                        key={exp.company}
                        className="relative pl-8 md:pl-20 animate-fade-in-up "
                        style={{ animationDelay: `${index * 0.2}s` }}
                        data-testid={`experience-${index}`}
                    >
                        <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-blue-600 " />

                        <div className="space-y-4">
                            <div className="space-y-2 ">
                                <h3 className="text-2xl font-semibold ">{exp.company}</h3>
                                <div className="flex flex-wrap items-center gap-3">
                                    <p className="text-lg text-foreground text-gray-400">{exp.role}</p>
                                    <span className="text-muted-foreground ">•</span>
                                    <p className="text-sm font-mono text-muted-foreground text-gray-400   ">{exp.duration}</p>
                                </div>
                            </div>

                            <ul className="space-y-2 text-muted-foreground">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="text-primary mt-1.5 text-blue-600">▹</span>
                                        <span className="leading-relaxed">{resp}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {exp.tech.map((tech, idx) => (
                                    <Badge key={idx} primary title={tech} />

                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      
    </section>
    
    </>
  )
}

export default Experience