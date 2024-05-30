export const NavBar = () => {
  return (
    <nav className='bg-gray-800 h-16 flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <img src='/vite.svg' alt='logo' className='h-10 w-10' />
        <h1 className='text-white text-xl'>My App</h1>
      </div>
      <div className='flex items-center space-x-4'>
        <a href='/login' className='text-white'>Login</a>
        <a href='/register' className='text-white'>Register</a>
      </div>
    </nav>
  )
}
