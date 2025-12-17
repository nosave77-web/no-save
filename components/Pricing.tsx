
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-black border-t-4 border-green-600">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-black text-xs tracking-widest uppercase mb-4 btn-skew">
             <span>OFERTA LIMITADA - ÚLTIMAS VAGAS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-gta font-black mb-4 uppercase italic">
            ACESSO <span className="text-green-500">TOTAL</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase italic">Comece a vender propriedades e ficar rico hoje mesmo.</p>
        </div>

        <div className="relative group overflow-hidden rounded-xl">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-green-500 opacity-20 blur-3xl group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-zinc-900 border-4 border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-[0_0_100px_rgba(0,0,0,1)]">
            <div className="flex-1">
              <h3 className="text-4xl font-gta font-black mb-6 uppercase italic text-white flex items-center gap-4 tracking-tighter">
                <span className="text-green-500">#</span> MASTER IMOBILIÁRIO
              </h3>
              
              <ul className="space-y-4 mb-10 font-mono text-xs md:text-sm uppercase tracking-tighter text-zinc-300">
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500">
                  <span className="text-green-500 font-bold">{'>>'}</span> GLITCH DE VENDA DE APARTAMENTOS (VITALÍCIO)
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500">
                  <span className="text-green-500 font-bold">{'>>'}</span> BYPASS DE CONFIRMAÇÃO DE TRANSAÇÃO R$ 0,00
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500">
                  <span className="text-green-500 font-bold">{'>>'}</span> MODO DINHEIRO CONGELADO PARA COMPRAS
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500">
                  <span className="text-green-500 font-bold">{'>>'}</span> TUTORIAL EM VÍDEO PASSO A PASSO
                </li>
                <li className="flex items-center gap-4 bg-black/40 p-3 border-l-4 border-green-500">
                  <span className="text-green-500 font-bold">{'>>'}</span> COMUNIDADE NO DISCORD
                </li>
              </ul>
              
              <p className="text-[10px] text-zinc-600 font-mono italic">
                * Compatível com PC. Necessita apenas de uma propriedade inicial simples no jogo.
              </p>
            </div>

            <div className="w-full md:w-[320px] bg-black p-12 border-2 border-green-500/50 rounded-sm text-center flex flex-col items-center shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-4 py-1 italic text-xs rotate-12 shadow-xl">
                 -75% OFF
              </div>
              <span className="text-zinc-500 text-sm font-mono line-through mb-2 uppercase">De: R$ 197,00</span>
              <div className="text-7xl font-black italic mb-2 text-white leading-none">R$ 25<span className="text-3xl text-green-500 font-normal">,00</span></div>
              <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10 bg-green-500/10 px-4 py-1">PAGAMENTO ÚNICO</span>
              
              <a
                href="https://pay.cakto.com.br/6huah2f_691481"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 bg-green-600 hover:bg-white hover:text-black text-black font-black btn-skew transition-all duration-300 uppercase tracking-[0.2em] italic text-xl shadow-[0_15px_30px_rgba(34,197,94,0.4)] text-center"
              >
                <span>COMPRAR AGORA</span>
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
