import Navbar from "../Components/Navbar"
import Link from "next/link"

export default function FastSpeed() {
  return (
    <div>
      <Navbar />
      <div style={{padding: '60px 40px'}}>
        <Link href="/" style={{textDecoration: 'none', color: '#666'}}>← Back to Home</Link>
        <h1 style={{fontSize: '45px', fontWeight: 'bold', marginTop: '20px'}}>⚡ Fast Speed Performance</h1>
        <p style={{fontSize: '18px', color: '#444', marginTop: '15px', lineHeight: '30px', maxWidth: '800px'}}>
          Hamari Next.js website 100/100 PageSpeed Score deti hai. Normal React ya WordPress site 4-5 second me load hoti hai, hamari 0.8 second me.
        </p>
        
        <div style={{marginTop: '40px', display: 'flex', gap: '20px'}}>
          <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '10px', flex: 1}}>
            <h3 style={{fontWeight: 'bold'}}>✅ Image Optimization</h3>
            <p style={{fontSize: '14px', color: '#555', marginTop: '8px'}}>Automatic image compress</p>
          </div>
          <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '10px', flex: 1}}>
            <h3 style={{fontWeight: 'bold'}}>✅ Code Splitting</h3>
            <p style={{fontSize: '14px', color: '#555', marginTop: '8px'}}>Sirf zaroori code load hota hai</p>
          </div>
          <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '10px', flex: 1}}>
            <h3 style={{fontWeight: 'bold'}}>✅ Caching</h3>
            <p style={{fontSize: '14px', color: '#555', marginTop: '8px'}}>Dubara visit par instant open</p>
          </div>
        </div>
      </div>
    </div>
  )
}