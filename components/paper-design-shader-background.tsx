"use client"
import { GrainGradient } from "@paper-design/shaders-react"

interface GradientBackgroundProps {
  scale?: number
}

export function GradientBackground({ scale = 1 }: GradientBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 0%)"
        softness={0.76}
        intensity={0.45}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={scale}
        rotation={0}
        speed={1}
        colors={["#B3A369", "#8F713D", "#051E39"]}
      />
    </div>
  )
}