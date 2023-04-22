
import Image from 'next/image'

export default function Showcase() {

    const data = [
        {
            image: '/photos/solutions.png',
            alt: 'An image of SQUAB-2, a prototype delivery drone used for testing.',
            header: 'Creative solutions.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pellentesque turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            image: '/photos/production.png',
            alt: 'An image of a laptop opened to display a design of a drone landing platform.',
            header: 'Intelligent production.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pellentesque turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            image: '/photos/students.png',
            alt: 'An image of two students working together.',
            header: 'Empowering students.',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pellentesque turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
    ]

    return (
        <section className='bg-white px-[10%] py-20'>

        <h2 className='font-semibold text-4xl mb-14'>
            Innovative ideas by <span className='text-blue'>innovative students.</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8">
            {data.map(({ image, alt, header, details }) => (
                <div>
                    <div class="relative aspect-h-1 aspect-w-1 w-full mb-6">
                        <Image src={image} alt={alt} fill={true} class="rounded-xl object-cover object-center lg:h-full lg:w-full shadow-xl" />
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl mb-4">
                            {header}
                        </h3>
                        <p class="whitespace-pre-line">
                            {details}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        </section>
    )
}
