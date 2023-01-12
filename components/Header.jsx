import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export function Header() {
  const [searchInput, setSearchInput] = React.useState('')
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date(0))

  const handleSelect = (ranges) => {
    console.log('ranges', ranges)
    setStartDate(ranges.Selection.startDate)
    setEndDate(ranges.Selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  }



  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer'>
        <Image
          src='https://links.papareact.com/qd3'
          layout="fill"
          className="object-contain object-left"
        />
      </div>

      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text" placeholder='Start your search'
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
        />
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-' />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </div>
      )}
    </header>
  )
}

