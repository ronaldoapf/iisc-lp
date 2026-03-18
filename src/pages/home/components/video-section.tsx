import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

const YOUTUBE_ID = "poi3KSErtRw"
function ytCommand(iframe: HTMLIFrameElement, func: string, args?: unknown[]) {
  iframe.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func, args: args ?? [] }),
    "*"
  )
}

export function VideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const onLoad = () => {
      ytCommand(iframe, "playVideo")
      ytCommand(iframe, "mute")
    }
    iframe.addEventListener("load", onLoad)
    return () => iframe.removeEventListener("load", onLoad)
  }, [])

  function toggleMute() {
    const iframe = iframeRef.current
    if (!iframe) return
    if (muted) {
      ytCommand(iframe, "unMute")
      ytCommand(iframe, "setVolume", [100])
    } else {
      ytCommand(iframe, "mute")
    }
    setMuted((v) => !v)
  }

  function togglePlay() {
    const iframe = iframeRef.current
    if (!iframe) return
    if (paused) {
      ytCommand(iframe, "playVideo")
    } else {
      ytCommand(iframe, "pauseVideo")
    }
    setPaused((v) => !v)
  }

  const embedSrc = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_ID}&rel=0&showinfo=0&modestbranding=1&playsinline=1&enablejsapi=1`

  return (
    <section className="w-full py-16 lg:py-24 bg-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 rounded-full bg-iisc-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-iisc-gold-dark">
              Conheça a IISC
            </span>
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display text-white leading-none">
            Evangelismo <br />
            <span className="italic text-iisc-gold">nas ruas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-black"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            ref={iframeRef}
            src={embedSrc}
            title="Evangelismo nas Ruas"
            className="absolute inset-0 w-full h-full scale-[1.01]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute inset-0 pointer-events-none" />

          <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/70 to-transparent pointer-events-none">
            <p className="text-white/50 text-xs uppercase tracking-widest font-mono mb-1">
              IISC — Evangelismo nas Ruas
            </p>
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-2">
            <button
              onClick={togglePlay}
              aria-label={paused ? "Reproduzir" : "Pausar"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all cursor-pointer"
            >
              {paused ? <Play className="h-4 w-4 fill-white" /> : <Pause className="h-4 w-4 fill-white" />}
            </button>

            <button
              onClick={toggleMute}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className="flex items-center gap-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm px-4 py-2 transition-all cursor-pointer"
            >
              {muted ? (
                <>
                  <VolumeX className="h-4 w-4" />
                  <span className="text-xs font-medium">Ativar som</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" />
                  <span className="text-xs font-medium">Som ativo</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
