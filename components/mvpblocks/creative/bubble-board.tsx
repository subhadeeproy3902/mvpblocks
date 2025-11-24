"use client"

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, transform } from "framer-motion"

const ICON_CONFIG = {
  margin: 20,
  size: 100,
}

const CONTAINER_CONFIG = {
  width: 420,
  height: 420,
}

const GRID_SIZE = 10
const COLS = 12

function useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset, }: {
  x: any
  y: any
  scale: any
  planeX: any
  planeY: any
  xOffset: number
  yOffset: number
}) {
  const xScale = useRef(1)
  const yScale = useRef(1)
  const createScreenRange = (axis: "width" | "height") => [
    -60,
    80,
    CONTAINER_CONFIG[axis] - (ICON_CONFIG.size + ICON_CONFIG.margin) / 2 - 80,
    CONTAINER_CONFIG[axis] - (ICON_CONFIG.size + ICON_CONFIG.margin) / 2 + 60,
  ]

  const xRange = createScreenRange("width")
  const yRange = createScreenRange("height")

  const mapScreenToXOffset = transform(xRange, [50, 0, 0, -50])
  const mapScreenToYOffset = transform(yRange, [50, 0, 0, -50])
  const mapScreenXToScale = transform(xRange, [0, 1, 1, 0])
  const mapScreenYToScale = transform(yRange, [0, 1, 1, 0])

  const updateScale = useCallback(() => {
    const newScale = Math.min(xScale.current, yScale.current)
    scale.set(newScale)
  }, [scale])

  useEffect(() => {
    return planeX.onChange((v: number) => {
      const screen = v + xOffset + 20
      xScale.current = mapScreenXToScale(screen)

      x.set(mapScreenToXOffset(screen))
      updateScale()
    })
  }, [planeX, x, scale, xOffset, mapScreenXToScale, mapScreenToXOffset, updateScale])

  useEffect(() => {
    return planeY.onChange((v: number) => {
      const screen = v + yOffset + 20
      yScale.current = mapScreenYToScale(screen)

      y.set(mapScreenToYOffset(screen))
      updateScale()
    })
  }, [planeY, y, scale, yOffset, mapScreenYToScale, mapScreenToYOffset, updateScale])
}

function BubbleItem({ row, col, planeX, planeY, colorIndex, }: {
  row: number
  col: number
  planeX: any
  planeY: any
  colorIndex: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const length = ICON_CONFIG.size + ICON_CONFIG.margin
  const xOffset = col * length + (row % 2) * (length / 2)
  const yOffset = row * ICON_CONFIG.size

  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset })

  const colors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"]
  const colorClass = colors[colorIndex % colors.length]
  return (
    <motion.div
      style={{
        position: "absolute",
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: ICON_CONFIG.size,
        height: ICON_CONFIG.size,
      }}
      className={`rounded-full ${colorClass} shadow-lg`}
    />
  )
}

export default function BubbleBoard() {
  const GRID_SIZE_PX = 1000;
  const DEVICE_SIZE = CONTAINER_CONFIG.width;

  const initialOffset = -(GRID_SIZE_PX - DEVICE_SIZE) / 2;
  const x = useMotionValue(initialOffset);
  const y = useMotionValue(initialOffset);

  const grid = useMemo(() => {
    return new Array(GRID_SIZE).fill(null).map((_, i) => new Array(COLS).fill(null).map((_, j) => j))
  }, [])

  return (
      <div
        className="relative overflow-hidden rounded-3xl border-4 border-foreground bg-cover bg-center"
        style={{
          width: CONTAINER_CONFIG.width,
          height: CONTAINER_CONFIG.height,
          backgroundImage: 'url("https://api.svgl.app/svg/google.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 0 75px 75px rgb(--bg-muted/80%)",
        }}
      >
        <motion.div
          drag
          dragConstraints={{
            left: -650,
            right: 50,
            top: -600,
            bottom: 50,
          }}
          style={{
            width: 1000,
            height: 1000,
            x,
            y,
            background: "transparent",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {grid.map((rows, rowIndex) =>
            rows.map((colIndex) => (
              <BubbleItem
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                planeX={x}
                planeY={y}
                colorIndex={rowIndex * COLS + colIndex}
              />
            )),
          )}
        </motion.div>
      </div>
  )
}
