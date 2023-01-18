import { motion, useIsPresent } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'


function pagina() {
  const isPresent = useIsPresent()


  return (
    <div className='grid grid-cols-2 h-screen'>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: {
            duration: 0.5,
            ease: 'circOut'
          }
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        variants={{
          true: {
            opacity: 1,
            backgroundColor: '#000',
          }
        }}
        transition={{ delay: 0.2, type: 'just', ease: "circOut", duration: 1 }}
        className='h-full privacy-screen' />
      <div>
        <h1>OLA</h1>

        <Link
          to='amsterdan'
        >Mudar</Link>
      </div>
    </div>
  )
}

export default pagina