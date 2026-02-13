"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Footer from "@/components/Footer";
import PageLoading from "@/components/PageLoading";
import { MdArrowForward, MdDashboard, MdLogin } from "react-icons/md";

function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <PageLoading message="Preparando plataforma..." />;
  }

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 relative">
        {/* Modern Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#03969d]/5 via-white to-white"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto text-center space-y-3 sm:space-y-6 relative z-10">
          {/* Logo Section - Much smaller and more elegant */}
          <div className="relative inline-block w-full px-4">
            <div className="absolute -inset-8 bg-[#03969d]/5 rounded-full blur-3xl"></div>
            <Image
              src="https://i.postimg.cc/D0hkwB76/somos-Warnes-Logo.png"
              alt="Somos Warnes - Mario Cronenbold"
              width={300}
              height={300}
              className="w-full h-auto max-w-[140px] sm:max-w-[200px] md:max-w-[280px] mx-auto object-contain drop-shadow-xl transition-all duration-700 hover:scale-[1.02]"
              priority
              unoptimized
            />
          </div>

          {/* Value Proposition */}
          <div className="space-y-3 px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#03969d]/10 text-[#03969d] rounded-full">
              <span className="w-1.2 h-1.2 bg-[#03969d] rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest">Somos Warnes - Mario Cronenbold</span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 tracking-tighter leading-tight">
              Gestión Estratégica <br className="hidden sm:block" />
              <span className="text-[#03969d]">SOMOS WARNES NOTICIAS</span>
            </h1>
            
            <p className="text-gray-400 text-xs sm:text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed border-l-2 border-[#03969d]/20 pl-4 py-1 italic bg-gray-50/50 rounded-r-xl">
              &quot;Plataforma integral de inteligencia para el monitoreo y reporte de noticias en tiempo real.&quot;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col items-center gap-4">
            <a
              href={session ? "/dashboard" : "/auth/login"}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#03969d] text-white rounded-2xl font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 shadow-xl shadow-teal-100 hover:opacity-90 hover:scale-105 active:scale-95"
            >
              {session ? (
                <>
                  <MdDashboard size={18} className="text-white shrink-0" />
                  <span>Panel de Control</span>
                </>
              ) : (
                <>
                  <MdLogin size={18} className="text-white shrink-0" />
                  <span>Iniciar Sesión</span>
                </>
              )}
              <MdArrowForward size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
