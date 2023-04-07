import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { menu_icon, x_icon } from './icons'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-light-gray">

            <nav className="flex items-center justify-between lg:px-16 p-5">

                <Link href='/' className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                        <Image src="tailwind_logo.svg" alt="DRIFT Logo" fill={true} />
                    </div>
                    <span className='font-bold text-xl'>
                        DRIFT
                    </span>
                </Link>

                <div className="hidden lg:flex gap-16 font-semibold text-lg">
                    <Link href='/research'>
                        Research
                    </Link>
                    <Link href='/people'>
                        People
                    </Link>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </div>

                <Link href='/contact' className="hidden lg:block bg-blue font-semibold text-white px-5 py-2 rounded-full">
                    Contact Us
                </Link>

                <button onClick={() => setMobileMenuOpen(true)} className='lg:hidden flex justify-end'>
                    {menu_icon}
                </button>

            </nav>

            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10">
                    
                    <div className="flex items-center justify-between">
                        <Link href="/" className="relative w-10 h-10">
                            <Image src="tailwind_logo.svg" alt="DRIFT Logo" fill={true} />
                        </Link>
                        <button onClick={() => setMobileMenuOpen(false)}>
                            {x_icon}
                        </button>
                    </div>

                    <div className="flex flex-col py-6 gap-2">
                        <Link href="/research" className="rounded-lg px-3 py-2 -mx-3 text-xl font-semibold hover:bg-light-gray">
                            Research
                        </Link>
                        <Link href="/people" className="rounded-lg px-3 py-2 -mx-3 text-xl font-semibold hover:bg-light-gray">
                            People
                        </Link>
                        <Link href="/blog" className="rounded-lg px-3 py-2 -mx-3 text-xl font-semibold hover:bg-light-gray">
                            Blog
                        </Link>
                        <Link href="/contact" className="rounded-lg px-3 py-2 -mx-3 text-xl font-semibold hover:bg-light-gray">
                            Contact Us
                        </Link>
                    </div>
                    
                </Dialog.Panel>
            </Dialog>

        </header>
    )
}
