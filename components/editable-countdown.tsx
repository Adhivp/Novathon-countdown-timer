'use client'

import { useState, useEffect } from 'react'
import { Calendar, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

interface EditableCountdownProps {
  defaultDate: string
}

export function EditableCountdown({ defaultDate }: EditableCountdownProps) {
  const defaultDateTime = new Date('2024-11-29T12:00:00+05:30')
  const [targetDate, setTargetDate] = useState<Date>(defaultDateTime)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isEditing, setIsEditing] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [pausedDifference, setPausedDifference] = useState<number | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (isPaused) return;
      
      const currentDifference = pausedDifference !== null 
        ? pausedDifference 
        : targetDate.getTime() - new Date().getTime();
      
      if (currentDifference > 0) {
        const totalHours = Math.floor(currentDifference / (1000 * 60 * 60))
        setTimeLeft({
          hours: totalHours,
          minutes: Math.floor((currentDifference / 1000 / 60) % 60),
          seconds: Math.floor((currentDifference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate, isPaused, pausedDifference])

  const handlePausePlay = () => {
    if (isPaused) {
      // When resuming, adjust the target date based on the paused difference
      const newTargetTime = new Date().getTime() + (pausedDifference || 0)
      setTargetDate(new Date(newTargetTime))
      setPausedDifference(null)
    } else {
      // When pausing, store the current difference
      setPausedDifference(targetDate.getTime() - new Date().getTime())
    }
    setIsPaused(!isPaused)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value)
    if (!isNaN(newDate.getTime())) {
      setTargetDate(newDate)
      setPausedDifference(null)
      setIsPaused(false)
      setIsEditing(false)
    }
  }

  const formatDateForInput = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="bg-black/70 border-2 border-[#90ff42] rounded-lg p-6 md:p-8"
            style={{ boxShadow: '0 0 30px rgba(144, 255, 66, 0.2), 0 0 60px rgba(144, 255, 66, 0.1)' }}
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#90ff42]"
                 style={{ textShadow: '0 0 20px rgba(144, 255, 66, 0.5), 0 0 40px rgba(144, 255, 66, 0.3)' }}>
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-lg text-white/80 capitalize mt-2">
              {unit}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <Popover open={isEditing} onOpenChange={setIsEditing}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-black/30 border-[#90ff42]/30 text-[#90ff42]/30 hover:bg-[#90ff42]/10 hover:text-[#90ff42]"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Set Target Date & Time</h4>
              <Input
                type="datetime-local"
                defaultValue={formatDateForInput(targetDate)}
                onChange={handleDateChange}
              />
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="outline"
          size="sm"
          onClick={handlePausePlay}
          className="bg-black/30 border-[#90ff42]/30 text-[#90ff42]/30 hover:bg-[#90ff42]/10 hover:text-[#90ff42]"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

