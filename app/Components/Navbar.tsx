"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      background: 'black',
      color: 'white',
      position: 'relative'
    }}>
      <Link href="/" style={{color: 'white', textDecoration: 'none'}}>
        <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>MyBrand</h2>
      </Link>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        
        {/* Home Dropdown */}
        <div style={{ position: 'relative' }}>
          <p 
            onClick={() => setOpen(!open)}
            style={{ color: 'white', cursor: 'pointer', margin: 0, userSelect: 'none' }}
          >
            Home {open ? '▲' : '▼'}
          </p>
          
          {open && (
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              background: 'white',
              color: 'black',
              borderRadius: '8px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              minWidth: '180px',
              overflow: 'hidden',
              zIndex: 100
            }}>
              <Link onClick={() => setOpen(false)} href="/fast-speed" style={{ display: 'block', padding: '12px 15px', textDecoration: 'none', color: 'black', borderBottom: '1px solid #eee' }}>⚡ Fast Speed</Link>
              <Link onClick={() => setOpen(false)} href="/modern-design" style={{ display: 'block', padding: '12px 15px', textDecoration: 'none', color: 'black', borderBottom: '1px solid #eee' }}>🎨 Modern Design</Link>
              <Link onClick={() => setOpen(false)} href="/seo-ready" style={{ display: 'block', padding: '12px 15px', textDecoration: 'none', color: 'black' }}>🚀 SEO Ready</Link>
            </div>
          )}
        </div>

        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </div>
  )
}