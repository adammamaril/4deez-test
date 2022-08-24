import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>4deez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="4deez Big Sexi Site" />
		<img src="https://i.imgur.com/GeA4VOA.gif"/>
        <p className="description">
          <a href="steam://connect/7days.4deez.xyz:26901">Join 7 Days Server Here</a>
		  
        </p>
		
      </main>

    </div>
  )
}
