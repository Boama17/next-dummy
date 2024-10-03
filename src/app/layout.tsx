import { Helmet } from 'react-helmet';

export const metadata = {
  title: 'Vortex',
  description: 'Created with Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
