import { Key, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence, MotionValue } from "motion/react";
import { Lightbulb, MessageSquare, Layers, Clapperboard, Users, Heart } from "lucide-react";
import { FadeIn } from "../Animations";
import DavidCharacter from "../DavidCharacter";
import { attentionStages } from "../../data/chapterOne";

const ICONS = [Lightbulb, MessageSquare, Layers, Clapperboard, Users, Heart];
const VIDEO_TAGS = ["Talking-head", "Faceless", "Educational", "Campaign recaps"];

function StageNode({
  index,
  count,
  progress,
  Icon,
  label,
  caption,
  isVideo,
  videoOpen,
  onToggleVideo,
}: {
  key?: Key;
  index: number;
  count: number;
  progress: MotionValue<number>;
  Icon: typeof Lightbulb;
  label: string;
  caption: string;
  isVideo: boolean;
  videoOpen: boolean;
  onToggleVideo: () => void;
}) {
  const threshold = index / (count - 1);
  const active = useTransform(progress, [Math.max(0, threshold - 0.16), threshold], [0, 1]);
  const scale = useTransform(active, [0, 1], [0.8, 1]);
  const opacity = useTransform(active, [0, 1], [0.22, 1]);

  return (
    <div className="flex flex-col items-center text-center w-[15%] min-w-0">
      <motion.button
        type="button"
        onClick={isVideo ? onToggleVideo : undefined}
        style={{ scale, opacity }}
        whileHover={isVideo ? { scale: 1.08 } : undefined}
        whileTap={isVideo ? { scale: 0.94 } : undefined}
        className={`w-12 h-12 xl:w-14 xl:h-14 rounded-2xl bg-white border border-sec/10 shadow-sm flex items-center justify-center text-sec ${
          isVideo ? "cursor-pointer" : "cursor-default"
        }`}
        aria-label={isVideo ? "Show video formats" : undefined}
      >
        <Icon className="w-5 h-5" />
      </motion.button>
      <motion.p style={{ opacity }} className="mt-4 text-[11px] font-black uppercase tracking-[0.18em]">
        {label}
      </motion.p>
      <motion.p style={{ opacity }} className="mt-1.5 text-[12.5px] text-muted leading-snug px-1">
        {caption}
      </motion.p>

      {isVideo && (
        <AnimatePresence>
          {videoOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 flex flex-wrap justify-center gap-1.5 overflow-hidden"
            >
              {VIDEO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold uppercase tracking-wide bg-blue-50 text-thr px-2 py-1 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function AttentionMachine() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const markerLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={trackRef} className="py-10">
      {/* Desktop: scroll-driven horizontal machine */}
      <div className="hidden lg:block">
        <div className="relative h-16 mb-4 mx-[7%]">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-sec/10 -translate-y-1/2" />
          <motion.div
            className="absolute left-0 top-1/2 h-[2px] bg-red -translate-y-1/2 origin-left w-full"
            style={{ scaleX: prefersReducedMotion ? 1 : fillScale }}
          />
          {!prefersReducedMotion && (
            <motion.div className="absolute top-1/2" style={{ left: markerLeft, y: "-92%" }}>
              <DavidCharacter className="w-12 h-12 -translate-x-1/2 block" float={false} />
            </motion.div>
          )}
        </div>
        <div className="flex justify-between gap-2">
          {attentionStages.map((stage, i) => (
            <StageNode
              key={stage.key}
              index={i}
              count={attentionStages.length}
              progress={scrollYProgress}
              Icon={ICONS[i]}
              label={stage.label}
              caption={stage.caption}
              isVideo={stage.key === "video"}
              videoOpen={videoOpen}
              onToggleVideo={() => setVideoOpen((v) => !v)}
            />
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical journey */}
      <div className="lg:hidden flex flex-col">
        {attentionStages.map((stage, i) => {
          const Icon = ICONS[i];
          const isVideo = stage.key === "video";
          return (
            <div key={stage.key}>
              <FadeIn delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex items-start gap-4 py-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-sec/10 shadow-sm flex items-center justify-center text-sec">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="pt-1.5">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em]">{stage.label}</p>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed max-w-sm">{stage.caption}</p>
                    {isVideo && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {VIDEO_TAGS.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-wide bg-blue-50 text-thr px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
              {i < attentionStages.length - 1 && (
                <div className="pl-[22px] text-muted/40 leading-none select-none">↓</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
