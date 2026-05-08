import { Link } from "react-router-dom";
import { Plane, Globe2, CreditCard, ChevronDown, ArrowRight } from "lucide-react";

export default function GlobalHeader({ isTransparent = false }: { isTransparent?: boolean }) {
  const globalNetwork = [
    { id: "jp", name: "Japan", flag: "https://flagcdn.com/w80/jp.png", type: "Business Priority" },
    { id: "ae", name: "UAE", flag: "https://flagcdn.com/w80/ae.png", type: "Expedited Visas" },
    { id: "sg", name: "Singapore", flag: "https://flagcdn.com/w80/sg.png", type: "Financial Hub" },
    { id: "ng", name: "Nigeria", flag: "https://flagcdn.com/w80/ng.png", type: "West Africa Hub" },
    { id: "ke", name: "Kenya", flag: "https://flagcdn.com/w80/ke.png", type: "East Africa Hub" }
  ];

  return (
    <nav className={`w-full z-[60] border-b transition-all duration-300 ${isTransparent ? 'fixed top-0 bg-white/95 backdrop-blur-xl border-slate-100' : 'relative bg-white border-slate-100 flex-shrink-0'}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/20">OM</div>
          <span className="text-2xl font-light tracking-[0.15em] uppercase text-slate-900">Global</span>
        </Link>

        <div className="hidden lg:flex items-center h-full text-[11px] uppercase tracking-widest text-slate-500 font-bold">
          <Link to="/" className="h-full flex items-center px-4 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="h-full flex items-center px-4 hover:text-blue-600 transition-colors">About Us</Link>

          {/* Services Mega Menu */}
          <div className="group h-full flex items-center px-4 cursor-pointer border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 transition-colors">
            <span className="flex items-center gap-1">Services <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" /></span>
            <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-left">
               <div className="max-w-[1400px] mx-auto p-10 grid grid-cols-3 gap-10">
                  <Link to="/service/flight-booking" className="flex gap-4 group/item">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors"><Plane /></div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Flight Booking</h4>
                      <p className="text-slate-500 font-light normal-case tracking-normal">Priority booking, private charters, and exclusive premium class access.</p>
                    </div>
                  </Link>
                  <Link to="/service/visa-facilitation" className="flex gap-4 group/item">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors"><Globe2 /></div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Visa Facilitation</h4>
                      <p className="text-slate-500 font-light normal-case tracking-normal">Expedited processing utilizing direct consular channels globally.</p>
                    </div>
                  </Link>
                  <Link to="/service/wealth-exchange" className="flex gap-4 group/item">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors"><CreditCard /></div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Wealth & Exchange</h4>
                      <p className="text-slate-500 font-light normal-case tracking-normal">Institutional-grade currency exchange and borderless asset operations.</p>
                    </div>
                  </Link>
               </div>
            </div>
          </div>

          {/* Destinations */}
          <div className="group relative h-full flex items-center px-4 cursor-pointer border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 transition-colors">
            <span className="flex items-center gap-1">Destinations <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" /></span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white border border-slate-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-2xl overflow-hidden flex text-left">
               <div className="w-1/3 bg-slate-50 p-8 border-r border-slate-100">
                  <h4 className="text-[10px] uppercase text-slate-400 mb-6 font-bold tracking-widest">Global HQ</h4>
                  <Link to="/country/za" className="group/sa flex flex-col items-start gap-4">
                     <img src="https://flagcdn.com/w160/za.png" alt="South Africa" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" />
                     <div>
                       <div className="text-sm font-bold text-slate-900 group-hover/sa:text-blue-600 transition-colors">South Africa</div>
                       <div className="text-xs text-slate-500 tracking-normal normal-case mt-1 font-light">The center of our global operations infrastructure.</div>
                     </div>
                  </Link>
               </div>
               <div className="w-2/3 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2 text-[10px] uppercase text-slate-400 font-bold tracking-widest border-b border-slate-100 pb-2">Active Regions</div>
                  {globalNetwork.map(net => (
                     <Link to={`/country/${net.id}`} key={net.id} className="flex items-center gap-3 hover:bg-slate-50 p-2 -ml-2 rounded-lg cursor-pointer transition-colors">
                       <img src={net.flag} alt={net.name} className="w-6 h-6 rounded-full object-cover shadow-sm border border-slate-200" />
                       <div>
                          <div className="text-xs font-bold text-slate-900">{net.name}</div>
                          <div className="text-[9px] text-slate-400 uppercase tracking-widest">{net.type}</div>
                       </div>
                     </Link>
                  ))}
               </div>
            </div>
          </div>

          <Link to="/contact" className="h-full flex items-center px-4 hover:text-blue-600 transition-colors">Contact</Link>
          
          {/* More from OM */}
          <div className="group relative h-full flex items-center px-4 cursor-pointer text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors">
             <span className="flex items-center gap-1">More from OM Global <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" /></span>
             <div className="absolute top-full right-0 w-[280px] bg-white border border-slate-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-xl overflow-hidden flex flex-col text-left">
                <Link to="/express" className="p-5 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between group/link">
                   <div>
                     <div className="font-bold text-slate-900 group-hover/link:text-blue-600 transition-colors">OM Express</div>
                     <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Logistics & Concierge</div>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 group-hover/link:text-blue-600 transition-colors" />
                </Link>
                <Link to="/stay" className="p-5 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between group/link">
                   <div>
                     <div className="font-bold text-slate-900 group-hover/link:text-blue-600 transition-colors">OMStay</div>
                     <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Residences & Suites</div>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 group-hover/link:text-blue-600 transition-colors" />
                </Link>
                <Link to="/lifestyle" className="p-5 hover:bg-slate-50 flex items-center justify-between group/link">
                   <div>
                     <div className="font-bold text-slate-900 group-hover/link:text-blue-600 transition-colors">OM Lifestyle</div>
                     <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Premium Grooming & Spa</div>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 group-hover/link:text-blue-600 transition-colors" />
                </Link>
             </div>
          </div>
        </div>

        <Link to="/contact" className="hidden md:flex bg-slate-900 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg">
          Client Portal <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </nav>
  );
}
