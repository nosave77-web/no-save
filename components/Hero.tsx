
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden border-b-4 border-green-600 pt-28 pb-24 reveal">
      {/* Background Video-like feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 float-slow" 
        style={{ backgroundImage: "url('https://www.gamerpoint.com.br/wp-content/uploads/2020/12/GTA-Online-natal.jpg')" }}
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
          NO <span className="text-green-500 glitch-text">SAVE</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-gta font-bold text-yellow-500 mb-10 tracking-widest bg-black px-6 py-2 border-2 border-yellow-500/50 inline-block skew-x-[-10deg]">
          VENDA INFINITA DE IMÓVEIS
        </h2>
        
        <p className="text-lg md:text-2xl text-zinc-100 mb-12 font-mono max-w-3xl mx-auto bg-black/80 p-6 border-l-8 border-green-500 italic shadow-2xl">
          Exploit avançado que manipula a confirmação de venda no servidor, permitindo receber o dinheiro sem perder o imóvel no<span className="text-green-400 font-bold uppercase"> "GTA V ONLINE"</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pb-10">
          <a 
            href="https://pay.cakto.com.br/6huah2f_691481" 
            target="_blank"
            rel="noreferrer"
            className="group relative bg-white text-black font-black py-6 px-16 btn-skew transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,197,94,0.9)] hover:-translate-y-1 text-2xl uppercase italic overflow-hidden"
          >
            <span className="relative z-10">BAIXAR EXPLOIT</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
          
          <div className="flex items-center gap-4 text-green-500 font-mono text-sm tracking-[0.2em] bg-black/90 px-6 py-3 border border-zinc-800 shadow-xl float-slow">
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
              {'>>'} IMÓVEL VENDIDO: ECLIPSE TOWERS (REPETIÇÃO #4) ... TRANSACTION_BYPASS: OK ... CONTA SEGURA ...
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
