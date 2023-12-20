import Head from 'next/head'
import Image from 'next/image'

export default function People() {

    const team = [
        {
            image: '/team/gavin_gardner.png',
            name: 'Gavin Gardner',
            position: 'Project Manager',
        },
        {
            image: '/team/gryson_gardner.png',
            name: 'Gryson Gardner',
            position: 'Project Manager',
        },        
        {
            image: '/team/malachi_keener.png',
            name: 'Malachi Keener',
            position: 'Latching and Charging Lead',
        },
        {
            image: '/team/tate_virkus.png',
            name: 'Tate Virkus',
            position: 'Prototype Engineer',
        },
        {
            image: '/team/nick_michaels.png',
            name: 'Nick Michaels',
            position: 'Mechanical Engineer',
        },
        {
            image: '/team/david_lingan.png',
            name: 'David Cody Lingan',
            position: 'Software Lead',
        },
        {
            image: '/team/ryan_atkinson.png',
            name: 'Ryan Atkinson',
            position: 'Drone Systems Engineer',
        },
        {
            image: '/team/kaden_swierkos.jpg',
            name: 'Kaden Swierkos',
            position: 'Drone Systems Engineer',
        },
        {
            image: '/team/owen_cochell.JPG',
            name: 'Owen Cochell',
            position: 'Software Engineer',
        },
        {
            image: '/team/swabhan_katkoori.png',
            name: 'Swabhan Katkoori',
            position: 'Software Engineer',
        }
    ]


    const pastTeam = [
        {
            image: '/team/brady_berg.png',
            name: 'Brady Berg',
            position: 'Software Lead',
        },
        {
            image: '/team/ross_davis.png',
            name: 'Ross Davis',
            position: 'Mechanical Lead',
        },
        {
            image: '/team/ahmed_shoble.png',
            name: 'Ahmed Shoble',
            position: 'Circuit Engineer',
        },
        {
            image: '/team/adam_anderson.png',
            name: 'Adam Anderson',
            position: 'Software Engineer',
        },
        {
            image: '/team/nicholas_ly.png',
            name: 'Nicholas Ly',
            position: 'Software Engineer',
        },
        
    ]

    return (
        <>

            <Head>
                <title>People</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className='bg-light-gray'>

                <section className='flex justify-center py-16'>
                    <div className='px-6'>
                        <h1 className='font-bold text-3xl sm:text-4xl'>
                            Research for the future, by the future.
                        </h1>
                        <p className='mt-4 text-xl max-w-4xl leading-8'>
                            Our passion undergraduate team is solving complex problems by developing extraordinary flight technology.
                        </p>
                        <p className='mt-8 max-w-4xl leading-7'>
                            Founded by students, for students, our team will continue to be an opportunity for undergraduates to jump start their career through advanced, real world engineering problems. Our research is completely funded by awards, grants, sponsorships, and investments by others who want to support our mission to revolutionize drones.
                        </p>
                        <p className='mt-4 max-w-4xl leading-7'>
                            Our team is made up of students from many different fields, including mechanical engineering, electrical engineering, computer science, and data science. We are passionate about what we do, and we are excited to be able share our work!
                        </p>
                        <h1 className='font-bold text-3xl sm:text-4xl mt-16'>
                            Never done innovating.
                        </h1>
                        <p className='mt-4 text-xl max-w-4xl leading-8'>
                            We're extremely proud of our team, and we're honored others have taken notice. Our team has interned or accepted offers from these great companies.
                        </p>
                        <div class="mx-auto mt-16 grid grid-cols-4 items-center gap-y-12 sm:grid-cols-6">
                            <img class="col-span-2 max-h-8 sm:max-h-10 md:max-h-12 w-full object-contain" src="company_logos/amazon.png" alt="Amazon" loading='lazy' />
                            <img class="col-span-2 max-h-8 sm:max-h-10 md:max-h-12 w-full object-contain" src="company_logos/ford.png" alt="Ford" loading='lazy' />
                            <img class="col-span-2 max-h-8 sm:max-h-10 md:max-h-12 w-full object-contain" src="company_logos/bosch.png" alt="Bosch" loading='lazy' />

                            <img class="col-span-2 max-h-5 sm:max-h-6 md:max-h-7 w-full object-contain sm:col-start-2" src="company_logos/blueflite.png" alt="Blueflite" loading='lazy' />
                            <img class="col-span-2 col-start-2 max-h-7 sm:max-h-8 md:max-h-10 w-full object-contain sm:col-start-auto" src="company_logos/northrop_grumman.png" alt="Northrop Grumman" loading='lazy' />

                            <img class="col-span-2 max-h-10 sm:max-h-12 md:max-h-12 w-full object-contain" src="company_logos/linkedin.png" alt="LinkedIn" loading='lazy' />
                            <img class="col-span-2 max-h-12 sm:max-h-14 md:max-h-16 w-full object-contain" src="company_logos/tesla.png" alt="Tesla" loading='lazy' />
                            <img class="col-span-2 max-h-10 sm:max-h-12 md:max-h-12 w-full object-contain" src="company_logos/williams_international.png" alt="Williams International" loading='lazy' />


                        </div>
                    </div>
                </section>



                <section className='flex justify-center py-16 bg-white'>
                    <div className='px-6'>
                        <h1 className='font-bold text-3xl sm:text-4xl mb-12'>
                            Meet our team
                        </h1>
                        <div className='grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {team.map(({ image, name, position }) => (
                                <div className='flex flex-col items-center'>
                                    <div className='relative w-64 aspect-w-1 aspect-h-1 mb-4'>
                                        <Image src={image} alt={name} fill={true} className='rounded-full object-cover object-center shadow-xl' />
                                    </div>
                                    <text className='text-lg font-semibold leading-7 tracking-tight'>{name}</text>
                                    <text className='text-base font-semibold leading-6 text-blue'>{position}</text>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className='flex justify-center py-16 bg-white'>
                    <div className='px-6'>
                        <h1 className='font-bold text-3xl sm:text-4xl mb-12'>
                            and our graduated teammates!
                        </h1>
                        <p className='mt-4 max-w-4xl leading-8'>
                        </p>
                        <div className='grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {pastTeam.map(({ image, name, position }) => (
                                <div className='flex flex-col items-center'>
                                    <div className='relative w-64 aspect-w-1 aspect-h-1 mb-4'>
                                        <Image src={image} alt={name} fill={true} className='rounded-full object-cover object-center shadow-xl' />
                                    </div>
                                    <text className='text-lg font-semibold leading-7 tracking-tight'>{name}</text>
                                    <text className='text-base font-semibold leading-6 text-gray-500'>{position}</text>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}
