"use client"

import Link from 'next/link';
import { useState } from 'react'
import { CartIcon } from '.';
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdRestaurantMenu } from 'react-icons/md'
import Image from 'next/image';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false)

  const user = false

  return (
    <div>
      {open ? 
      <MdRestaurantMenu className="w-5 h-5 cursor-pointer" onClick={() => setOpen(!open)}/>
      :
      <BiSolidFoodMenu className="w-5 h-5 cursor-pointer" onClick={() => setOpen(!open)}/>
      }
      {open && (
        <div className="bg-gold text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
          <div className="flex items-center gap-2 cursor-pointer bg-chelseaBlue px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span className='text-white'>123 456 78</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu