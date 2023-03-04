import Image from 'next/legacy/image'
import { useTranslation } from 'internationalization'
import Up from 'utils/animations/motions/Up'
import { languages, fallbackLng } from 'internationalization/settings'
import { Trans } from 'react-i18next/TransWithoutContext'
import avatar from './avatar.png'


export default async function Home({ params: { lng } }: {
  params: {
    lng: string
  }
}) {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto mb-3">
      <section className="px-[20px]">
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="text-[14px]">
            <Up>
              <h1 className="text-3xl md:text-left text-center md:text-5xl font-bold tracking-tight mt-0 mb-2">
                { t('full_name') }
              </h1>
            </Up>
            <Up delay={0.2}>
              <h2 className="mt-0 md:text-left text-center mb-4 text-lg">
                { t('position') }
              </h2>
            </Up>
          </div>
          <figure className='mx-auto'>
            <Up delay={0.1}> 
              <Image 
                alt="avatar" 
                src={avatar} 
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
            { t('info.intro') }  
          </p>
          <ul className="pl-[20px] list-[space-counter] m-0 break-normal">
            <li>{ t('info.abilities.first') }</li>
            <li>{ t('info.abilities.second') }</li>
            <li>{ t('info.abilities.third') }</li>
          </ul>
          <p className='mt-3'>
            { t('info.last') }  
          </p>
        </Up>
      </section>
    </main>
  )
}