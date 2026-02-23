import React, { useState } from "react";
import { motion } from "motion/react";
import { Ticket, Send, CheckCircle2 } from "lucide-react";

export default function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      className="py-24 px-4 bg-wood-50 relative overflow-hidden"
      id="inscricao"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-grass-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wood-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wood-900 mb-4">
            Garanta seu Ingresso
          </h2>
          <p className="text-wood-600 text-lg">
            Preencha o formulário abaixo para realizar sua inscrição no evento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-wood-900/5 border border-wood-100"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-grass-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-grass-600" />
              </div>
              <h3 className="font-serif text-3xl text-wood-900 mb-2">
                Inscrição Confirmada!
              </h3>
              <p className="text-wood-600 text-lg">
                Em breve você receberá um e-mail com os detalhes do seu
                ingresso.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-wood-800"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 bg-wood-50/50 focus:bg-white focus:ring-2 focus:ring-grass-500 focus:border-transparent outline-none transition-all text-wood-900"
                      placeholder="João da Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-wood-800"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 bg-wood-50/50 focus:bg-white focus:ring-2 focus:ring-grass-500 focus:border-transparent outline-none transition-all text-wood-900"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-wood-800"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-wood-200 bg-wood-50/50 focus:bg-white focus:ring-2 focus:ring-grass-500 focus:border-transparent outline-none transition-all text-wood-900"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-wood-800 flex items-center gap-2">
                  <Ticket className="w-4 h-4" /> Tipo de Ingresso
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Pista", "VIP", "Camarote"].map((type) => (
                    <label
                      key={type}
                      className="relative flex cursor-pointer rounded-xl border border-wood-200 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-grass-500 hover:bg-wood-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="ticketType"
                        value={type.toLowerCase()}
                        className="peer sr-only"
                        required
                        defaultChecked={type === "Pista"}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium text-wood-900">
                          {type}
                        </span>
                        <span className="text-sm text-wood-500">
                          {type === "Pista"
                            ? "Acesso à área principal"
                            : type === "VIP"
                              ? "Área exclusiva + Bar"
                              : "Visão privilegiada + Open Bar"}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-grass-500 pointer-events-none" />
                      <div className="absolute top-4 right-4 w-4 h-4 rounded-full border border-wood-300 peer-checked:border-grass-500 peer-checked:bg-grass-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="w-5 h-5 rounded border border-wood-300 bg-white peer-checked:bg-grass-600 peer-checked:border-grass-600 transition-colors" />
                    <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <span className="text-wood-700 group-hover:text-wood-900 transition-colors">
                    Desejo receber atualizações e novidades por e-mail
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-wood-900 hover:bg-grass-700 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-wood-900/20 hover:shadow-grass-700/30"
              >
                <span>Confirmar Inscrição</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
