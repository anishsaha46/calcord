import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import UserMenu from './user-menu'

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

      <div className='flex items-center space-x-4'> 
        <Link href="/events?create=true">
          <Button className="flex items-center gap-2">
            <PenBox size={18}/>Create Event
          </Button>
        </Link>

        <SignedOut>
          {/* Use the SignInButton directly without wrapping in Button */}
          <SignInButton forceRedirectUrl="/dashboard">
            Login 
          </SignInButton> 
        </SignedOut>

        <SignedIn>
          <UserMenu />
        </SignedIn>

      </div>
    </nav>
  )
}

export default Header