'use client'
import { useEffect } from 'react'


export default function Error({
  error,
  // reset
}: {
  error: Error
  reset: () => void
}) {

  useEffect(() => { 
    console.error(error)
  }, [error]);

  // const handleRefreshPage = () => reset()

  return (
    <div className='flex items-center justify-center'>
      <p>Oh no, something went wrong on cv page... maybe refresh?</p>
    </div>
  );
}
