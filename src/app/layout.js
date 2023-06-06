import './globals.css'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css';


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cool App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
