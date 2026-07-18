import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:"Inter, sans-serif"}}>
        {/* NAVBAR - HAR PAGE PAR AYEGA */}
        <nav style={{position:"sticky", top:0, zIndex:100, background:"#0F172A", padding:"18px 6%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <a href="/" style={{textDecoration:"none", color:"#fff", fontWeight:800, fontSize:"22px"}}>GrowthSpark<span style={{color:"#2563EB"}}>.</span></a>
          <div style={{display:"flex", gap:"28px", alignItems:"center"}}>
            <a href="/" style={{color:"#fff", textDecoration:"none", fontSize:"14px"}}>Home</a>
            <a href="/about" style={{color:"#94A3B8", textDecoration:"none", fontSize:"14px"}}>About</a>
            <a href="/services" style={{color:"#94A3B8", textDecoration:"none", fontSize:"14px"}}>Services</a>
            <a href="/portfolio" style={{color:"#94A3B8", textDecoration:"none", fontSize:"14px"}}>Portfolio</a>
            <a href="/contact" style={{background:"#2563EB", color:"#fff", padding:"10px 20px", borderRadius:"10px", textDecoration:"none", fontSize:"14px", fontWeight:700}}>Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
