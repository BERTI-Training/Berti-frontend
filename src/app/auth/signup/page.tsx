import React from 'react'

const SignupPage = () => {
  return (
    <div className='w-full h-screen grid grid-cols-2'>
      <form action="" className='p-32 flex flex-col items-center justify-center bg-white shadow-md rounded-lg'>
        <h2 className='text-2xl text-center font-bold mb-6'>Sign Up</h2>
        <div className='w-full mb-4'>
          <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
          <input type="text" id="username" name="username" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' required />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
          <input type="email" id="email" name="email" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' required />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
          <input type="password" id="password" name="password" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' required />
        </div>
        <button type="submit" className='w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
          Sign Up
        </button>
      </form>
      <div className='bg-blue-600'></div>
    </div>
  )
}

export default SignupPage