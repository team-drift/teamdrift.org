import Head from 'next/head'
import Image from 'next/image'

export default function Research() {


    const leads_data = [
        {
            image: '/photos/leads.png',
            alt: 'Temporary image of the LEADS project.',
            title: 'Laser Energized Aerial Drone System',
            subtitle: '',
            content: 'Laser Energized Aerial Drone System (LEADS) is a Michigan State University student-led project with a solution to the limitations of current drone technology for monitoring wildfires. \n\n Due to the increasing threat of wildfires caused by rising global temperatures, firefighters rely heavily on unmanned aerial vehicles (UAV) to gain mission-critical information from a safe distance. Although these systems provide first responders with a quick view from above, their flight time and range are limited. \n\n On the contrary, NASA operates two RQ-4 Global Hawk’s out of Armstrong Flight Research Center for natural disaster surveillance but requires a comparatively high operational cost and downtime. \n\n To solve these issues, LEADS combines an optimized Vertical Takeoff and Landing (VTOL) platform paired with wireless charging capabilities to sustain a virtually unlimited flight time throughout the mission. By developing a safe, quiet, and affordable system, LEADS provides first responders with critical air support without hassle and maintenance.'
        }
    ]

    const aided_data = [
        {
            image: '/photos/aided.png',
            alt: 'An image of SQUAB-2, a prototype delivery drone used for testing.',
            title: 'Aerial Intra-city Delivery Electric Drone',
            subtitle: 'Winner of NASA\'s University Student Research Challenge and Michigan State University\'s Undergraduate Research and Arts Forum',
            content: 'The Aerial Intra-city Delivery Electric Drone (AIDED) project began in 2021 as an idea by Yuchen Wang, a senior in electrical engineering at Michigan State University. After sitting in traffic behind one of MSU\'s common campus CATA buses, Wang had recognized the vast amount of empty space on top of the large bus. He envisioned it was plenty of space for a drone to sit upon, and could be the perfect place for an intelligent delivery drone to charge while still staying on the move. He immediately went to his professor, Dr. Woongkul Lee with the innovative idea.\n\nWith the help of Dr. Lee, Wang was able to build a small team of students to help bring his idea to life. Together, they applied to and won NASA\'s University Student Research Challenge (USRC), where they would be awarded a grant to help fund their idea. The small team of students, now with funding, would be able to make sigificant progress on constructing a high payload drone with charging and latching capabilities.\n\nTwo years later, the AIDED team would not only grow their team, but grow their mission. The founders of AIDED would find other passionate students to continue their research project as they graduated, and would find great success in developing the autonomous drone, which is now nearly complete. The opportunity that the AIDED project provided to young engineering students could not be ignored, and the team would later establish the Drone Research and Intelligent Flight Technology organization, better known as DRIFT.'
        }
    ]

    return (
        <>

            <Head>
                <title>Research</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className='bg-light-gray pt-16'>


                {leads_data.map(({ image, alt, title, subtitle, content }) => (
                    <div class="relative isolate overflow-hidden px-6 pb-20 lg:overflow-visible lg:px-0">
                        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div class="lg:pr-4">
                                    <div class="lg:max-w-lg">
                                        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
                                        <p class="mt-6 text-xl leading-8">{subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:py-12 sm:px-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <div className='relative aspect-w-5 aspect-h-4'>
                                    <Image src={image} alt={alt} fill={true} className='rounded-xl object-scale-down object-center shadow-xl' />
                                </div>
                            </div>
                            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div class="lg:pr-4">
                                    <div class="max-w-xl text-base leading-7 lg:max-w-lg whitespace-pre-line">
                                        <p className='mb-8'>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                {aided_data.map(({ image, alt, title, subtitle, content }) => (
                    <div class="relative isolate overflow-hidden px-6 pb-20 lg:overflow-visible lg:px-0">
                        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div class="lg:pr-4">
                                    <div class="lg:max-w-lg">
                                        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
                                        <p class="mt-6 text-xl leading-8">{subtitle}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:py-12 sm:px-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                                <div className='relative aspect-w-5 aspect-h-4'>
                                    <Image src={image} alt={alt} fill={true} className='rounded-xl object-scale-down object-center shadow-xl' />
                                </div>
                            </div>
                            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                <div class="lg:pr-4">
                                    <div class="max-w-xl text-base leading-7 lg:max-w-lg whitespace-pre-line">
                                        <p className='mb-8'>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </main>

        </>
    )
}