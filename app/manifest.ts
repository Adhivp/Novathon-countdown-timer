import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Novathon AI Hackathon Timer',
    short_name: 'Novathon Timer',
    description: 'Official countdown timer for Novathon AI Hackathon at St. Thomas College (Autonomous), Thrissur',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#90ff42',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
