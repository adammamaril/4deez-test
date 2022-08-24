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
          <a href="steam://connect/50.68.198.123:26901/4deez">Join 7 Days Server Here</a>
		<h2> Password = 4deez </h2>
		<h2> You can also connect using 7days.4deeznuts.xyz as the IP </h2>
	  	<h3> Open Invites to DBC server and my friends so be friendly yall :) </h3>
		  
        </p>
		
      </main>

    </div>
  )
}
