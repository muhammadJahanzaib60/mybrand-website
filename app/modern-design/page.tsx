import Navbar from "../Components/Navbar"
import Link from "next/link"

export default function ModernDesign() {
  return (
    <div>
      <Navbar />
      <div style={{padding: '60px 40px'}}>
        <Link href="/" style={{textDecoration: 'none', color: '#666'}}>← Back to Home</Link>
        <h1 style={{fontSize: '45px', fontWeight: 'bold', marginTop: '20px'}}>🎨 Modern & Clean Design</h1>
        <p style={{fontSize: '18px', color: '#444', marginTop: '15px', lineHeight: '30px', maxWidth: '800px'}}>
          2025 ka trend hai minimal aur clean design. Hum Tailwind CSS aur latest UI trends use karte hain jo user ko engaged rakhta hai.
        </p>
        
        <img src="/hero.jpg" style={{width: '100%', maxWidth: '700px', borderRadius: '15px', marginTop: '30px'}} />

        <div style={{marginTop: '30px'}}>
          <h3 style={{fontWeight: 'bold', fontSize: '20px'}}>Design Features:</h3>
          <ul style={{marginTop: '15px', lineHeight: '32px', color: '#444'}}>
            <li>✔️ 100% Responsive - Mobile, Tablet, Laptop</li>
            <li>✔️ Dark / Light Mode Ready</li>
            <li>✔️ Smooth Animations</li>
            <li>✔️ Professional Fonts & Colors</li>
          </ul>
        </div>
      </div>
    </div>
  )
}