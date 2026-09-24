import { ArrowUpRight } from "lucide-react";
import PinCover, { seedOf } from "./PinCover";
import type { Build } from "../../data/builds";

export default function BuildCard({ build }: { build: Build }) {
  const body = (
    <>
      {build.image ? (
        <div className="relative overflow-hidden rounded-[1.4rem] bg-sec/5">
          <img
            src={build.image}
            alt={build.name}
            loading="lazy"
            className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-main/85 backdrop-blur px-3 py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] text-sec">
            {build.discipline}
          </span>
        </div>
      ) : (
        <PinCover seed={seedOf(build.name)} title={build.name} badge={build.discipline} />
      )}
      <div className="px-2 sm:px-3.5 pt-3 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-xl font-black tracking-tight leading-tight mb-1">{build.name}</h3>
          {build.link && (
            <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-sec/40 group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          )}
        </div>
        <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-thr sm:mb-3">
          {build.role}
          {build.year && <span className="text-sec/35"> · {build.year}</span>}
        </p>
        <p className="hidden sm:block text-sm text-sec/65 leading-relaxed">{build.summary}</p>
        {build.tools && build.tools.length > 0 && (
          <div className="hidden sm:flex flex-wrap gap-1.5 mt-4">
            {build.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-sec/5 px-2.5 py-1 text-[11px] font-bold text-sec/60">
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const className =
    "group block rounded-[1.4rem] sm:rounded-[1.75rem] bg-white p-1.5 sm:p-2.5 pb-4 sm:pb-6 shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300";

  return build.link ? (
    <a href={build.link} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  );
}
