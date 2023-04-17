'use client'

import Marquee from "react-fast-marquee";


export default function Home() {

  const marquee = 'this is not a dream… not a dream. We are using your brains electrical system as a receiver. We are unable to transmit through conscious neural interference. You are receiving this broadcast as a dream. We are transmitting from the year one, nine, nine, nine. You are receiving this broadcast in order to alter the events you are seeing. Our technology has not developed a transmitter strong enough to reach your conscious state of awareness, but this is not a dream. You are seeing what is actually occurring for the purpose of causality violation.'

  return (


    <div className="h-screen w-full bg-black">
      <div className="flex justify-center items-center py-10 flex-col">
        <h1 className="text-6xl text-white uppercase">Insomnia</h1>
        <div className="py-2">
          <Marquee gradient={false} className="bg-gray-500 text-white">
            {marquee}
          </Marquee>
          <div className="flex justify-center py-10">
            <iframe width="1080" height="500" src="https://www.youtube.com/embed/63gA8B3FwWo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
