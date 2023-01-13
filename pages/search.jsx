import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import { InfoCards } from '../components/InfoCards'

export default function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query;

  console.log(searchResults)

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className=''>
      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
      />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} number of guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className=' hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults?.map(({ id, img, location, title, description, star, price, total }) => (
              <InfoCards
                key={id}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = [
    {
      id: 1,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695,
      "total": "$117 total"
    },
    {
      id: 2,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 3,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 4,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 5,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 6,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 7,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 8,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 9,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
    {
      id: 10,
      "img": 'https://links.papareact.com/hz2',
      "location": "Private room in center of London",
      "title": "Stay at this spacious Edwardian House",
      "description": "I guest A+ 1 bedroom A+ 1 bed A 1.5 shared bathdrooms A+ Wifi A+ Kitchen A+ Free parking A+ Washing Machine",
      "star": 4.73,
      "price": "Â$30 / night",
      "long": -0.095091,
      "lat": 51.48695
    },
  ]

  return {
    props: {
      searchResults: searchResults
    }
  }

}