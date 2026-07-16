import Navbar from "../Components/Navbar"
import Link from "next/link"

export default function SeoReady() {
  return (
    <div>
      <Navbar />
      <div style={{padding: '60px 40px'}}>
        <Link href="/" style={{textDecoration: 'none', color: '#666'}}>← Back to Home</Link>
        <h1 style={{fontSize: '45px', fontWeight: 'bold', marginTop: '20px'}}>🚀 SEO Optimized</h1>
        <p style={{fontSize: '18px', color: '#444', marginTop: '15px', lineHeight: '30px', maxWidth: '800px'}}>
          Website banana asaan hai, Google par lana mushkil. Hamari website SEO Ready hoti hai jisse aapka business Google ke pehle page par aasakta hai.
        </p>

        <div style={{background: 'black', color: 'white', padding: '25px', borderRadius: '12px', marginTop: '30px', maxWidth: '700px'}}>
          <h3 style={{fontWeight: 'bold'}}>Google kya dekhta hai?</h3>
          <p style={{marginTop: '10px', color: '#ccc', lineHeight: '28px'}}>
            1. Fast Loading (Hum de rahe hain)<br/>
            2. Mobile Friendly (Hum de rahe hain)<br/>
            3. Proper Title & Description (Hum laga ke denge)
          </p>
        </div>
      </div>
    </div>
  )
}