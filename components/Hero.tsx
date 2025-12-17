
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden border-b-4 border-green-600 pt-28 pb-24">
      {/* Background Video-like feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl w-full">
        <div className="flex justify-center gap-2 mb-8 animate-bounce">
           {[...Array(5)].map((_, i) => (
             <span key={i} className="text-5xl wanted-star drop-shadow-[0_0_15px_rgba(251,191,36,1)]">★</span>
           ))}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-gta font-black mb-2 tracking-tight uppercase italic leading-none drop-shadow-2xl">
          REAL <span className="text-green-500 glitch-text">GLITCH</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-gta font-bold text-yellow-500 mb-10 tracking-widest bg-black px-6 py-2 border-2 border-yellow-500/50 inline-block skew-x-[-10deg]">
          O MÉTODO DE VENDA DE IMÓVEIS INFINITO
        </h2>
        
        <p className="text-lg md:text-2xl text-zinc-100 mb-12 font-mono max-w-3xl mx-auto bg-black/80 p-6 border-l-8 border-green-500 italic shadow-2xl">
          Transforme um apartamento simples em <span className="text-green-400 font-black underline decoration-green-400">GTA$ 50.000.000</span> repetidamente. O exploit de venda de imóveis mais cobiçado de 2025 acaba de ser liberado para o público.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pb-10">
          <a 
            href="https://pay.cakto.com.br/6huah2f_691481"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white text-black font-black py-6 px-16 btn-skew transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] text-2xl uppercase italic overflow-hidden"
          >
            <span className="relative z-10">BAIXAR EXPLOIT R$ 25</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
          
          <div className="flex items-center gap-4 text-green-500 font-mono text-sm tracking-[0.2em] bg-black/90 px-6 py-3 border border-zinc-800 shadow-xl">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             STATUS: INDETECTADO & SEGURO
          </div>
        </div>
      </div>

      {/* Ticker de Vendas Recentes */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-black py-2 overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex whitespace-nowrap animate-marquee font-black text-xs uppercase tracking-tighter italic">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-10">
              {'>>'} IMÓVEL VENDIDO: ECLIPSE TOWERS POR $12.5M (REPETIÇÃO #4) ... TRANSACTION_BYPASS: OK ... CONTA SEGURA ...
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
