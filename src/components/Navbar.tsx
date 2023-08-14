import Link from 'next/link'
import Image from 'next/image'
import { CartIcon, Menu } from '.'
import UserLinks from './UserLinks'

const Navbar = () => {
  return (
    <div className="h-12 text-gold p-4 flex items-center justify-between border-b-2 border-b-gold uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1 font-semibold">
        <Link href="/menu" className='cursor-pointer hover:text-chelseaBlue'>Menu</Link>
        <Link href="/about" className='cursor-pointer hover:text-chelseaBlue'>About</Link>
        <Link href="/contact" className='cursor-pointer hover:text-chelseaBlue'>Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl font-bold flex-1 md:text-center">
        <Link href="/" className='cursor-pointer hover:text-chelseaBlue'>RavenDelivery</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 2xl:static flex items-center gap-2 cursor-pointer bg-gold px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className='text-white text-xs'>123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar