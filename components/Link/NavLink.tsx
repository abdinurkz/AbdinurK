'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'


export const NavLink = ({
  slug,
  children,
}: {
    slug: string,
    children: React.ReactNode,
}) => {
  const segment = useSelectedLayoutSegment()
  const isActive = slug === segment

  return (
    <Link
      href={`/blog/${slug}`}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </Link>
  )
}