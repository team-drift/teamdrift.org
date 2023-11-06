import Link from "next/link"
import { github_icon, linkedin_icon } from "./icons"

export default function Footer() {
    return (
        <footer className="bg-neutral-700 text-white px-5 md:px-12 lg:px-36 py-16 flex justify-center">
            <div className="flex justify-between md:w-full">
                <div>

                    <div className="mb-6">
                        <h2 className="text-neutral-400 mb-2">
                            About DRIFT
                        </h2>
                        <p className="text-lg w-80">
                            DRIFT is a NASA funded student led research group developing novel use cases for autonomous drones.
                        </p>
                    </div>

                    <div className="flex gap-5 mb-6">
                        <a href='https://www.linkedin.com/company/driftmsu/about/'>
                            {linkedin_icon}
                        </a>
                        <a href='https://github.com/team-drift'>
                            {github_icon}
                        </a>
                    </div>

                    <div className="md:hidden grid grid-cols-2 grid-rows-3 h-fit text-2xl gap-x-10 gap-y-4 grid-flow-col my-12">
                        <Link href='/' className="hover:underline">
                            Home
                        </Link>
                        <Link href='/research' className="hover:underline">
                            Research
                        </Link>
                        <Link href='/people' className="hover:underline">
                            People
                        </Link>
                        <Link href='/blog' className="hover:underline">
                            Blog
                        </Link>
                        <Link href='/sponsors' className="hover:underline">
                            Sponsor Us!
                        </Link>
                        <Link href='/contact' className="hover:underline">
                            Contact Us
                        </Link>
                    </div>
                    <p className="text-neutral-400">
                        &copy; {new Date().getFullYear()} DRIFT. All rights reserved.
                    </p>
                </div>

                <div className="hidden md:grid grid-cols-2 grid-rows-3 h-fit text-2xl gap-x-10 gap-y-4 grid-flow-col">
                    <Link href='/' className="hover:underline">
                        Home
                    </Link>
                    <Link href='/research' className="hover:underline">
                        Research
                    </Link>
                    <Link href='/people' className="hover:underline">
                        People
                    </Link>
                    <Link href='/blog' className="hover:underline">
                        Blog
                    </Link>
                    <Link href='/sponsors' className="hover:underline">
                        Sponsor Us!
                    </Link>
                    <Link href='/contact' className="hover:underline">
                        Contact Us
                    </Link>
                </div>

            </div>
        </footer>
    )
}
