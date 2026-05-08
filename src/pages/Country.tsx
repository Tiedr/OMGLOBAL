import { useParams, Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import { ArrowLeft } from "lucide-react";

export default function Country() {
  const { id } = useParams();
  
  // Basic mock data mapped by ID
  const countries = {
    za: { name: "South Africa", role: "Global Headquarters", flag: "https://flagcdn.com/w160/za.png", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=2000" },
    jp: { name: "Japan", role: "Business Priority Corridor", flag: "https://flagcdn.com/w160/jp.png", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=2000" },
    ae: { name: "UAE", role: "Middle East Hub", flag: "https://flagcdn.com/w160/ae.png", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000" },
    sg: { name: "Singapore", role: "Financial Operations", flag: "https://flagcdn.com/w160/sg.png", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000" },
    ng: { name: "Nigeria", role: "West Africa Hub", flag: "https://flagcdn.com/w160/ng.png", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&q=80&w=2000" },
    ke: { name: "Kenya", role: "East Africa Hub", flag: "https://flagcdn.com/w160/ke.png", img: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=2000" },
  };

  const data = countries[id as keyof typeof countries] || countries.za;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <GlobalHeader isTransparent={false} />
      
      <main className="flex-1">
        <div className="relative h-[50vh] min-h-[400px]">
          <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-black/20"></div>
          
          <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-end pb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Regions
            </Link>
            <div className="flex items-center gap-6">
              <img src={data.flag} alt={`${data.name} flag`} className="w-24 h-24 rounded-full border-4 border-white/20 shadow-2xl object-cover" />
              <div className="text-white">
                <div className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{data.role}</div>
                <h1 className="text-5xl md:text-7xl font-light tracking-tight">{data.name}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-light mb-6">Operations & Presence</h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
              Working within {data.name}, OM Global establishes direct diplomatic and corporate operations to facilitate unparalleled speed in visa processing and secure logistics. The region functions as a vital pillar in our worldwide network.
            </p>
            <h3 className="text-xl font-medium mb-4">Dedicated Services in {data.name}</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                 <span className="w-2 h-2 rounded-full bg-blue-600"></span> Expedited Visa Facilitation within 48-72 hours.
              </li>
              <li className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                 <span className="w-2 h-2 rounded-full bg-blue-600"></span> First-class and chartered aviation connections.
              </li>
              <li className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                 <span className="w-2 h-2 rounded-full bg-blue-600"></span> Wealth exchange at corporate rates.
              </li>
            </ul>
          </div>
          
          <div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm top-8 sticky">
               <h3 className="text-lg font-bold mb-2">Connect with OM {data.name}</h3>
               <p className="text-slate-500 text-sm font-light mb-6">Contact our regional directors for specialized assistance and expedited requests.</p>
               <button className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                 Initiate Request
               </button>
            </div>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
