"use client"
import Navbar from "../Components/Navbar"
import { useState } from "react"

export default function Contact() {
  const [done, setDone] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setDone(true)
    setTimeout(() => setDone(false), 4000)
    e.target.reset()
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '45px', fontWeight: 'bold', textAlign: 'center' }}>Contact me</h1>
        <p style={{ color: '#666', textAlign: 'center', marginTop: '10px' }}>koi problem hu tu? HumseContact karen</p>
        <div style={{ display: 'flex', gap: '50px', marginTop: '50px' }}>
          <div style={{ flex: 1, background: '#f9f9f9', padding: '30px', borderRadius: '15px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '20px' }}>Contact Info</h3>
            <div style={{ marginTop: '25px' }}>
              <p style={{ fontWeight: 'bold' }}>📍 Address</p>
              <p style={{ color: '#555', marginTop: '5px' }}>DGK, Pakistan</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>📞 Phone</p>
              <p style={{ color: '#555', marginTop: '5px' }}>+92 3174073341</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontWeight: 'bold' }}>📧 Email</p>
              <p style={{ color: '#555', marginTop: '5px' }}>inowbatter007@gmail.com</p>
            </div>
            <a href="https://wa.me/923174073341" target="_blank" style={{ textDecoration: 'none' }}>
              <div style={{ marginTop: '30px', background: '#25D366', color: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center', cursor: 'pointer' }}>
                <p style={{ fontWeight: 'bold' }}>💬 Chat on WhatsApp</p>
              </div>
            </a>
          </div>
          <div style={{ flex: 1.5 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <input required placeholder="First Name" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input required placeholder="Last Name" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>
              <input required type="email" placeholder="Your Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <input required placeholder="Subject" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
              <textarea required placeholder="Your Message" rows={5} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}></textarea>
              <button type="submit" style={{ padding: '14px', background: 'black', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                {done ? '✅ Message Sent!' : 'Send Message'}
              </button>
              {done && <p style={{color: 'green', textAlign: 'center', fontWeight: 'bold'}}>Shukriya! Message mil gaya hai.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}