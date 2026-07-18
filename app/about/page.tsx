import Navbar from "../Components/Navbar"
import Link from "next/link"

export default function About() {
  return (
    <div>
      <Navbar />
      
      <div style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>About Us</h1>
        <p style={{ color: '#666', marginTop: '10px' }}>hame jane</p>

        <div style={{ display: 'flex', gap: '40px', marginTop: '40px', alignItems: 'center' }}>
          
          {/* Left Image */}
          <img src="/hero.jpg" style={{ width: '400px', borderRadius: '15px' }} />

          {/* Right Content */}
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>We Build Fast & Modern Websites</h2>
            <p style={{ marginTop: '15px', lineHeight: '28px', color: '#444' }}>
              Mera naam Jahanzaib hai aur mai Next.js Developer hun. Mai businesses ke liye tez, khoobsurat aur Google par rank hone wali websites banata hun.
              Meri websites latest technology par banti hain jo future ke liye ready hoti hain.
            </p>

            <div style={{ marginTop: '25px', display: 'flex', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>50+</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>Projects Done</p>
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>100%</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>Client Satisfaction</p>
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>24/7</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>Support</p>
              </div>
            </div>

            <Link href="/contact">
              <button style={{ marginTop: '30px', padding: '12px 30px', background: 'black', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
