import { ReactNode } from 'react'


interface PageProps {
  children: ReactNode
  title: string
  fullWidth?: boolean
}

const Page: React.FC<PageProps> = ({ children, title, fullWidth }) => {
  return (
    <div className="py-10">
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-lg font-normal leading-tight text-gray-600 dark:text-gray-400">
            {title}
          </p>
        </div>
      </header>
      <main>
        {fullWidth ? (
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        ) : (
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        )}
      </main>
    </div>
  )
}

export default Page
