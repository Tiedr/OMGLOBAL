import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <GlobalHeader isTransparent={false} />
      
      <main className="flex-1 pt-24 pb-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest uppercase mb-8 border border-blue-200">
            About OM Global
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-10 text-slate-900">Connecting ambition <br/><span className="text-blue-600">to destinations.</span></h1>
          
          <div className="prose prose-lg prose-slate max-w-none font-light">
             <img src="https://images.unsplash.com/photo-1577415124269-b9140d10d9be?auto=format&fit=crop&q=80&w=2000" className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-xl" alt="Corporate board room" />
             
             <p className="text-2xl text-slate-600 leading-relaxed mb-10">
               OM Global is an elite logistical, travel, and lifestyle management firm headquartered in South Africa, executing operations across the world's most dynamic economic theaters.
             </p>
             
             <div className="grid md:grid-cols-2 gap-12 mt-16 text-slate-600 text-base">
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">Our Methodology</h3>
                   <p className="mb-4">We bypass standard channels. By establishing direct liaison pathways with embassies, consulates, and premium aviation carriers, we offer a level of access that traditional travel agencies cannot replicate.</p>
                   <p>Our focus is on absolute friction reduction. A client utilizing OM Global expects their complex cross-border documentation to be handled with military precision and total confidentiality.</p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">More from OM Global</h3>
                   <p className="mb-4">Beyond crossing borders, OM Global extends its operational excellence through our specialized divisions. <strong>OM Express</strong> provides armored transit and premium chauffeur logistics.</p>
                   <p><strong>OMStay</strong> secures unlisted luxury residencies, and <strong>OM Lifestyle</strong> delivers white-glove wellness and aesthetic services directly to your private estate.</p>
                </div>
             </div>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
