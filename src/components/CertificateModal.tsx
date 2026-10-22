import React from 'react';
import { Award, Download, CheckCircle2, X, Star, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  contestantName?: string;
  domain: string;
  prizeWon: string;
  clearedCount: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  contestantName = "CONTESTANT",
  domain,
  prizeWon,
  clearedCount,
  onClose,
}) => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const getRankTitle = () => {
    if (prizeWon === '₹7,00,00,000') return 'SUPREME CROREPATI GRANDMASTER';
    if (clearedCount >= 10) return 'ELITE TRIVIA SCHOLAR';
    if (clearedCount >= 5) return 'CERTIFIED TRIVIA WARRIOR';
    return 'HOTSEAT VALIANT CONTESTANT';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-[#101b44] via-[#080d24] to-[#040817] p-8 text-center text-slate-100 shadow-[0_0_50px_rgba(245,158,11,0.35)] relative overflow-hidden">
        {/* Decorative corner borders */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Golden Emblem */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.5)] mb-3">
          <Award className="h-9 w-9 stroke-[2.2]" />
        </div>

        {/* Certificate Title */}
        <p className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
          Official Hall of Fame Recognition
        </p>
        <h2 className="text-2xl sm:text-3xl font-cinzel font-black tracking-wider text-amber-200 mt-1">
          CERTIFICATE OF EXCELLENCE
        </h2>
        <p className="text-xs text-slate-400 font-serif italic mt-0.5">
          Awarded on the legendary stage of KBC WITH ANSH ANAND
        </p>

        {/* Body Text */}
        <div className="my-6 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
          <p className="text-xs text-slate-300">This certifies that</p>
          <p className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300 tracking-wide my-1">
            {contestantName}
          </p>
          <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
            has demonstrated exceptional knowledge and strategic mastery in{' '}
            <strong className="text-amber-400">{domain === 'All' ? 'All 4 Core Domains' : domain}</strong>,
            clearing {clearedCount} levels to bank the verified prize of:
          </p>

          <div className="mt-3 inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400 shadow-inner">
            <span className="text-2xl sm:text-3xl font-mono-nums font-black text-amber-200">
              {prizeWon}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Title: {getRankTitle()}</span>
          </div>
        </div>

        {/* Date & Signatures */}
        <div className="flex items-end justify-between px-6 pt-2 border-t border-amber-900/50 text-left">
          <div>
            <span className="text-[10px] text-slate-500 uppercase block font-mono">Date of Victory</span>
            <span className="text-xs font-mono font-bold text-amber-200">{currentDate}</span>
          </div>

          <div className="text-right">
            <p className="font-serif italic font-bold text-lg text-amber-200 transform -rotate-2">
              Ansh Anand
            </p>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block border-t border-amber-500/40 pt-0.5">
              ANSH ANAND · HOST
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-8 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 hover:from-amber-400 hover:to-amber-300 shadow-lg active:scale-95 transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Accept Certificate & Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
