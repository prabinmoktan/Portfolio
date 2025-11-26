import { Github, Mail, Send } from "lucide-react";
import Button from "../../ui/Button";

const Contact = () => {
  return (
    <>
      <section id="contact" className="w-full flex flex-col justify-center items-center mb-10">
      <section className="md:w-2/3">

      
        <article className="text-center ">
          <h3 className="text-4xl font-bold">Let's Build Something Together</h3>
          <p className="text-gray-400 mt-4">
            I'm currently available for freelance work and full-time
            opportunities. Let's connect!
          </p>
        </article>
        <div className="flex flex-col gap-y-8 items-center bg-zinc-800 hover:bg-zinc-800 hover:outline hover:outline-gray-800 border border-gray-700 rounded-2xl px-10 text-center py-3">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-400 relative">
            <span className="absolute -left-8 h-4 w-4 bg-green-600 top-1 rounded-full  animate-pulse"></span>
            Current Availbe for work and Oppurtunities.
          </p>
          <Button
            title="Send Email"
            iconFirst={<Mail size={"14px"} />}
            icon={<Send size={"14px"} />}
            primary
          />
          <Button title="" iconFirst={<Github size={"16px"} />} />

          <p>Contact Details</p>
          <a
            href="mailto:prabinmoktan07@gmail.com"
            className="text-blue-700 hover:underline text-sm"
          >
            Prabinmoktan07@gmail.com
          </a>
        </div>
      </section>
      </section>
    </>
  );
};

export default Contact;
