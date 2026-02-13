"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { getSession } from "next-auth/react";
import { AiOutlineLogin } from "react-icons/ai";
import SignOutButton from "./SignOutButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [session, setSession] = useState(null);
  const pathname = usePathname();
  const isLoginPage = pathname === '/auth/login';

  useEffect(() => {
    const loadSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };
    loadSession();
  }, []);

  if (isLoginPage) return null;

  return (
    <nav className="bg-[#03969d] border-b border-white/10 h-20 shadow-xl shadow-teal-900/10">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
            <Image
              src="https://i.postimg.cc/JzYL5NQy/somos-Warnes-Logo-Light.png"
              alt="Somos Warnes Noticias"
              width={100}
              height={30}
              priority 
              className="flex-shrink-0 w-auto h-12 sm:h-16"
            />
          </Link>
        </div>



        {/* Right Side: Auth/User */}
        <div className="flex items-center gap-4">
          {!session?.user ? (
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-all bg-white/10 px-4 py-2 rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-white/20 active:scale-95"
            >
              <AiOutlineLogin size={16} />
              <span className="hidden sm:inline">Entrar</span>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">Usuario</span>
                <span className="text-xs font-bold text-white leading-tight">{session.user.name || "Administrador"}</span>
              </div>

              <SignOutButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
