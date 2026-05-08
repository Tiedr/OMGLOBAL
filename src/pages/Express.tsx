import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Car, Package, ShieldCheck, MapPin } from "lucide-react";
import GlobalHeader from "../components/GlobalHeader";

export default function Express() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-blue-500/30 flex flex-col font-sans">
      <GlobalHeader isTransparent={false} />
      
      <nav className="sticky top-0 w-full z-40 border-b border-white/5 bg-[#0f1115]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-white">OM<span className="text-slate-500">EXPRESS</span></Link>
          <div className="flex gap-6 text-sm font-medium">
            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-slate-200 transition-colors">Request Service</button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 flex-1">
        {/* Hero Section */}
        <section className="px-6 max-w-7xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-1.5 border border-slate-700 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-slate-300">
            Logistics & Concierge
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            MOVEMENT,<br /> <span className="text-slate-500">REDEFINED.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Premium concierge car services and secure goods and property movement. Discretion and speed guaranteed.
          </motion.p>
        </section>

        {/* Bento Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-8 bg-[#181a1f] rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/5">
              <div className="relative z-10 w-full md:w-2/3">
                <Car className="w-8 h-8 text-white mb-6" />
                <h3 className="text-3xl font-bold mb-4">Concierge Car Services.</h3>
                <p className="text-slate-400 mb-8">Arrive in style. Our fleet of premium vehicles and professional chauffeurs ensure your journey is comfortable, secure, and punctual across our global destinations.</p>
                <button className="h-12 px-6 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors">Book a Ride</button>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/3 min-w-[300px] border-l border-white/5 bg-[#1f2228] hidden md:block">
                <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop" className="opacity-50 w-full h-full object-cover grayscale mix-blend-overlay" alt="Car fleet" />
              </div>
            </div>

            <div className="md:col-span-4 bg-[#181a1f] rounded-[2rem] p-8 relative border border-white/5 flex flex-col justify-between min-h-[360px]">
              <Package className="w-8 h-8 text-white mb-6" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Goods Movement.</h3>
                <p className="text-slate-400 text-sm">Secure transport for your valuable property and goods. Complete tracking from origin to destination.</p>
              </div>
            </div>

            <div className="md:col-span-6 bg-gradient-to-br from-blue-900 to-[#181a1f] rounded-[2rem] p-8 relative border border-white/5 overflow-hidden">
               <ShieldCheck className="w-8 h-8 text-blue-400 mb-6" />
               <h3 className="text-2xl font-bold mb-3">Fortified Security</h3>
               <p className="text-blue-100/70 text-sm">Every trip, every package is insured and monitored by our 24/7 global operations center.</p>
            </div>

            <div className="md:col-span-6 bg-[#181a1f] rounded-[2rem] p-8 border border-white/5 flex items-center justify-between">
               <div>
                  <MapPin className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-bold">Global Network</h3>
               </div>
               <div className="text-right text-slate-400 text-sm leading-loose">
                  South Africa <br/>
                  Nigeria <br/>
                  Singapore <br/>
                  UAE
               </div>
            </div>

          </div>
        </section>
      </main>

      {/* Express Footer */}
      <footer className="bg-[#0f1115] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div><span className="font-bold text-white">OM</span>EXPRESS</div>
          <div>© {new Date().getFullYear()} OM Express Logistics. A division of OM Global.</div>
        </div>
      </footer>
    </div>
  );
}
