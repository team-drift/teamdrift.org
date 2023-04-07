import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-neutral-700 text-white px-12 lg:px-36 xl:px-48 py-16">
            {/* <div className="flex justify-between">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-neutral-400">
                            About DRIFT
                        </h2>
                        <p className="text-lg w-80">
                            DRIFT is a NASA funded student led research group developing novel use cases for autonomous drones.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a className="bg-white w-8 h-8 rounded-full">

                        </a>
                        <a className="bg-white w-8 h-8 rounded-full">

                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 h-fit text-2xl gap-x-10 gap-y-4 grid-flow-col">
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
                    <Link href='/contact' className="hover:underline">
                        Contact Us
                    </Link>
                </div>
            </div>
            <p className="text-neutral-400 mt-7">
                &copy; {new Date().getFullYear()} Drone Research and Intelligent Flight Technology. All rights reserved.
            </p> */}
        </footer>
    )
}
