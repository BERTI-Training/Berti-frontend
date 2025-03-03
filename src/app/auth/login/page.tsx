import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen grid grid-cols-2'>
      <form action="" className='p-32 flex items-center justify-center flex-col'>
        <div className='w-full mb-4'>
          <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username or Email</label>
          <input type="text" id="username" name="username" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' required />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
          <input type="password" id="password" name="password" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' required />
        </div>
        <button type="submit" className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
          Submit
        </button>
      </form>
      <div className='bg-blue-600'>
        {/* Additional content can go here */}
      </div>
    </div>
  )
}

export default page