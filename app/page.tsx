"use client";

import Hero from "./(components)/Hero";
import Resources from "./(components)/Resources";

export default function Home() {

  return (
    <section className='w-full flex-center flex-col'>
      <Hero />
      <Resources />
    </section>
  );
}