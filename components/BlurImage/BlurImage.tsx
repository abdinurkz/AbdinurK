'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'


interface IBlurImage {
  src: string
  alt: string
  width: number
  height: number
  className: string
  priority?: boolean
}
export function BlurImage(props: IBlurImage) {
  const [isLoading, setLoading] = useState(true)
  
  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={props.alt}
        src={props.src}
        width={props.width}
        height={props.height}
        // priority={props.priority}
        className={props.className}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}