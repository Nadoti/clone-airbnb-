import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function search() {
  return (
    <div className=''>
      <Header />

      <main className='flex'>
        <section>
          <p className='text-xs'>300+ Stays for 5 number of guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

          <div className=''>
            <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg'>Cancellation Flexibility</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
