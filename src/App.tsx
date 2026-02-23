/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Multimedia from "./components/Multimedia";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  return (
    <div className="min-h-screen bg-wood-50 font-sans text-wood-900 selection:bg-grass-200 selection:text-grass-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-wood-900/90 backdrop-blur-md border-b border-wood-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-grass-400 tracking-wide">
            BERNASHOW
          </div>
          <div className="flex gap-6 text-sm font-medium text-wood-100">
            <a
              href="#lineup"
              className="hover:text-grass-400 transition-colors"
            >
              Line-up
            </a>
            <a
              href="#experiencia"
              className="hover:text-grass-400 transition-colors"
            >
              Experiência
            </a>
            <a
              href="#inscricao"
              className="bg-grass-600 hover:bg-grass-500 text-white px-4 py-2 rounded-full transition-colors"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <div id="lineup">
          <Schedule />
        </div>
        <div id="experiencia">
          <Multimedia />
        </div>
        <RegistrationForm />
      </main>

      <footer className="bg-wood-950 text-wood-400 py-12 text-center">
        <div className="font-serif text-2xl text-wood-100 mb-4">
          BernaShow
        </div>
        <p>© 2026 BernaShow. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
