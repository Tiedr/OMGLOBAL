import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Flower, Scissors, HeartPulse } from "lucide-react";
import GlobalHeader from "../components/GlobalHeader";

export default function Lifestyle() {
  const services = [
    { title: "Barbing & Grooming", icon: Scissors, desc: "Bespoke haircuts and executive grooming in the comfort of your home." },
    { title: "Tattoo Artistry", icon: HeartPulse, desc: "World-class tattoo artists brought directly to you for private sessions." },
    { title: "Spa & Massage", icon: Flower, desc: "Transform your living space into a sanctuary of relaxation and recovery." },
    { title: "Mani & Pedi", icon: Sparkles, desc: "Premium hand and foot care routines using exclusive, top-tier products." }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-sans flex flex-col">
      <GlobalHeader isTransparent={false} />
      <nav className="sticky top-0 w-full z-40 border-b border-[#1A1A1A]/10 bg-[#F5F2ED]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-[#1A1A1A]">OM<span className="opacity-50">LIFESTYLE</span></Link>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-widest text-xs">
            <button className="border-b border-black pb-1 hover:opacity-70 transition-opacity">Book a Session</button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 px-6 max-w-7xl mx-auto flex-1">
        <section className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.2em] mb-6 opacity-60">Exclusive Home Services</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] font-light">
            Luxury, <br /> delivered to your door.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg opacity-70">
            Premium barbing, intricate tattoos, restorative spa treatments, and aesthetic care. An exclusive suite of services curated for your wellbeing and convenience.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {services.map((svc, i) => (
            <motion.div 
              key={svc.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="bg-[#F5F2ED] p-12 flex flex-col items-center text-center group hover:bg-white transition-colors"
            >
              <svc.icon className="w-10 h-10 mb-6 opacity-80" strokeWidth={1} />
              <h3 className="text-2xl font-serif mb-4">{svc.title}</h3>
              <p className="opacity-60 text-sm max-w-sm">{svc.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
           <div className="aspect-[3/4] rounded-t-full overflow-hidden">
             <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Spa" />
           </div>
           <div className="px-6 md:px-12">
             <h2 className="text-4xl font-serif mb-6">The Ultimate Privacy</h2>
             <p className="opacity-70 text-lg mb-8">
               Our vetted professionals provide white-glove service in the sanctity of your own home, hotel, or private estate. We bring the salon, the studio, and the spa directly to you.
             </p>
             <button className="px-8 py-4 bg-[#1A1A1A] text-[#F5F2ED] uppercase tracking-[0.1em] text-xs hover:bg-black transition-colors">
               View Full Menu
             </button>
           </div>
        </section>
      </main>

      {/* Lifestyle Footer */}
      <footer className="bg-[#EAE4DA] border-t border-[#1A1A1A]/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#1A1A1A]/60">
          <div><span className="font-bold text-[#1A1A1A]">OM</span> LIFESTYLE</div>
          <div>© {new Date().getFullYear()} OM Lifestyle. A division of OM Global.</div>
        </div>
      </footer>
    </div>
  );
}
