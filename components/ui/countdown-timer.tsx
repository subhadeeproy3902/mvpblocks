"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type CountdownTimerProps = {
  targetDate: Date
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clear interval on component unmount
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="flex flex-col items-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-rose-300/5" />
            <motion.span
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="text-3xl md:text-4xl font-bold text-white relative z-10"
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.span>
          </div>
          <span className="text-rose-200/80 text-sm mt-2">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

