import React from 'react'
import { motion } from 'framer-motion'

function teste() {
  let [step, setStep] = React.useState(1)
  console.log(step)

  function handleStep() {
    let la = step + 1
    setStep(la)
  }
  return (
    <div className='flex min-h-screen items-start bg-gradient-to-br from-slate-700'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white'>
        <div className='flex justify-between rounded p-8'>
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className='px-8 pb-8'>
          <div>
            <div className='mt-2 h-6 w-40 rounded bg-slate-100' />
            <div className='mt-4 space-y-2'>
              <div className='h-4 w-5/6 rounded bg-slate-100' />
              <div className='h-4 rounded bg-slate-100' />
              <div className='h-4 w-4/6 rounded bg-slate-100' />
            </div>
          </div>
          <div className='mt-10 flex justify-between'>
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className='rounded px-2 py-1 text-slate-400 hover:text-slate-700'
            >
              Back
            </button>
            <button
              onClick={handleStep}
              className={`${step > 4 ? 'pointer-events-auto opacity-50' : ''} flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-2 text-white`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, type: 'tween', ease: 'easeOut', duration: 0.3 }}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5 13l4 4L19 7'
      />
    </svg>
  )
}

function Step({ step, currentStep }) {
  let status =
    currentStep === step ?
      'active' :
      currentStep < step ? 'inactive' : "complete"

  return (
    <div
      className='relative'
    >
      <motion.div
        animate={status}
        variants={{
          complete: {
            scale: 1.25
          },
          active: {
            scale: 1
          }
        }}
        className='absolute inset-0 bg-blue-200 rounded-full'
      ></motion.div>
      <motion.div
        initial={false}
        animate={status}
        transition={{
          duration: 0.2
        }}
        variants={{
          inactive: {
            backgroundColor: '#fff',
            borderColor: '#fff',
            color: 'rgb(226 232 240)'
          },
          active: {
            backgroundColor: '#fff',
            borderColor: '#3b82f6',
            color: '#3b82f6'
          },
          complete: {
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            color: '#3b82f6'
          },
        }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}>
        <div className='flex items-center justify-center'>
          {status === 'complete' ? (
            <CheckIcon className='h-6 w-6 text-white' />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default teste