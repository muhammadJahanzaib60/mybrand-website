import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Services Section */}
      <div style={{ padding: '60px 40px', background: '#f9f9f9', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '30px' }}>Hamari Services</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          <Link href="/fast-speed" style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', width: '250px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <h3 style={{ fontWeight: 'bold' }}>Fast Speed</h3>
              <p style={{ color: '#666', marginTop: '10px', fontSize: '14px' }}>Next.js se website rocket ki tarah tez chalti hai.</p>
            </div>
          </Link>

          <Link href="/modern-design" style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', width: '250px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <h3 style={{ fontWeight: 'bold' }}>Modern Design</h3>
              <p style={{ color: '#666', marginTop: '10px', fontSize: '14px' }}>Har mobile aur laptop par khoobsurat lagegi.</p>
            </div>
          </Link>

          <Link href="/seo-ready" style={{ textDecoration: 'none', color: 'black' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', width: '250px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <h3 style={{ fontWeight: 'bold' }}>SEO Ready</h3>
              <p style={{ color: '#666', marginTop: '10px', fontSize: '14px' }}>Google me jaldi rank hogi.</p>
            </div>
          </Link>

        </div>
      </div>

      <div style={{ background: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
        <p>© 2026 MyBrand - Made by Jahanzaib</p>
      </div>

    </div>
  )
}