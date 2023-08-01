import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog, Popover, } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import icon from '../Assets/icon-main.png'
import { BsFillChatDotsFill } from "react-icons/bs";
import Loaders from '../Components/Loader/Loaders'




const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        }, 600);
      }, [])
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
        {loader ? <Loaders/> :  <header className="bg-black rounded-full shadow dark:bg-gray-900 m-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8 " aria-label="Global">
            <div className="flex lg:flex-1">
                <a className="-m-1.5 p-1.5">
                  

                    <img className="h-12 w-auto " src={icon} alt="" />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">

                <Link to="/" className="text-sm font-bold leading-6 text-white">Home</Link>
                <Link to="/members" className="text-sm font-bold leading-6 text-white ">Members</Link>
                <Link to="/chats" className="text-sm font-bold leading-6 text-white "><BsFillChatDotsFill className='h-6 w-6'/></Link>




            </Popover.Group>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">


                <Link to="/profile" className='text-white font-bold mx-32 mt-2 uppercase'>
                    name
                </Link>


                <Link to="/login" className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-500">
                    Log In
                </Link>

            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10 text-white bg-white" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src=""
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">

                            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                            <Link to="/members" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">Members</Link>
                            <Link to="/chats" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"><BsFillChatDotsFill className='h-7'/></Link>


                            <Link to="/profile" className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50 uppercase">
                                Name
                            </Link>





                        </div>
                        <div className="py-6">


                            <Link to="/login" className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-500">
                                Log In
                            </Link>

                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    </header>}
           
        </>
    )
}