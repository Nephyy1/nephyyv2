import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div>
      <h2 className="text-5xl font-press-start mb-8 text-center text-retro-primary">Get In Touch</h2>
      <p className="text-xl text-center max-w-2xl mx-auto mb-12">
        Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as I can!
      </p>
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-lg font-vt323 text-retro-accent">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-3 bg-gray-800 border-2 border-retro-secondary focus:border-retro-primary outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-vt323 text-retro-accent">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-3 bg-gray-800 border-2 border-retro-secondary focus:border-retro-primary outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="text-lg font-vt323 text-retro-accent">Message</label>
            <textarea id="message" rows="5" className="w-full mt-2 p-3 bg-gray-800 border-2 border-retro-secondary focus:border-retro-primary outline-none"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-retro-primary text-white font-bold py-3 px-8 text-xl shadow-retro transition-all duration-300 hover:bg-retro-accent hover:shadow-retro-hover transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
