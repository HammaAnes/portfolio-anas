import './globals.css'

export const metadata = {
  title: 'Anas Porfolio',
  description: 'HAMMA Abdurahman Anas has got a portfolio now, check it for collabs or just to get to know him',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className="h-full bg-gradient-to-r from-blue-300">{children}</body>
    </html>
  )
}
