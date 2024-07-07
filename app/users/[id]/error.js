'use client' // Error components must be Client Components
 
import { useState, useEffect } from 'react'
import ErrorDisplay from '@/components/error-display'

 
export default function Error({ error, reset }) {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    setMessage(error.message);
    console.error(error)
  }, [error])
 
  return (
    <>
      <h1>User Details Error</h1>
      <ErrorDisplay message={message} reset={reset} />
    </>
    
  )
}