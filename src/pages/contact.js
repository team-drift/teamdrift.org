import Head from 'next/head'

export default function Contact() {
    return (
        <>

            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className='bg-light-gray'>
                <section className='flex justify-center pt-16 pb-48'>
                    <div className='px-6'>
                        <h1 className='font-bold text-3xl sm:text-4xl'>
                            Connect with us.
                        </h1>
                        <p className='mt-4 text-xl max-w-4xl leading-8'>
                            Interested in working with us or have any questions? We would love to hear from you.
                        </p>
                        <p className='mt-8 max-w-4xl leading-7'>
                            Our team is committed to developing creative and positive solutions to a variety of problems through intelligent drones. We look for a variety of talent, including hardware and software engineers, but we value a mutual sense of passion and commitment the most.
                        </p>
                        <p className='mt-4 max-w-4xl leading-7 font-semibold'>
                            Are you an undergraduate student interested in joining our team? Send us an email at email@email.com describing your past research experiences, interests, and goals. Also include a resume or CV if possible.
                        </p>
                        <p className='mt-4 max-w-4xl leading-7'>
                            As a completely student run organization, we depend on investments and awards to fund our research. If you are a company representative and/or would be interested in becoming a sponsor, or just want to get to know us better, we are always open to chat. Reach out to email@email.com and we'll respond as soon as we can.
                        </p>
                    </div>
                </section>
            </main>

        </>
    )
}
