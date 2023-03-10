import { HTMLAttributes, useRef } from 'react'

export const RenderCount: React.FC<HTMLAttributes<HTMLDivElement>> = (
  { className },
  ...props
) => {
  const renders = useRef(0)

  return (
    <>
      <div
        className={`flex justify-center items-center absolute top-0 right-0 text-center h-8 w-8 rounded-full border border-gray-100 bg-gray-400 text-gray-900 ${className}`}
      >
        <span>{++renders.current}</span>
      </div>
    </>
  )
}
