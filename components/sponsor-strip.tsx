import Image from 'next/image'

export function SponsorStrip() {
  return (
    <div className="relative bg-black/80 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/60 text-lg">Platform Partner</span>
            <Image
              src="/devfolio-logo.png"
              alt="Devfolio"
              width={400}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/60 text-lg">Main Sponsor</span>
            <Image
              src="/llmware-logo.png"
              alt="LLMWare"
              width={500}
              height={120}
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-white/60 text-lg">Snacking Partner</span>
            <Image
              src="/unibic-logo.png"
              alt="Unibic"
              width={4000}
              height={120}
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

