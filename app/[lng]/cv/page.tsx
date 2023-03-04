import data from 'content/cv.json'
import { useTranslation } from '../../../i18n'
import { JobCard } from 'components/JobCard'


export default async function CV({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {

  const { t } = await useTranslation(lng, 'cv')
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto">
      <section className="px-[20px]">
        <div className="w-full">
          <h2 className="font-normal text-lg mt-0 mb-4 border-b border-black dark:border-white">
            Experience
          </h2>
          {
            data.jobs.map((job) => <JobCard key={job.id} job={job} />)
          }
          <h2 className="font-normal text-lg mt-2 mb-4 border-b border-black dark:border-white">
            { t('language') }
          </h2>
          {
            data.languages.map((lang) => (
              <article key={lang.id}>
                <span>{ lang.text }</span> - <span>{ lang.level }</span>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  ) 
} 