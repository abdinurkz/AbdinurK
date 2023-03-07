import { useTranslation } from 'internationalization'
import { JobCard } from 'components/JobCard'


export default async function CV({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {

  const { t } = await useTranslation(lng, 'cv')
  const languages = t('languages', { returnObjects: true }) as any;
  const universities = t('universities', { returnObjects: true }) as any;
  const jobs = t('jobs', { returnObjects: true }) as any;
  
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto pb-2">
      <section className="px-[20px]">
        <div className="w-full">
          <h2 className="font-normal text-lg mt-0 mb-4 border-b border-black dark:border-white">
            { t('experience') }
          </h2>
          {
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          }
          <h2 className="font-normal text-lg mt-2 mb-4 border-b border-black dark:border-white">
            { t('language') }
          </h2>
          {
            languages.map((lang) => (
              <article key={lang.id}>
                <span>{ lang.text }</span> - <span>{ lang.level }</span>
              </article>
            ))
          }
          <h2 className="font-normal text-lg mt-2 mb-4 border-b border-black dark:border-white">
            { t('education') }
          </h2>
          {
            universities.map((u) => (
              <article key={u.key}>
                <h4>{ u.text }</h4>
                <div className="flex w-full justify-between  mt-2">
                  <p>{ u.level }</p>
                  <span className='text-sm'>{ u.year }</span>
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  ) 
} 