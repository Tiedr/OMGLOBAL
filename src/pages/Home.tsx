import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Plane, Globe2, CreditCard, ArrowRight, Play, Building2, Car, Star, ChevronDown, CheckCircle2, ArrowUpRight, MapPin, ShieldCheck, FileText, Clock } from "lucide-react";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function Home() {
  const globalNetwork = [
    { id: "jp", name: "Japan", flag: "https://flagcdn.com/w80/jp.png", type: "Business Priority", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-1 lg:row-span-1" },
    { id: "ae", name: "UAE", flag: "https://flagcdn.com/w80/ae.png", type: "Expedited Visas", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-1 lg:row-span-1" },
    { id: "sg", name: "Singapore", flag: "https://flagcdn.com/w80/sg.png", type: "Financial Hub", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-2 lg:row-span-1" },
    { id: "ng", name: "Nigeria", flag: "https://flagcdn.com/w80/ng.png", type: "West Africa Hub", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-1 lg:row-span-1" },
    { id: "ke", name: "Kenya", flag: "https://flagcdn.com/w80/ke.png", type: "East Africa Hub", img: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-1 lg:row-span-1" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      <GlobalHeader isTransparent={true} />

      <main>
        {/* Cinematic Grid Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-5 z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-8 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                International Travel & Visa Facilitation
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-[5rem] lg:text-[5.5rem] font-light tracking-tighter mb-8 leading-[0.95]">
                Seamless <br/>
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Borders.</span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
                We organize and execute complex global movement out of our South African headquarters. Exclusive visa processing, prestige flight orchestration, and global market access.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 items-center">
                <button className="h-14 px-8 bg-blue-600 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3">
                  Initiate Booking <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* CSS Grid Hero Imagery */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-4 h-[500px] md:h-[650px]">
               {/* Main image spanning two rows */}
               <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group">
                 <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Business Terminal" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                       <Play className="w-4 h-4 ml-1" />
                    </div>
                    <p className="text-white text-sm font-bold tracking-widest uppercase">The OM Experience</p>
                 </div>
               </div>

               {/* Secondary images */}
               <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group">
                 <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Aviation" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Aviation</div>
               </div>
               
               <div className="col-span-1 row-span-1 border border-slate-200 rounded-3xl bg-slate-50 p-8 flex flex-col justify-center relative overflow-hidden">
                 <Globe2 className="absolute -right-8 -bottom-8 w-48 h-48 text-slate-200 opacity-50" strokeWidth={1} />
                 <div className="relative z-10">
                    <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Operations</div>
                    <div className="text-4xl font-light text-slate-900 mb-2">99.8%</div>
                    <div className="text-sm text-slate-500 font-light">Visa Approval Rate for our active operational corridors.</div>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Global Hub - South Africa Focus */}
        <section id="za" className="py-32 bg-slate-900 text-white relative overflow-hidden border-t-8 border-blue-600">
           {/* Background Map Graphic or Image */}
           <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Cape Town" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 w-full h-full"></div>

           <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                    <img src="https://flagcdn.com/w160/za.png" alt="South Africa" className="w-16 h-16 rounded-full object-cover border border-white/20 shadow-2xl" />
                    <div className="h-px flex-1 bg-white/20"></div>
                 </div>
                 <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">Headquartered in <br/><span className="text-blue-400 font-medium">South Africa.</span></h2>
                 <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-lg">
                   The base of OM Global. Connecting the African continent to premium Asian, Middle Eastern, and global markets through unrivaled logistical power and diplomatic relationships.
                 </p>
                 <div className="flex gap-6">
                    <div className="border-l border-blue-500 pl-4">
                       <div className="text-3xl font-light mb-1">Johannesburg</div>
                       <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Corporate HQ</div>
                    </div>
                    <div className="border-l border-slate-700 pl-4">
                       <div className="text-3xl font-light mb-1">Cape Town</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Logistics Hub</div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-blue-400 mb-6" />
                    <h4 className="text-lg font-bold mb-2">Diplomatic Access</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">Direct lines of communication with embassies driving our near-perfect visa success rate.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl align-end flex flex-col justify-end mt-0 md:mt-8">
                    <Plane className="w-8 h-8 text-blue-400 mb-6" />
                    <h4 className="text-lg font-bold mb-2">Aviation Partners</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">Exclusive multi-carrier agreements ensuring prioritized seating and competitive rates.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl col-span-1 md:col-span-2 flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer">
                    <div>
                      <h4 className="text-lg font-bold">Contact ZA Operations</h4>
                      <div className="text-sm text-slate-400">Lines open 24/7 for VIP requests.</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                       <ArrowRight className="w-5 h-5" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Destinations CSS Grid (Bento) */}
        <section id="destinations" className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-slate-100 pb-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Strategic Corridors</h2>
                <p className="text-slate-500 text-lg font-light">We operate dedicated flight routes and visa processing pipelines for the world's highest-growth regions.</p>
              </div>
              <button className="h-12 px-6 border-2 border-slate-900 text-slate-900 font-bold uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-3">
                All Destinations <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
              
              {/* Featured / South Africa taking 2x2 */}
              <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2000&auto=format&fit=crop" alt="South Africa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                   <img src="https://flagcdn.com/w80/za.png" className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-lg" alt="Flag" />
                   <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] uppercase tracking-widest font-bold border border-white/20">Headquarters</div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white flex justify-between items-end">
                   <div>
                     <h3 className="text-4xl font-light mb-1">South Africa</h3>
                     <p className="text-sm font-light opacity-80 border-l-2 border-blue-500 pl-3">Primary Operational Base</p>
                   </div>
                   <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg">
                      <ArrowRight className="w-5 h-5" />
                   </div>
                </div>
              </div>

              {/* Smaller Grid Items mapped from network */}
              {globalNetwork.map((net) => (
                <div key={net.id} className={`${net.span} group relative rounded-3xl overflow-hidden bg-slate-100 cursor-pointer`}>
                   <img src={net.img} alt={net.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                   
                   <div className="absolute top-5 left-5">
                      <img src={net.flag} className="w-8 h-8 rounded-full object-cover border border-white/20 shadow-sm" alt="Flag" />
                   </div>

                   <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                     <p className="text-[9px] uppercase tracking-widest text-blue-300 font-bold mb-1">{net.type}</p>
                     <h3 className="text-2xl font-light tracking-tight">{net.name}</h3>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info/Steps Section */}
        <section className="py-32 bg-slate-50 border-t border-b border-slate-200">
           <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl font-light mb-8">Precision. <br/>At every step.</h2>
                 <p className="text-lg text-slate-500 font-light mb-12">We do not provide standard travel services. OM Global acts as a comprehensive concierge managing visas, premium transit, and border-crossing security.</p>
                 
                 <div className="space-y-8">
                    <div className="flex gap-6 group">
                       <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-blue-500 transition-colors shrink-0">
                          <FileText className="w-6 h-6 text-blue-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">1. Profile & Documentation</h4>
                          <p className="text-slate-500 font-light text-sm">Our agents audit and prepare all required documentation locally before embassy submission.</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-blue-500 transition-colors shrink-0">
                          <Clock className="w-6 h-6 text-blue-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">2. Expedited Processing</h4>
                          <p className="text-slate-500 font-light text-sm">Leveraging our institutional relationships in SA, JP, and AE to fast-track approvals.</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:border-blue-500 transition-colors shrink-0">
                          <Plane className="w-6 h-6 text-blue-600" />
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">3. Flight Integration</h4>
                          <p className="text-slate-500 font-light text-sm">Matching visa timelines seamlessly with first-class and business-class carrier schedules.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-3"></div>
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" className="relative rounded-[2rem] shadow-2xl object-cover h-[700px] w-full" alt="Professional Consulting" />
                 
                 {/* Floating Metric */}
                 <div className="absolute top-12 -left-12 bg-white text-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 lg:flex items-center gap-4 hidden">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    <div>
                       <div className="text-sm font-bold">Embassy Ready</div>
                       <div className="text-xs text-slate-500">100% compliant filings</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* The Ecosystem Landing Links */}
        <section id="ecosystem" className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-4 block">Expanded Operations</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">More from OM Global</h2>
              <p className="text-slate-400 text-lg font-light">
                We handle the borders. Our specialized sister agencies handle the rest. Explore our dedicated lifestyle divisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Express Card */}
              <Link to="/express" className="relative group rounded-[2rem] overflow-hidden h-[450px] flex flex-col justify-end p-8 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1494905998459-365bdceab467?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="OM Express" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-light italic mb-2">OM <span className="font-bold">EXPRESS</span></h3>
                  <p className="text-blue-400 text-[10px] uppercase font-bold tracking-widest mb-4">Logistics & Concierge</p>
                  <p className="text-slate-300 font-light text-sm max-w-xs line-clamp-2">Premium motorcade service, chauffeurs, and secure transit of valuable assets globally.</p>
                </div>
              </Link>

              {/* Stay Card */}
              <Link to="/stay" className="relative group rounded-[2rem] overflow-hidden h-[450px] flex flex-col justify-end p-8 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="OMStay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-serif italic mb-2">OMStay</h3>
                  <p className="text-white text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Residence & Suites</p>
                  <p className="text-slate-300 font-light text-sm max-w-xs line-clamp-2">Curated luxury apartment rentals and elite hotel booking for the global nomad.</p>
                </div>
              </Link>

              {/* Lifestyle Card */}
              <Link to="/lifestyle" className="relative group rounded-[2rem] overflow-hidden h-[450px] flex flex-col justify-end p-8 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1512496015851-a1cbbc384666?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="OM Lifestyle" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-bold tracking-tighter mb-2">OM LIFESTYLE</h3>
                  <p className="text-indigo-400 text-[10px] uppercase font-black tracking-widest mb-4">Premium Grooming & Spa</p>
                  <p className="text-slate-300 font-light text-sm max-w-xs line-clamp-2">Exclusive in-house services including master barbering, artisan tattooing, and spa therapy.</p>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main>
      
      <GlobalFooter />
    </div>
  );
}
