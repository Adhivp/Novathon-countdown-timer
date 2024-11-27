import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface SponsorBannerProps {
  type: 'main' | 'snacking'
  name: string
  logo: string
  description: string
}

export function SponsorBanner({ name, logo, description }: SponsorBannerProps) {
  return (
    <Card className="bg-white/5 border-none hover:bg-white/10 transition-colors">
      <CardContent className="p-8">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={500}
            height={500}
            className="h-16 w-auto object-contain"
          />
          <div className="text-center">
            <p className="text-base text-gray-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

