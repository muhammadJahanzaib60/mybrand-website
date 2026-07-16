"use client";
import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{background:"#0A0A0A", color:"#F5F5F0", minHeight:"100vh", fontFamily:"sans-serif"}}>
      
      {/* TOP BAR */}
      <div style={{background:"#F5F5F0", color:"#000", textAlign:"center", padding:"10px", fontSize:"12px"}}>
        Free Delivery on Rs. 5000+ • COD Available All Pakistan
      </div>

      {/* HEADER */}
      <header style={{display:"flex", justifyContent:"space-between", padding:"20px 6%", borderBottom:"1px solid #222"}}>
        <h1 style={{fontSize:"26px", fontWeight:"800"}}>MyBrand.</h1>
        <a href="#contact" style={{background:"#fff", color:"#000", padding:"12px 24px", borderRadius:"30px", textDecoration:"none", fontWeight:"700"}}>Contact</a>
      </header>

      {/* HERO */}
      <section style={{padding:"80px 6%", textAlign:"center"}}>
        <h1 style={{fontSize:"56px", fontWeight:"800", lineHeight:"0.9"}}>Define Your<br/>Style — Own It.</h1>
        <p style={{color:"#888", marginTop:"20px"}}>Premium menswear handcrafted in Lahore</p>
      </section>

      {/* CONTACT FORM - BACKEND WORKING */}
      <section id="contact" style={{maxWidth:"900px", margin:"40px auto", background:"#F5F5F0", borderRadius:"32px", padding:"40px", color:"#000", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"30px"}}>
        <div>
          <h2 style={{fontSize:"36px", fontWeight:"800"}}>Let's Talk<br/>Your Style.</h2>
          <p style={{color:"#666", marginTop:"15px"}}>Message bhejo, jawab 2 ghante me aayega.</p>
          <p style={{marginTop:"20px"}}>📧 iknowbatter007@gmail.com</p>
        </div>

        <form action="https://formsubmit.co/iknowbatter007@gmail.com" method="POST" onSubmit={()=>setSent(true)}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New MyBrand Message!" />
          <input type="text" name="name" placeholder="Your Name" required style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #ccc", marginBottom:"12px"}}/>
          <input type="email" name="email" placeholder="Your Email" required style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #ccc", marginBottom:"12px"}}/>
          <textarea name="message" placeholder="Your Message" required style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #ccc", height:"110px", marginBottom:"12px"}}></textarea>
          <button type="submit" style={{width:"100%", padding:"14px", background:"#000", color:"#fff", borderRadius:"30px", border:"none", fontWeight:"700", cursor:"pointer"}}>
            {sent ? "Sending..." : "Send Message →"}
          </button>
          <p style={{fontSize:"11px", color:"#888", marginTop:"8px", textAlign:"center"}}>Message will come to iknowbatter007@gmail.com</p>
        </form>
      </section>

      <footer style={{textAlign:"center", padding:"40px", color:"#666", fontSize:"12px"}}>© 2026 MyBrand • Lahore</footer>
    </main>
  );
}
