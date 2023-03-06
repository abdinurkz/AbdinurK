'use client'
import { useEffect, useState } from 'react'

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

  console.log(repos);
  
  return (
    <div>

    </div>
  ) 
} 