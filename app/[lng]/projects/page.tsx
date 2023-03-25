import { useTranslation } from 'internationalization'

export default async function Projects({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, 'projects')
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto">
      <section className="pl-[20px]">
        { t('plug') }
      </section>
    </main>
  ) 
} 