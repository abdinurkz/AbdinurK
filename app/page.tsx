import Image from 'next/legacy/image';
import Up from 'utils/animations/motions/Up'


export default function Home() {
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto mb-3">
      <section className="px-[20px]">
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="text-[14px]">
            <Up>
              <h1 className="text-3xl md:text-left text-center md:text-5xl font-bold tracking-tight mt-0 mb-2">
                Kuatbek Abdinur
              </h1>
            </Up>
            <Up delay={0.2}>
              <h2 className="mt-0 md:text-left text-center mb-4 text-lg">
                Middle front-end developer
              </h2>
            </Up>
          </div>
          <figure className='mx-auto'>
            <Up delay={0.1}> 
              <Image 
                alt="avatar" 
                src="/avatar.png" 
                className="rounded-full"
                width={116} 
                height={116}
                priority
              />
            </Up>
          </figure>
        </div>
        <Up delay={0.4}>
          <p className="mb-3">
            Front-end developer with 2.5 years of commercial experience.Knowledge: React.js, Vue.js, Next.js, Typescript, TailwindCSS,
            Redux Toolkit, Pinia, Webpack, Vite, Eslint, Prettier. 
            Also, I have:
          </p>
          <ul className="pl-[20px] list-[space-counter] m-0 break-normal">
            <li>Ability writing clean, efficient and maintainable code using DRY, KISS, SOLID programming principles.</li>
            <li>Experience of implementing responsive designs that work flawlessly on desktop and mobile devices.</li>
            <li>Strong problem-solving skills and attention to details.</li>
          </ul>
          <p className='mt-3'>
            I will be glad to cooperate and open to new suggestions!
          </p>
        </Up>
      </section>
    </main>
  )
}