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
        <Header title="Hey You! Ya you! Are you seriously playing 7 Days all by yourself?" />
		<img src="https://i.imgur.com/GeA4VOA.gif"/>
        <p className="description">
          <a href="steam://connect/50.68.198.123:26901/4deez"><h1> Join 7 Days Server Here</h1></a>
		<h2> Password = 4deez </h2>
		<h2> You can also connect using 7days.4deeznuts.xyz as the IP </h2>
	  	<h3> Open Invites to DBC server and my friends so be friendly yall :) </h3>
		<br>
		<h4 style="color:red"> 300% XP | 160% LOOT | 150% BLOCK DMG | TWITCH CMDS </h4>
		<br>
		<h4 style="color:red"> SERVER MODS - SNUFKIN ZOMBS | BIGGER CRAFT QUEUE | 60 SPACE BACKPACK | ALWAYS OPEN TRADER | BUFFED SUPPLY DROPS </H4>
        </p>
		
      </main>

    </div>
  )
}
