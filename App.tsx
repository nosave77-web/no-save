
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          } else {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-black selection:bg-green-500 selection:text-black">
      {/* Navegação Simplificada e Fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-green-600/20 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              CONEXÃO ESTÁVEL
            </span>
            <span className="text-zinc-700">|</span>
            <span>VERSÃO_BR_2025</span>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Seção: O MÉTODO */}
        <section id="metodo" className="py-24 md:py-40 px-4 bg-black relative overflow-hidden reveal">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] md:text-[50rem] font-black text-green-900/5 pointer-events-none font-gta italic">$</div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-center relative z-10">
            <div className="flex-1">
              <div className="inline-block mb-6 px-4 py-1 bg-green-600/10 border border-green-600/30 text-green-500 font-mono text-xs font-bold uppercase tracking-widest italic">COMO FUNCIONA (SIMPLIFICADO)</div>
              <h2 className="text-5xl md:text-8xl font-gta font-black mb-8 uppercase leading-tight italic tracking-tighter">
                MILIONÁRIO EM <br /><span className="text-green-500">MINUTOS.</span>
              </h2>
              <p className="text-zinc-300 font-mono text-base md:text-xl mb-12 border-r-8 border-green-600 pr-8 text-right italic leading-relaxed bg-zinc-900/40 p-6 md:p-10 shadow-2xl">
                Você vende um imóvel, o dinheiro cai na conta e o imóvel permanece no inventário. Depois, é só repetir o processo em loop — especialmente com o alvo principal <span className="text-green-400 font-bold uppercase">ECLIPSE TOWERS</span> — para escalar ganhos de forma absurda.
              </p>
            </div>

            <div className="flex-1 w-full lg:w-auto reveal">
               <div className="relative">
                  <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full"></div>
                  <div className="relative border-4 md:border-8 border-zinc-900 shadow-[0_0_80px_rgba(34,197,94,0.15)] skew-y-2 hover:skew-y-0 transition-all duration-700 group overflow-hidden rounded-sm">
                     <img 
                       src="https://www.dexerto.com/cdn-image/wp-content/uploads/2020/04/gta-online-log-in-glitch-removes-all-owned-properties.jpg?width=1200&quality=60&format=auto" 
                       className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                       alt="Luxury Property" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-green-600 text-black font-black text-[10px] px-3 py-1 inline-block mb-2 italic uppercase">ALVO: ECLIPSE TOWERS</div>
                        <p className="text-white font-gta font-bold text-lg md:text-xl uppercase italic drop-shadow-lg">LUCRO ESTIMADO: $50.000.000/HR</p>
                     </div>
                  </div>
               </div>

               {/* Informações abaixo da imagem */}
               <div className="mt-6 space-y-4 bg-black/40 border border-green-900/40 p-5 md:p-6 text-left">
                 <div>
                   <p className="text-green-500 font-gta font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{'>>'} FUNCIONA DIRETO PELO JOGO</p>
                   <p className="text-zinc-400 text-xs md:text-sm font-mono leading-relaxed">
                     Nenhum mod menu necessário. A execução é feita dentro do próprio GTA Online.
                   </p>
                 </div>
                 <div>
                   <p className="text-green-500 font-gta font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{'>>'} SEM LIMITE DIÁRIO</p>
                   <p className="text-zinc-400 text-xs md:text-sm font-mono leading-relaxed">
                     Venda repetida do mesmo imóvel sem travas ou cooldowns do servidor.
                   </p>
                 </div>
                 <div>
                   <p className="text-green-500 font-gta font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{'>>'} ESTABILIDADE &amp; DISCRIÇÃO</p>
                   <p className="text-zinc-400 text-xs md:text-sm font-mono leading-relaxed">
                     Método testado em 2024 e 2025, com execução discreta e risco reduzido quando seguido corretamente.
                   </p>
                 </div>
                 <div>
                   <p className="text-green-500 font-gta font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{'>>'} LUCRO ESTIMADO</p>
                   <p className="text-zinc-400 text-xs md:text-sm font-mono leading-relaxed">
                     Até $50.000.000 por hora, dependendo do imóvel utilizado — foco em ECLIPSE TOWERS.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Depoimentos */}
        <section id="reviews" className="py-24 md:py-32 px-4 bg-black border-t border-green-900/30 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1 bg-green-600/10 border border-green-600/40 text-green-400 font-mono text-xs font-bold uppercase tracking-[0.3em] italic mb-4">DEPOIMENTOS</div>
              <h2 className="text-3xl md:text-5xl font-gta font-black uppercase italic tracking-widest text-white">RESULTADOS <span className="text-green-500">REAIS</span></h2>
              <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] mt-4">Pessoas que já testaram o método e obtiveram resultados:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { nome: "Gustavo R.", texto: "Não tenho tempo para ficar farmando dinheiro, com o no-save eu consigo ganhar muito dinheiro e aproveitar mais o jogo." },
                { nome: "Camila S.", texto: "Sem mod menu, só seguindo o passo a passo. Vendi e o imóvel continuou no inventário. Funciona perfeitamente." },
                { nome: "Lucas V.", texto: "Testei em 2024, voltei em 2025 e ainda está estável. Execução facil e sem ban até agora." },
              ].map((dep, i) => (
                <div key={i} className="bg-zinc-900/40 p-8 border border-zinc-800 hover:border-green-600 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-600/20 border border-green-600/40 flex items-center justify-center font-gta text-sm text-green-400">{dep.nome[0]}</div>
                    <div>
                      <p className="font-gta text-white text-lg leading-tight">{dep.nome}</p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green-500">{dep.tag}</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{dep.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Seção DÚVIDAS */}
        <section id="faq" className="py-24 md:py-32 px-4 bg-[#050505] border-t border-zinc-900 reveal">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-gta font-black mb-16 text-center uppercase tracking-widest italic text-white">
               BASE_DE_<span className="text-green-500">DADOS</span>
             </h2>
             <div className="grid md:grid-cols-2 gap-6 md:gap-8 font-mono">
                {[
                  { q: "POSSO SER BANIDO?", a: "Nenhum ban registrado com este método específico quando executado corretamente. A execução é discreta e o risco é reduzido." },
                  { q: "A ENTREGA É IMEDIATA?", a: "Sim. Acesso liberado automaticamente após o pagamento, com todo o material na área de membros." },
                  { q: "FUNCIONA COMEÇANDO DO ZERO?", a: "Sim. O guia ensina como comprar a primeira propriedade mesmo com pouco dinheiro dentro do jogo." },
                  { q: "TEM GARANTIA?", a: "Sim. Garantia de 14 dias mediante comprovação, para você testar o método com segurança." }
                ].map((item, i) => (
                  <div key={i} className="bg-black p-8 md:p-10 border border-zinc-800 hover:border-green-600 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:-translate-y-1">
                    <h4 className="font-bold text-green-500 text-sm mb-6 flex items-center gap-3">
                       <span className="w-4 h-0.5 bg-green-500"></span> {item.q}
                    </h4>
                    <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest italic">{item.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-4 border-t border-green-900/20 text-center bg-black font-mono relative">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="flex justify-center mb-10">
            <span className="font-gta font-black tracking-[0.2em] uppercase text-green-600 text-3xl italic">NO-SAVE</span>
          </div>
          <p className="text-zinc-700 text-[10px] max-w-3xl mx-auto mb-12 leading-relaxed uppercase italic tracking-[0.1em]">
            AVISO: ESTE MATERIAL É PARA FINS EDUCACIONAIS E DE ENTRETENIMENTO. NÃO TEMOS AFILIAÇÃO COM A ROCKSTAR GAMES. O USO DE EXPLOITS É DE TOTAL RESPONSABILIDADE DO USUÁRIO. MÉTODO TESTADO E APROVADO PELA COMUNIDADE ELITE.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-zinc-500 text-[10px] uppercase font-black tracking-[0.2em]">
             <span className="flex items-center gap-3"><span className="w-2 h-2 bg-green-900 rounded-full animate-pulse"></span> SERVIDOR: BR-SÃO-PAULO</span>
             <span>CRIPTOGRAFIA: AES-256</span>
             <span className="text-green-800">BUILD: 4.1.2_FIX</span>
          </div>
          <p className="mt-12 text-zinc-900 text-[10px] font-black uppercase tracking-[0.5em] italic">© 2025 BYPASS ELITE BR. SEM DIREITOS RESERVADOS. HACK THE GAME.</p>
        </div>
      </footer>

      {/* Botão flutuante para voltar ao topo */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 bg-black/90 border-2 border-green-500 rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_35px_rgba(34,197,94,0.7)] cursor-pointer transition-all duration-300 hover:bg-black hover:border-green-400 hover:shadow-[0_0_45px_rgba(74,222,128,0.9)]"
        aria-label="Voltar ao topo"
      >
        <span className="text-green-400 text-2xl leading-none drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]">↑</span>
      </a>
    </div>
  );
};

export default App;
