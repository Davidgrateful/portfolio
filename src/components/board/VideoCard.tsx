import { Play } from "lucide-react";
import { type Video, videoPoster, videoUrl } from "../../data/videos";

const aspect = { portrait: "aspect-[9/16]", landscape: "aspect-video", square: "aspect-square" };

function duration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function shortDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

export default function VideoCard({ video, compact = false }: { video: Video; compact?: boolean }) {
  return (
    <a
      href={videoUrl(video)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[1.4rem] sm:rounded-[1.75rem] bg-white text-sec p-1.5 sm:p-2.5 pb-4 sm:pb-5 shadow-[0_1px_2px_rgba(22,22,26,0.04)] hover:shadow-[0_18px_40px_-18px_rgba(22,22,26,0.3)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
    >
      <div className={`relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.4rem] bg-sec ${aspect[video.orientation]}`}>
        <img
          src={videoPoster(video)}
          alt={video.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        {!compact && (
          <span
            className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 max-w-[calc(100%-1.25rem)] truncate whitespace-nowrap rounded-full bg-main/85 backdrop-blur px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.16em] ${
              video.orientation === "portrait" ? "" : "hidden sm:block"
            }`}
          >
            {video.topic}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 text-white px-2.5 py-1 text-[10px] sm:text-xs font-bold tabular-nums">
          {duration(video.seconds)}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-main/90 text-sec flex items-center justify-center shadow-lg scale-90 opacity-90 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-red group-hover:text-white transition-all duration-300">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" fill="currentColor" />
          </span>
        </span>
      </div>
      <div className="px-2 sm:px-3 pt-3 sm:pt-4">
        <h3 className="text-sm sm:text-base font-black tracking-tight leading-snug line-clamp-3">{video.title}</h3>
        <p className="mt-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-sec/40">
          {shortDate(video.date)}<span className="hidden sm:inline"> · on X</span>
        </p>
      </div>
    </a>
  );
}
