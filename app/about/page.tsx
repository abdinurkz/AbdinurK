import Link from 'next/link'
import { 
  GitHubIcon, 
  ArrowIcon, 
  TelegramIcon, 
  LinkedInIcon,
  GmailIcon
} from 'components/Icons'


export default function About() {
  return (
    <main className="max-w-2xl w-full flex justify-between items-center mx-auto">
      <section className="pl-[20px] max-w-[230px] w-full">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/abdinur08"
          className="mb-2 flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <TelegramIcon />
            <div className="ml-3">Telegram</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/AbdinurK"
          className="mb-2 flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">Github</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/abdinur-kuatbek-80241b190/"
          className="mb-2 flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <LinkedInIcon />
            <div className="ml-3">LinkedIn</div>
          </div>
          <ArrowIcon />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:kuatbekabdinur@gmail.com"
          className="mb-2 flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <GmailIcon />
            <div className="ml-3">Gmail</div>
          </div>
          <ArrowIcon />
        </a>
      </section>
    </main>
  )
}