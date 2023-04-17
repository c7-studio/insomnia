import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: './OffBitTrial-101Bold.woff2',
  display: 'swap'
});

export const metadata = {
  title: 'TENEBRAE',
  description: 'TENEBRE sounds, BUENOS AIRES',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
