import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <nav className='mx-auto py-2 px-4 flex justify-between'>
      <Link href={"/"} className='flex items-center'>
        <Image
          src="/logo.png"
          width="150"
          height="60"
          alt="Calcord Logo"
          className="h-16 w-auto"
        />
      </Link>
      <div> 
        <Link href="/events?create=true">
          <Button>Create Event</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Header