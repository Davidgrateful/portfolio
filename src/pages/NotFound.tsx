import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn, RevealLine } from "../components/Animations";

export default function NotFound() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-5xl mx-auto">
        <RevealLine>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">
            Page Not Found
          </h1>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-sec/65 leading-relaxed mb-10">
            This corner of David's digital world doesn't exist (yet). Head back home and keep exploring.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-thr text-white px-8 py-4 text-xs font-black uppercase tracking-[0.18em]">
            Back Home <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </main>
  );
}
