
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className='flex flex-col items-center gap-10 py-8 md:py-16'>
            <div className='flex max-xl:flex-col items-center gap-12 xl:gap-20'>
                <div className='text-center max-md:px-6 md:w-[700px]'>
                    <h1 className='font-light text-sm md:text-xl tracking-widest whitespace-pre-line sm:whitespace-normal'>
                        DRONE RESEARCH AND INTELLIGENT {'\n'} FLIGHT TECHNOLOGY
                    </h1>
                    <h2 className='font-semibold text-xl md:text-5xl my-3 md:my-5 whitespace-pre-line sm:whitespace-normal'>
                        Award winning <span className='text-blue'>undergraduate</span> {'\n'} autonomous drone research.
                    </h2>
                    <p className='md:text-xl mb-8'>
                        Our research organization is pushing the limits of drone technology through the development of autonomous drone applications.
                    </p>
                    <Link href='/research' className="bg-black font-semibold text-white px-5 py-2 rounded-full">
                        Discover our work
                    </Link>
                </div>
                <div className='w-full aspect-1 xs:w-[400px] xs:h-[400px] bg-neutral-300' />
            </div>
            <div className='flex gap-4 items-center'>
                <span className='font-light text-2xl tracking-wider'>
                    FUNDED BY
                </span>
                <div className='relative w-28 h-28'>
                    <Image src='/company_logos/nasa.png' alt='NASA' fill={true} className='object-contain' />
                </div>
            </div>
        </section>
    )
}
