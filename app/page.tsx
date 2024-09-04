"use client";

import Access from "./(components)/Access";
import Collaborate from "./(components)/Collaborate";
import Footer from "./(components)/Footer";
import Hero from "./(components)/Hero";
import Resources from "./(components)/Resources";

export default function Home() {

  return (
    <section className='w-full flex-center flex-col'>
      <Hero />
      <Resources />
      <Collaborate />
      <Access />
      <Footer />
    </section>
  );
}