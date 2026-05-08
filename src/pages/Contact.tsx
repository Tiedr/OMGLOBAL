import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <GlobalHeader isTransparent={false} />
      
      <main className="flex-1 pt-24 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-8 border border-slate-200">
              Corporate Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-slate-900">Speak <br/>with us.</h1>
            <p className="text-xl text-slate-500 font-light mb-12 max-w-md">Our global operations center is strictly monitored 24/7 to facilitate immediate requests for our VIP clients.</p>
            
            <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-2xl text-blue-600 shrink-0"><MapPin /></div>
                 <div>
                    <h3 className="text-lg font-bold">Global Headquarters</h3>
                    <p className="text-slate-500 font-light mt-1">Johannesburg, South Africa<br/>Secure location provided upon verified consultation.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-2xl text-blue-600 shrink-0"><Mail /></div>
                 <div>
                    <h3 className="text-lg font-bold">Direct Line</h3>
                    <p className="text-slate-500 font-light mt-1">vip@omglobal.inc<br/>responses within 30 minutes.</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-16 rounded-[2rem] border border-slate-100">
             <h3 className="text-2xl font-light mb-8">Initiate Request</h3>
             <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-xl h-14 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-xl h-14 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Reference</label>
                   <input type="email" className="w-full bg-white border border-slate-200 rounded-xl h-14 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Division</label>
                   <select className="w-full bg-white border border-slate-200 rounded-xl h-14 px-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800">
                      <option>OM Global (Visa & Flights)</option>
                      <option>OM Express (Logistics)</option>
                      <option>OMStay (Accommodations)</option>
                      <option>OM Lifestyle (Premium Services)</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message / Request</label>
                   <textarea className="w-full bg-white border border-slate-200 rounded-xl h-32 p-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-800 resize-none"></textarea>
                </div>
                <button type="button" className="w-full h-14 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  Submit Securely <ArrowRight className="w-4 h-4" />
                </button>
             </form>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
