'use client'
import { useState } from 'react'
import Image from 'next/image'


interface IBlurImage {
  src: string
  alt: string
  width: number
  height: number
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
        priority={props.priority}
        className={`
          duration-700 ease-in-out group-hover:opacity-75
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}