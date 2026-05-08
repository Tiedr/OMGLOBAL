import { useParams, Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import { ArrowLeft, Plane, Globe2, CreditCard } from "lucide-react";

export default function Service() {
  const { id } = useParams();

  const services = {
    "flight-booking": { title: "Flight Booking", icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000", desc: "Priority booking, private charters, and exclusive premium class access." },
    "visa-facilitation": { title: "Visa Facilitation", icon: Globe2, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000", desc: "Expedited processing utilizing direct consular channels globally." },
    "wealth-exchange": { title: "Wealth & Exchange", icon: CreditCard, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a223690?auto=format&fit=crop&q=80&w=2000", desc: "Institutional-grade currency exchange and borderless asset operations." }
  };

  const data = services[id as keyof typeof services] || services["flight-booking"];
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <GlobalHeader isTransparent={false} />
      
      <main className="flex-1">
        <div className="relative h-[40vh] min-h-[350px]">
          <img src={data.img} className="w-full h-full object-cover" alt={data.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back Home
            </Link>
            <div className="flex items-center gap-6 text-white">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight">{data.title}</h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 py-20 lg:py-32">
          <p className="text-2xl text-slate-600 font-light leading-relaxed mb-12">
            {data.desc} At OM Global, we redefine the parameters of international business and leisure by offering white-glove support at every phase of the process.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
               <h3 className="text-xl font-bold mb-4">Precision & Discretion</h3>
               <p className="text-slate-500 font-light">Our dedicated liaisons handle documentation and operations entirely in-house, ensuring complete security of your corporate and personal data.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
               <h3 className="text-xl font-bold mb-4">24/7 Global Access</h3>
               <p className="text-slate-500 font-light">Our operational hubs across major time zones mean your requests are processed continuously, reducing standard wait times dramatically.</p>
            </div>
          </div>

          <div className="text-center bg-slate-900 text-white rounded-[3rem] p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 blur-[100px] rounded-full"></div>
             <h2 className="text-4xl font-light mb-6 relative z-10">Request {data.title} Services</h2>
             <p className="text-slate-400 font-light max-w-lg mx-auto mb-8 relative z-10">Connect directly with a specialist dedicated to your region for immediate processing and bespoke arrangements.</p>
             <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-500 transition-colors relative z-10">
               Contact Specialist
             </button>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
