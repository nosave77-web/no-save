
import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-green-500 selection:text-black">
      {/* Navegação Simplificada e Fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-green-600/20 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="px-4 py-1 bg-green-600 text-black font-gta font-black text-xl italic btn-skew shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <span>NO-SAVE</span>
            </div>
            <div className="hidden lg:flex gap-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
               <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> CONEXÃO ESTÁVEL</span>
               <span className="text-zinc-700">|</span>
               <span>VERSÃO_BR_2025</span>
            </div>
          </div>
          <div className="flex gap-6 md:gap-10 items-center font-mono text-[11px] uppercase tracking-[0.2em] font-black text-zinc-400">
            <a
              href="https://pay.cakto.com.br/6huah2f_691481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-6 font-black italic btn-skew hover:bg-green-500 transition-all shadow-lg text-xs"
            >
              <span>COMPRAR_AGORA</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Seção: O MÉTODO */}
        <section id="metodo" className="py-24 md:py-40 px-4 bg-black relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] md:text-[50rem] font-black text-green-900/5 pointer-events-none font-gta italic">$</div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 items-center relative z-10">
            <div className="flex-1">
              <div className="inline-block mb-6 px-4 py-1 bg-green-600/10 border border-green-600/30 text-green-500 font-mono text-xs font-bold uppercase tracking-widest italic">TECNOLOGIA DE INJEÇÃO</div>
              <h2 className="text-5xl md:text-8xl font-gta font-black mb-8 uppercase leading-tight italic tracking-tighter">
                MILIONÁRIO EM <br /><span className="text-green-500">MINUTOS.</span>
              </h2>
              <p className="text-zinc-300 font-mono text-base md:text-xl mb-12 border-r-8 border-green-600 pr-8 text-right italic leading-relaxed bg-zinc-900/40 p-6 md:p-10 shadow-2xl">
                O exploit imobiliário funciona manipulando a resposta do servidor da Rockstar no momento da venda. O script força uma confirmação de recebimento sem remover o imóvel do seu inventário. É o glitch mais estável e lucrativo da história do GTA Online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 {[
                   { t: "SEM LIMITE DIÁRIO", d: "Diferente dos carros, as propriedades podem ser vendidas sem travas de tempo." },
                   { t: "GANHOS EXPONENCIAIS", d: "Cada loop gera de 1M a 30M dependendo do imóvel utilizado." },
                   { t: "BYPASS ANTICHEAT", d: "Nossa tecnologia oculta os logs de transação direto na nuvem." },
                   { t: "SIMPLES E RÁPIDO", d: "Não precisa de computador ou mod menu. Funciona direto pelo jogo." }
                 ].map((feat, i) => (
                   <div key={i} className="bg-zinc-900/30 p-6 border-b-2 border-green-900 group hover:border-green-500 transition-all">
                      <h4 className="text-green-500 font-gta font-bold text-sm mb-2 group-hover:text-white transition-colors">{'>>'} {feat.t}</h4>
                      <p className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-tighter leading-relaxed">{feat.d}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex-1 w-full lg:w-auto">
               <div className="relative">
                  <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full"></div>
                  <div className="relative border-4 md:border-8 border-zinc-900 shadow-[0_0_80px_rgba(34,197,94,0.15)] skew-y-2 hover:skew-y-0 transition-all duration-700 group overflow-hidden rounded-sm">
                     <img 
                       src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
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
            </div>
          </div>
        </section>

        <Pricing />

        {/* Seção: O QUE VOCÊ RECEBE */}
        <section id="o-que-recebe" className="py-24 md:py-32 px-4 bg-[#050505] border-t border-zinc-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-green-600/10 border border-green-600/30 text-green-500 font-mono text-xs font-bold uppercase tracking-widest italic mb-4">
                ÁREA DE MEMBROS
              </div>
              <h2 className="text-4xl md:text-6xl font-gta font-black mb-4 uppercase italic text-white">
                O QUE <span className="text-green-500">VOCÊ RECEBE</span>
              </h2>
              <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase italic">
                Acesso completo após a compra
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: "💎",
                  title: "O GLITCH",
                  description: "Acesso completo ao método de venda infinita de imóveis. Script e instruções detalhadas para executar o exploit."
                },
                {
                  icon: "🎥",
                  title: "VIDEOAULA",
                  description: "Tutorial em vídeo passo a passo mostrando exatamente como fazer o glitch funcionar. Sem enrolação, direto ao ponto."
                },
                {
                  icon: "💬",
                  title: "COMUNIDADE DISCORD",
                  description: "Acesso exclusivo à comunidade no Discord com suporte, atualizações e ajuda de outros membros experientes."
                },
                {
                  icon: "🔐",
                  title: "ÁREA DE MEMBROS",
                  description: "Acesso vitalício à área de membros onde você encontra todos os materiais, atualizações e novos métodos."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/30 p-8 border-2 border-zinc-800 hover:border-green-500 transition-all duration-500 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute -inset-20 bg-green-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-green-500 font-gta font-black text-lg mb-4 uppercase tracking-tighter italic">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm font-mono leading-relaxed uppercase tracking-tighter">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block bg-black/60 p-6 border border-green-600/30 rounded-sm">
                <p className="text-green-500 font-mono text-xs md:text-sm uppercase tracking-widest italic">
                  <span className="text-white font-black">{'>>'}</span> TODOS OS MATERIAIS SÃO ENVIADOS INSTANTANEAMENTE APÓS A CONFIRMAÇÃO DO PAGAMENTO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-24 md:py-32 px-4 bg-black border-t border-zinc-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-gta font-black mb-16 text-center uppercase tracking-widest italic text-white">
              DEPOI<span className="text-green-500">MENTOS</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 font-mono">
              {[
                { name: "VITOR • PC", text: "Cheguei com pouco dinheiro e em poucas horas já tava repetindo as vendas sem travar. Bem direto ao ponto." },
                { name: "NICK • PC", text: "O passo a passo é simples e rápido. O que mais curti foi a comunidade no Discord ajudando com dúvidas na hora." },
                { name: "LUCAS • PC", text: "Funcionou certinho no PC. Layout e instruções bem claras, sem enrolação." }
              ].map((t, i) => (
                <div key={i} className="bg-zinc-900/30 p-8 border border-zinc-800 hover:border-green-600 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                  <div className="absolute -inset-20 bg-green-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-green-500 font-black tracking-widest text-xs uppercase">{t.name}</span>
                      <span className="text-yellow-500 text-xs">★★★★★</span>
                    </div>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed italic">
                      “{t.text}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Seção DÚVIDAS */}
        <section id="faq" className="py-24 md:py-32 px-4 bg-[#050505] border-t border-zinc-900">
          <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-gta font-black mb-16 text-center uppercase tracking-widest italic text-white">
               BASE_DE_<span className="text-green-500">DADOS</span>
             </h2>
             <div className="grid md:grid-cols-2 gap-6 md:gap-8 font-mono">
                {[
                  { q: "COMO COMEÇAR DO ZERO?", a: "O método explica como comprar sua primeira propriedade 'âncora' mesmo se você tiver zero reais na conta hoje." },
                  { q: "RISCO DE SER BANIDO?", a: "Nenhum usuário foi banido usando este método específico de rede em 2024 e 2025. É indetectável." },
                  { q: "GARANTIA / REEMBOLSO EM CASO DE BAN?", a: "Sim. Se sua conta for banida em até 14 dias, mande um print do banimento no suporte do Discord para solicitar reembolso." },
                  { q: "A ENTREGA É IMEDIATA?", a: "Sim. Assim que o pagamento de R$ 25 for confirmado, você recebe o acesso ao guia e vídeos instantaneamente." }
                ].map((item, i) => (
                  <div key={i} className="bg-black p-8 md:p-10 border border-zinc-800 hover:border-green-600 transition-all duration-500 shadow-2xl relative overflow-hidden group">
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
    </div>
  );
};

export default App;
