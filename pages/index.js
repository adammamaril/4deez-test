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
        <Header title="4DEEZ 7DAYZ AYY LMAO EXTRAVAGANZA!!" />
		<a href="https://www.youtube.com/watch?v=zL19uMsnpSU"> <img src="https://i.imgur.com/GeA4VOA.gif"/> </a>
        <p className="description">
          <a href="steam://connect/50.68.198.123:26901/4deez"><h2> Join 7 Days Server Here</h2></a>
		<h2> Password = 4deez </h2>
		<h3> You can also connect using 7days.4deeznuts.xyz as the IP </h3>
	  	<h3> Open Invites to DBC server and my friends so be friendly yall :) </h3>
		<br></br>
		<h4> MODIFIED VALUES = 300% XP | 160% LOOT | 150% BLOCK DMG | TWITCH CMDS </h4>
		<br></br>
		<h4> SERVER MODS = SNUFKIN ZOMBS | BIGGER CRAFT QUEUE | 60 SPACE BACKPACK | ALWAYS OPEN TRADER | BUFFED SUPPLY DROPS </h4>
        </p>
		
      </main>

    </div>
  )
}
