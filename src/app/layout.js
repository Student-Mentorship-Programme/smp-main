// import { Poppins } from 'next/font/google'
import Head from 'next/head';
import './globals.css'
import Header from '@/_components/common/Header/Header'
import Footer from '@/_components/common/Footer/Footer'

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700','800', '900'],
//   style: ['normal'],
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
