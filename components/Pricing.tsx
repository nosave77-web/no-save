
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-black border-t-4 border-green-600 reveal">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-black text-xs tracking-widest uppercase mb-4 btn-skew">
             <span>🔥 -75% OFF • OFERTA LIMITADA</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-gta font-black mb-4 uppercase italic">
            ACESSO <span className="text-green-500">TOTAL</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase italic">Exploit de VENDA INFINITA DE IMÓVEIS com lucro estimado de até $50.000.000 por hora.</p>
        </div>

        <div className="relative group overflow-hidden rounded-xl">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-green-500 opacity-20 blur-3xl group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-zinc-900 border-4 border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-[0_0_100px_rgba(0,0,0,1)] transition-transform duration-500 group-hover:-translate-y-1">
            <div className="flex-1">
              <h3 className="text-4xl font-gta font-black mb-6 uppercase italic text-white flex items-center gap-4 tracking-tighter">
                <span className="text-green-500">#</span> No-Save
              </h3>
              
              <ul className="space-y-4 mb-10 font-mono text-xs md:text-sm uppercase tracking-tighter text-zinc-300">
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500 transition-all duration-300 hover:bg-black/70 hover:translate-x-1">
                  <span className="text-green-500 font-bold">{'>>'}</span> GLITCH DE VENDA INFINITA DE IMÓVEIS (VITALÍCIO)
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500 transition-all duration-300 hover:bg-black/70 hover:translate-x-1">
                  <span className="text-green-500 font-bold">{'>>'}</span> TUTORIAL EM VÍDEO PASSO A PASSO
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500 transition-all duration-300 hover:bg-black/70 hover:translate-x-1">
                  <span className="text-green-500 font-bold">{'>>'}</span> ATUALIZAÇÕES DO MÉTODO
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500 transition-all duration-300 hover:bg-black/70 hover:translate-x-1">
                  <span className="text-green-500 font-bold">{'>>'}</span> COMUNIDADE EXCLUSIVA NO DISCORD
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500 transition-all duration-300 hover:bg-black/70 hover:translate-x-1">
                  <span className="text-green-500 font-bold">{'>>'}</span> ÁREA DE MEMBROS COM ACESSO PERMANENTE
                </li>
              </ul>
              
              <p className="text-[10px] text-zinc-600 font-mono italic">
                * Compatível com PC, GTA Enhanced e Legacy. Necessário apenas 1 propriedade inicial para começar o exploit.
              </p>
            </div>

            <div className="w-full md:w-[320px] bg-black p-12 border-2 border-green-500/50 rounded-sm text-center flex flex-col items-center shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-4 py-1 italic text-xs rotate-12 shadow-xl">
                 -75% OFF
              </div>
              <span className="text-zinc-500 text-sm font-mono line-through mb-2 uppercase">DE R$197</span>
              <div className="text-7xl font-black italic mb-2 text-white leading-none">R$ 25<span className="text-3xl text-green-500 font-normal">,00</span></div>
              <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 bg-green-500/10 px-4 py-1">PAGAMENTO ÚNICO • ACESSO IMEDIATO</span>
              
              <a
                href="https://pay.cakto.com.br/6huah2f_691481"
                target="_blank"
                rel="noreferrer"
                className="group relative bg-white text-black font-black py-6 px-16 btn-skew transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] text-2xl uppercase italic overflow-hidden"
              >
                <span className="relative z-10">BAIXAR EXPLOIT</span>
                <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
              </a>
              
              <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Pix_logo.svg" className="h-6" alt="Pix" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
