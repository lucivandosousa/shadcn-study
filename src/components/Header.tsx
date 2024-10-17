import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

export default function Header() {
  return (
    <header className="w-full py-2 px-4 flex items-center justify-between fixed top-0 bg-white z-10">
      <h1 className="text-2xl font-bold">Shadcn/UI</h1>
      <div className='border-slate-400 border-4 rounded-full p-1'>
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/lucivandosousa.png" />
        </Avatar>
      </div>
    </header>
  )
}
