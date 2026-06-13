"use client"

import { useVideo } from "@/hooks/use-video"
import { Loader2, Play } from "lucide-react"
import { useState } from "react"

interface ResponsiveVideoProps {
  src: string
  poster?: string
  className?: string
}

export function ResponsiveVideo({ src, poster, className = "" }: ResponsiveVideoProps) {
  const { videoRef, isLoading, error } = useVideo()
  const [showFallback, setShowFallback] = useState(false)

  return (
    <div className={`relative w-full rounded-sm overflow-hidden ${className}`}>
      <div className="aspect-video relative">
        {isLoading && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/20 z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 text-gold animate-spin" />
              <p className="text-white text-sm">Loading video...</p>
              <button onClick={() => setShowFallback(true)} className="text-gold text-xs underline">
                Having trouble? Click here
              </button>
            </div>
          </div>
        )}
        {(error || showFallback) && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/90 z-10 p-4">
            <div className="bg-background/95 backdrop-blur-sm p-6 rounded-sm text-center max-w-md">
              <Play className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-playfair mb-2">Video Preview</h3>
              <p className="text-sm text-muted-foreground mb-4">Experience our luxury day charters in action</p>
              <a
                href={src}
                className="inline-block bg-gold text-navy px-6 py-3 rounded-sm font-medium hover:bg-gold-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          poster={poster}
          playsInline
          muted
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>
      </div>
    </div>
  )
}
