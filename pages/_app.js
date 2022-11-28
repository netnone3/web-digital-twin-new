import '../styles/globals.css'

import { Prompt } from '@next/font/google'

const prompt = Prompt({ weight: '200' ,subsets: ['prompt'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={prompt.className}>
      <Component {...pageProps} />
    </main>
  )
}