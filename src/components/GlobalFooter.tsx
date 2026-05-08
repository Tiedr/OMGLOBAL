import { Link } from "react-router-dom";

export default function GlobalFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-white border-t border-slate-200 pt-20 pb-10 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            <div className="col-span-2 md:col-span-1">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-bold text-white text-xs">OM</div>
                  <span className="text-lg font-light tracking-[0.1em] uppercase text-slate-900">Global</span>
               </div>
               <p className="text-slate-500 text-sm font-light">
                 Facilitating the seamless movement of people and prestige worldwide.
               </p>
            </div>
            
            <div>
               <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Core Services</h4>
               <ul className="space-y-4 text-sm text-slate-500 font-light">
                  <li><Link to="/service/visa-facilitation" className="hover:text-blue-600 transition-colors">Visa Processing</Link></li>
                  <li><Link to="/service/flight-booking" className="hover:text-blue-600 transition-colors">Flight Booking</Link></li>
                  <li><Link to="/service/wealth-exchange" className="hover:text-blue-600 transition-colors">Currency Exchange</Link></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">Hubs</h4>
               <ul className="space-y-4 text-sm text-slate-500 font-light">
                  <li className="flex items-center gap-2"><img src="https://flagcdn.com/w20/za.png" className="w-4" alt="ZA"/> <Link to="/country/za" className="hover:text-blue-600 transition-colors">South Africa</Link></li>
                  <li className="flex items-center gap-2"><img src="https://flagcdn.com/w20/jp.png" className="w-4" alt="JP"/> <Link to="/country/jp" className="hover:text-blue-600 transition-colors">Japan</Link></li>
                  <li className="flex items-center gap-2"><img src="https://flagcdn.com/w20/ae.png" className="w-4" alt="AE"/> <Link to="/country/ae" className="hover:text-blue-600 transition-colors">UAE (Dubai)</Link></li>
                  <li className="flex items-center gap-2"><img src="https://flagcdn.com/w20/sg.png" className="w-4" alt="SG"/> <Link to="/country/sg" className="hover:text-blue-600 transition-colors">Singapore</Link></li>
               </ul>
            </div>

            <div>
               <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 mb-6">More from OM</h4>
               <ul className="space-y-4 text-sm text-slate-500 font-light">
                  <li><Link to="/express" className="hover:text-blue-600 transition-colors">OM Express</Link></li>
                  <li><Link to="/stay" className="hover:text-blue-600 transition-colors">OMStay</Link></li>
                  <li><Link to="/lifestyle" className="hover:text-blue-600 transition-colors">OM Lifestyle</Link></li>
               </ul>
            </div>
         </div>

         <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] uppercase tracking-widest text-slate-400">
              © {new Date().getFullYear()} OM GLOBAL HOLDINGS LTD.
            </div>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
               <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            </div>
         </div>
      </div>
    </footer>
  );
}
