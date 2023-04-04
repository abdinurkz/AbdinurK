'use client'
import { useEffect, useState } from 'react'
import { ExternalLinkIcon, StarIcon } from 'components/Icons'
import Link from 'next/link'

export function List() {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/abdinurk/repos?per_page=100'
      )

      return repos.json()
    }

    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.error(err))
  }, [])

  
  return (
    <div>
      <section className="segment">
        <div className="container">
          <div className="flex flex-col w-full flex-grow">
            {repos.slice(0, 5).map((project) => {
              return (
                <div className="card anchored large border-l-fuchsia-600 w-full" key={project.slug}>
                  <div className="stars">
                    <div className="star">
                      <a
                        href={`https://github.com/abdinurk/${project.slug}/stargazers`}
                      >
                        {Number(
                          project.stargazers_count
                        ).toLocaleString()}
                      </a>
                      <StarIcon />
                    </div>
                  </div>
                  <div>
                    <a
                      className="card-header"
                      href={`https://github.com/abdinurk/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="links anchored">
                    {project.writeup && (
                      <Link className="button small" href={project.writeup}>
                        Article
                      </Link>
                    )}
                    {/* {project.url && (
                      <a
                        className="button small flex"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo <ExternalLinkIcon />
                      </a>
                    )} */}
                    <a
                      className="button small flex"
                      href={`https://github.com/abdinurk/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  ) 
}