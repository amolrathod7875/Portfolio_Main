import { Hand } from "lucide-react";
import bottomImg from "@/assets/bottom.jpg";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-24 md:py-32">
      <h2 className="heading-display text-5xl md:text-7xl mb-16 max-w-3xl">
        Let's Work Together
      </h2>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="relative group">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
            <img src={bottomImg} alt="Amol Rathod portrait" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Hand className="h-10 w-10" />
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl bg-secondary px-5 py-4 outline-none transition-all duration-200 hover:bg-secondary/70 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="johnsmith@gmail.com"
              className="rounded-xl bg-secondary px-5 py-4 outline-none transition-all duration-200 hover:bg-secondary/70 hover:-translate-y-0.5 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-primary font-medium block mb-2">Service Needed ?</label>
            <select className="w-full rounded-xl bg-secondary px-5 py-4 outline-none transition-all duration-200 hover:bg-secondary/70 focus:ring-2 focus:ring-primary cursor-pointer">
              <option>Select...</option>
              <option>Data Analyst</option>
              <option>Machine Learning Engineer</option>
              <option>Cloud Engineer</option>
              <option>MLOps Engineer</option>
            </select>
          </div>
          <div>
            <label className="text-primary font-medium block mb-2">What Can I Help You...</label>
            <textarea
              rows={5}
              placeholder="Hello, I'd like to enquire about..."
              className="w-full rounded-xl bg-secondary px-5 py-4 outline-none transition-all duration-200 hover:bg-secondary/70 focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full border-2 border-primary text-primary font-bold uppercase px-10 py-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
