import React from 'react'

function teste() {
  return (
    <div className='bg-black'>
      <CheckIcon className='h-5' />

    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 24 24'
      stroke='blue'
      strokeWidth={3}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
    </svg>
  )
}

export default teste