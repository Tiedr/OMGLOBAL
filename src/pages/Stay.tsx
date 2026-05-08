import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Building2, Key, Star, Calendar } from "lucide-react";
import GlobalHeader from "../components/GlobalHeader";

export default function Stay() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans flex flex-col">
      <GlobalHeader isTransparent={false} />
      <nav className="sticky top-0 w-full z-40 border-b border-stone-200 bg-stone-100/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-indigo-900">OM<span className="text-stone-500">STAY</span></Link>
          <div className="flex gap-6 text-sm font-medium">
            <button className="bg-indigo-900 text-stone-50 px-5 py-2 rounded-full hover:bg-indigo-800 transition-colors">Find a Stay</button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 flex-1">
        <section className="px-6 max-w-7xl mx-auto mb-16 md:flex gap-12 items-end justify-between">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
              Exceptional <br/><i className="text-indigo-900">spaces</i> to stay.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-stone-600">
              Curated apartment rentals and premium hotel booking. Whether it's a quick trip, business travel, or an extended stay.
            </motion.p>
          </div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:flex gap-4">
            <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-stone-200 min-w-[120px]">
              <div className="text-3xl font-bold text-indigo-900">5k+</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">Properties</div>
            </div>
          </motion.div>
        </section>

        {/* Featured Img */}
        <section className="px-6 max-w-7xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="w-full h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury apartment interior" />
            <div className="absolute inset-x-8 bottom-8 md:bottom-8 md:left-8 md:w-[400px] bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-2">The Penthouse Collection</h3>
              <p className="text-stone-600 text-sm mb-4">Discover our top-tier selection of panoramic penthouses in Tokyo and Dubai.</p>
              <button className="text-indigo-900 font-semibold text-sm underline underline-offset-4">Explore Collection</button>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-200">
            <Building2 className="w-8 h-8 text-indigo-900 mb-6" />
            <h3 className="text-xl font-bold mb-2">Apartment Rentals</h3>
            <p className="text-stone-600 text-sm">Fully furnished, premium apartments for extended stays and maximum comfort.</p>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-200">
            <Key className="w-8 h-8 text-indigo-900 mb-6" />
            <h3 className="text-xl font-bold mb-2">Hotel Booking</h3>
            <p className="text-stone-600 text-sm">Exclusive rates at top-tier global hotel chains for your quick getaways.</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-200">
            <Star className="w-8 h-8 text-indigo-900 mb-6" />
            <h3 className="text-xl font-bold mb-2">Concierge Perks</h3>
            <p className="text-stone-600 text-sm">Enjoy early check-ins, late check-outs, and room upgrades exclusively with OMStay.</p>
          </div>
        </section>

      </main>

      <footer className="bg-stone-200 border-t border-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-stone-500">
          <div><span className="font-bold text-indigo-900">OM</span>STAY</div>
          <div>© {new Date().getFullYear()} OMStay. A division of OM Global.</div>
        </div>
      </footer>
    </div>
  );
}
