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
          <a href="steam://connect/50.68.198.123:26901">Join 7 Days Server Here</a>
		<h2> Password = 4deez </h2>
		  
        </p>
		
      </main>

    </div>
  )
}
