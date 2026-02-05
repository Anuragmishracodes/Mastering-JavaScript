import React from 'react'
import logo from '../assets/ecobreathe.svg'
import { Link } from 'react-router-dom'
import { IconSearch, IconShoppingCart, IconUser, IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-[#f1f0ea] flex items-center justify-between px-[72px] max-[900px]:px-[48px] max-[500px]:px-[24px]'>
      <Link to={"/"}><img src={logo} alt="logo" className='h-10 max-[900px]:h-7' /></Link>
      <div className='flex gap-12 h-7 group relative overflow-hidden max-[900px]:hidden cursor-pointer'>
        <Link className='text-xl font-medium transition-transform duration-300 ease-out hover:-translate-y-7 flex-col flex font-[Satoshi]' to={"/About"}><span>About</span><span>About</span></Link>
        <Link className='text-xl font-medium transition-transform duration-300 ease-out hover:-translate-y-7 flex-col flex font-[Satoshi]' to={"/Products"}><span>Products</span><span>Products</span></Link>
        <Link className='text-xl font-medium transition-transform duration-300 ease-out hover:-translate-y-7 flex-col flex font-[Satoshi]' to={"/Blog"}><span>Blog</span><span>Blog</span></Link>
        <Link className='text-xl font-medium transition-transform duration-300 ease-out hover:-translate-y-7 flex-col flex font-[Satoshi] ' to={"/Contact"}><span>Contact</span><span>Contact</span></Link>
      </div>
      <div className='flex items-center gap-3 pl-4'>
        <IconSearch stroke={2} className='w-12 h-12 p-3 max-[900px]:hidden hover:bg-[#d9d9d9] rounded-[12px] bg-transparent cursor-pointer text-black hover:text-green-600' />
        <IconShoppingCart stroke={2} className='w-12 h-12 p-3 max-[900px]:hidden hover:bg-[#d9d9d9] rounded-[12px] bg-transparent cursor-pointer text-black hover:text-green-600' />
        <IconUser stroke={2} className='w-12 h-12 p-3 rounded-[12px]  max-[900px]:hidden hover:bg-[#d9d9d9] bg-transparent cursor-pointer text-black hover:text-green-600' />
        <IconMenu2 stroke={2} className='w-12 hidden max-[900px]:block h-12 p-3 rounded-[12px] hover:bg-[#d9d9d9] bg-transparent cursor-pointer text-black hover:text-green-600' />
      </div>
    </div>
  )
}

export default Navbar
