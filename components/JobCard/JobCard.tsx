import { FC } from 'react'


interface JobCardProps {
  job: {
    id: number
    position: string
    start_date: string
    end_date: string
    duration: string
    company: string
    type: string
    description: {
      text: string
      responsibilities: Array<string>
      technologies: Array<string>
    }
  }
}
const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <article className="relative flex flex-col gap-1 mb-6">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <h3 className="text-base font-semibold m-0 w-full">
          { job.position }
        </h3>
        <p className="m-0 text-[13px] w-full md:text-right">
          <time dateTime="2020-05-01">
            { job.start_date }
          </time> - <time dateTime="2020-08-31">
            { job.end_date }&nbsp;·&nbsp;{ job.duration }
          </time>
        </p>
      </div>
      <div className="flex items-center">
        <h4 className="m-0 font-light text-[14px]">
          { job.company }
        </h4>&nbsp;·&nbsp;
        <p className="m-0 font-light text-[14px]">
          { job.type }
        </p>
      </div>
      <div className="text-[13px] break-words">
        { job.description.text }
        <ul className="list-none pl-0 my-[10px]">
          { job.description.responsibilities.map((r, index) => (
            <li key={index}>
              - { r }
            </li>
          )) }
        </ul>
                            
        <b className="text-[13px]">
          Technologies used:
        </b> 
        {job.description.technologies.map((s) => s).join(', ')}.
      </div>
    </article>
  )
}


export {
  JobCard
}