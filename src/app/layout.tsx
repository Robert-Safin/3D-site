import './globals.css'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='container max-w-[144px] min-h-screen bg-slate-800'>
      <body>{children}</body>
    </html>
  )
}
