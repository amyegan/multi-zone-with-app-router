import Image from 'next/image'

export default function Home() {
  return (
    <main style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection: "column", height: "100vh"}}>
      <h1>Home placeholder</h1>
      <a href="/blog">Go to blog</a>
    </main>
  )
}
