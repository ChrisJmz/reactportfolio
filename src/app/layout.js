export const metadata = {
  title: 'Portfolio.',
  description: 'CJ portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
