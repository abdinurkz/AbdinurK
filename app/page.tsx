import Image from 'next/image'
import Up from 'utils/animations/motions/Up'


export default function Home() {
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto">
      <section className="pl-[10px]">
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="text-[14px]">
            <Up>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-0 mb-1">
                Kuatbek Abdinur
              </h1>
            </Up>
            <Up delay={0.2}>
              <h2 className="mt-0 mb-4 text-base font-normal">
                Middle front-end developer
              </h2>
            </Up>
            <Up delay={0.4}>
              <p className="text-[14px] mb-5 leading-6">
                Front-end developer with 2.5 years of commercial experience. Basic skills:
              </p>
              <ul className="list-disc pl-0 m-0">
                <li>HTML, CSS, SASS, ES6+.</li>
                <li>React, Next, Typescript, Redux Toolkit / Query, Antd design, Eslint, Webpack.</li>
                <li>I am able to complete tasks on time.</li>
                <li>Easy to adapt and learn.</li>
                <li>Ability to read code, also writing understandable code using DRY, KISS, SOLID programming principles.</li>
                <li>Communication and tolerance.</li>
              </ul>
            </Up>
            <Up delay={0.6}>
              <p>
                I will be glad to cooperate! Also open to new suggestions.
              </p>
            </Up>
          </div>
          <figure>
            <Up delay={0.1}>
              <Image 
                src="/avatar.png" 
                alt="avatar" 
                priority
                width={116} 
                height={116}
              />
            </Up>
          </figure>
        </div>
      </section>
    </main>
  )
}