import Nav from '@/components/Nav';
import './globals.css'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cool App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-gray pb-12'>
        <Nav /> 
        {children}
      </body>
    </html>
  )
}
