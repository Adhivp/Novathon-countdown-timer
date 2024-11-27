import { EditableCountdown } from '@/components/editable-countdown'
import { SponsorStrip } from '@/components/sponsor-strip'

export default function HomePage() {
  return (
    <main className="h-screen bg-black overflow-hidden relative flex flex-col">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]" 
        style={{ backgroundSize: '24px 24px' }}
      />
      
      {/* AI Hackathon Banner */}
      <div className="absolute top-0 left-0 w-full bg-[#90ff42] bg-opacity-20 transform -skew-y-3 z-10">
        <div className="transform skew-y-3 py-4 px-8">
          <p className="text-[#90ff42] text-2xl md:text-3xl font-mono font-bold text-center" 
             style={{ textShadow: '0 0 10px rgba(144, 255, 66, 0.8), 0 0 20px rgba(144, 255, 66, 0.5), 0 0 30px rgba(144, 255, 66, 0.3)' }}>
            AI HACKATHON
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 translate-y-12">
        <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#90ff42] to-[#50ff42] mb-8 text-center"
            style={{
              WebkitTextStroke: '2px #90ff42',
              textShadow: '0 0 20px rgba(144, 255, 66, 0.3), 0 0 40px rgba(144, 255, 66, 0.2)'
            }}>
          NOVATHON
        </h1>
            
        <div className="text-white text-3xl md:text-5xl font-bold mb-12 text-center">
        The clock is ticking,make every line of code count!
        </div>

        {/* Centered Timer */}
        <div className="mb-12">
          <EditableCountdown defaultDate="2024-11-28T09:00:00" />
        </div>

        <div className="text-white/80 text-lg md:text-xl mb-16 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#90ff42]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          St. Thomas College (Autonomous), Thrissur
        </div>

        {/* Prize Pool */}
        <div className="absolute bottom-48 right-8 md:right-12 bg-[#90ff42] rounded-full h-28 w-28 md:h-36 md:w-36 flex flex-col items-center justify-center transform rotate-12">
          <div className="text-black text-2xl md:text-4xl font-bold">70K+</div>
          <div className="text-black text-sm md:text-base">Prize pool</div>
        </div>
      </div>

      {/* Sponsor Strip */}
      <SponsorStrip />
    </main>
  )
}

