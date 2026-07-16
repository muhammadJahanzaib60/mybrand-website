import Link from "next/link"

export default function Hero() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '42px', fontWeight: 'bold' }}>Welcome to My Website</h1>
      <p style={{ color: '#666', margin: '15px 0 25px' }}>Meri pehli Next.js website</p>
      <img src="/hero.jpg" style={{ width: '100%', maxWidth: '600px', borderRadius: '15px', marginBottom: '30px' }} />
      
      <Link href="https:http://127.0.0.1/abusultan/wp-admin" target="_blank">
        <button style={{ padding: '12px 30px', background: 'black', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  )
}