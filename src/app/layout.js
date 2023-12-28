import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbars from './components/Navbars'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Public information',
  description: 'Let us take a brief look at some of the topics that we chose to omit from this book, but which you may find in some other introductory JavaScript material. Bear in mind that we cover all of these topics in depth in our Core Curriculum at Launch School, so we dont ignore them. However, theres;s a time and a place where a novice programmer is ready to learn about certain topics. Historically, JavaScript was inextricably tied to the DOM (Document Object Model) API, which is what you use to manipulate content on a webpage',
  Image: "https://firebasestorage.googleapis.com/v0/b/blogs-sharing.appspot.com/o/1703177870073pexels-christina-morillo-1181325.jpg?alt=media&token=edf77c98-5fff-4dd8-a8a4-f039191e1391"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="og:description" content={metadata.description} key="description" />
        <meta property="og:image" content={metadata.Image} key="image" />
        <meta property="og:url" content="https://public-information.netlify.app" key="url" />
        <meta property="og:type" content="website" key="type" />
      </Head>
      <body className={inter.className}>
        <Navbars />
        {children}
      </body>
    </html>
  )
}