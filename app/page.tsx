"use client";
import { useEffect, useRef, useState } from "react";

export default function GrowthSpark() {
  const [visible, setVisible] = useState<any>({});
  const refs = {
    home: useRef(null), about: useRef(null), services: useRef(null), portfolio: useRef(null), contact: useRef(null)
  };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && setVisible(v => ({...v, [e.target.id]: true})));
    }, { threshold: 0.2 });
    Object.values(refs).forEach(r => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const services = [
    { title:"SEO", desc:"Rank #1 on Google with technical + content SEO that brings real traffic." },
    { title:"Social Media Marketing", desc:"Grow your brand on Instagram, Facebook, TikTok with viral content." },
    { title:"Google Ads", desc:"High-ROI PPC campaigns. We spend your budget like it's our own money." },
    { title:"Web Development", desc:"Fast, modern Next.js websites that convert visitors into customers." },
  ];

  const portfolio = [
    { name:"MyBrand Ecom", result:"+340% Sales in 3 Months", type:"Web Dev + Ads" },
    { name:"Lahore Fitness", result:"10k Followers in 60 Days", type:"Social Media" },
    { name:"DG Khan Motors", result:"#1 Google Ranking", type:"SEO" },
    { name:"StartupX", result:"50 Leads/Week from Ads", type:"Google Ads" },
  ];

  const fade = (id:string) => ({
    opacity: visible[id]? 1 : 0,
    transform: visible[id]? 'translateY(0)' : 'translateY(40px)',
    transition: '0.8s ease-out'
  });

  return (
    <main style={{background:"#fff", color:"#0F172A", fontFamily:"Inter, sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
        html{scroll-behavior:smooth}
       .jakarta{font-family:'Plus Jakarta Sans', sans-serif}
       .card:hover{transform:translateY(-8px); box-shadow:0 20px 40px rgba(37,99,235,0.15)}
       .btn:hover{transform:scale(1.05)}
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky", top:0, zIndex:50, background:"rgba(255,255,255,0.9)", backdropFilter:"blur(12px)", borderBottom:"1px solid #E5E7EB"}}>
        <div style={{maxWidth:"1200px", margin:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 6%"}}>
          <div className="jakarta" style={{fontSize:"22px", fontWeight:800, color:"#2563EB"}}>GrowthSpark<span style={{color:"#0F172A"}}>.</span></div>
          <div style={{display:"flex", gap:"28px", fontSize:"14px", fontWeight:500}}>
            <a href="#home" style={{textDecoration:"none", color:"#0F172A"}}>Home</a>
            <a href="#about" style={{textDecoration:"none", color:"#64748B"}}>About</a>
            <a href="#services" style={{textDecoration:"none", color:"#64748B"}}>Services</a>
            <a href="#portfolio" style={{textDecoration:"none", color:"#64748B"}}>Portfolio</a>
            <a href="#contact" style={{textDecoration:"none", color:"#64748B"}}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" ref={refs.home} style={{...fade('home'), padding:"120px 6%", background:"linear-gradient(135deg, #0F172A 0%, #1E293B 100%)", color:"#fff"}}>
        <div style={{maxWidth:"1200px", margin:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center"}}>
          <div>
            <div style={{display:"inline-block", padding:"6px 14px", background:"rgba(245,158,11,0.1)", color:"#F59E0B", borderRadius:"30px", fontSize:"12px", fontWeight:600, marginBottom:"20px"}}>Pakistan's Growth Partner</div>
            <h1 className="jakarta" style={{fontSize:"56px", lineHeight:"1.1", fontWeight:800}}>We Grow Brands<br/>That <span style={{color:"#2563EB"}}>Scale</span></h1>
            <p style={{fontSize:"18px", color:"#94A3B8", marginTop:"20px", lineHeight:"1.6"}}>From SEO to Google Ads, we turn your business into a lead machine. Based in Lahore, serving Pakistan.</p>
            <div style={{display:"flex", gap:"12px", marginTop:"32px"}}>
              <a href="#contact" className="btn" style={{padding:"16px 32px", background:"#2563EB", color:"#fff", borderRadius:"12px", textDecoration:"none", fontWeight:700}}>Book Free Call</a>
              <a href="#portfolio" className="btn" style={{padding:"16px 32px", background:"transparent", border:"1px solid #334155", color:"#fff", borderRadius:"12px", textDecoration:"none", fontWeight:700}}>View Work</a>
            </div>
            <div style={{display:"flex", gap:"40px", marginTop:"50px"}}>
              <div><b style={{fontSize:"32px"}}>50+</b><br/><small style={{color:"#94A3B8"}}>Clients</small></div>
              <div><b style={{fontSize:"32px"}}>340%</b><br/><small style={{color:"#94A3B8"}}>Avg ROI</small></div>
              <div><b style={{fontSize:"32px"}}>2M+</b><br/><small style={{color:"#94A3B8"}}>Reach</small></div>
            </div>
          </div>
          <div style={{background:"#fff", borderRadius:"24px", height:"420px", display:"grid", placeItems:"center", boxShadow:"0 40px 80px rgba(0,0,0,0.3)"}}>
            <div style={{textAlign:"center", color:"#0F172A"}}>
              <div style={{fontSize:"60px"}}>📈</div>
              <div style={{fontWeight:700, marginTop:"12px"}}>Growth Dashboard</div>
              <div style={{fontSize:"13px", color:"#64748B", marginTop:"6px"}}>Real-time Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={refs.about} style={{...fade('about'), padding:"100px 6%", background:"#F8FAFC"}}>
        <div style={{maxWidth:"1200px", margin:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center"}}>
          <div>
            <h2 className="jakarta" style={{fontSize:"42px", fontWeight:800}}>Built to Make You<br/>Stand Out Online</h2>
            <p style={{color:"#64748B", marginTop:"16px", fontSize:"16px", lineHeight:"1.7"}}>GrowthSpark Digital is a Lahore-based agency helping Pakistani businesses grow with data-driven marketing. We don't do fluff. We do results.</p>
            <div style={{marginTop:"24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px"}}>
              <div style={{background:"#fff", padding:"20px", borderRadius:"16px", border:"1px solid #E2E8F0"}}><b>100%</b><br/><small>Transparency</small></div>
              <div style={{background:"#fff", padding:"20px", borderRadius:"16px", border:"1px solid #E2E8F0"}}><b>24/7</b><br/><small>Support</small></div>
            </div>
          </div>
          <div style={{background:"#0F172A", color:"#fff", borderRadius:"24px", padding:"40px"}}>
            <div style={{fontSize:"14px", color:"#94A3B8", marginBottom:"20px"}}>Our Mission</div>
            <div style={{fontSize:"20px", lineHeight:"1.6"}}>"Help 1000 Pakistani brands scale from 0 to 1M with ethical marketing & tech."</div>
            <div style={{marginTop:"30px", color:"#F59E0B", fontWeight:700}}>— Muhammad Jahanzaib, Founder</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={refs.services} style={{...fade('services'), padding:"100px 6%"}}>
        <div style={{maxWidth:"1200px", margin:"auto", textAlign:"center"}}>
          <h2 className="jakarta" style={{fontSize:"42px", fontWeight:800}}>Services That Drive Growth</h2>
          <p style={{color:"#64748B", marginTop:"12px", maxWidth:"600px", margin:"12px auto 0"}}>Everything you need to dominate your niche online.</p>
          <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"24px", marginTop:"50px"}}>
            {services.map((s,i)=>(
              <div key={i} className="card" style={{background:"#fff", padding:"32px", borderRadius:"20px", border:"1px solid #E2E8F0", textAlign:"left", transition:"0.3s"}}>
                <div style={{width:"56px", height:"56px", background:"#2563EB", borderRadius:"16px", display:"grid", placeItems:"center", color:"#fff", fontSize:"24px", marginBottom:"20px"}}>{i+1}</div>
                <h3 style={{fontSize:"18px", fontWeight:700, marginBottom:"8px"}}>{s.title}</h3>
                <p style={{color:"#64748B", fontSize:"14px", lineHeight:"1.6"}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" ref={refs.portfolio} style={{...fade('portfolio'), padding:"100px 6%", background:"#0F172A", color:"#fff"}}>
        <div style={{maxWidth:"1200px", margin:"auto"}}>
          <h2 className="jakarta" style={{fontSize:"42px", fontWeight:800, textAlign:"center"}}>Our Recent Work</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"24px", marginTop:"50px"}}>
            {portfolio.map((p,i)=>(
              <div key={i} style={{background:"#1E293B", padding:"32px", borderRadius:"20px", border:"1px solid #334155"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px"}}>
                  <h3 style={{fontSize:"20px", fontWeight:700}}>{p.name}</h3>
                  <span style={{fontSize:"12px", padding:"6px 12px", background:"#F59E0B", color:"#000", borderRadius:"20px", fontWeight:600}}>{p.type}</span>
                </div>
                <div style={{fontSize:"28px", fontWeight:800, color:"#2563EB"}}>{p.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={refs.contact} style={{...fade('contact'), padding:"100px 6%"}}>
        <div style={{maxWidth:"900px", margin:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px"}}>
          <div>
            <h2 className="jakarta" style={{fontSize:"42px", fontWeight:800}}>Let's Talk Growth</h2>
            <p style={{color:"#64748B", marginTop:"12px"}}>Book a free 15-min strategy call. We'll audit your business & show you where you're losing money.</p>
            <div style={{marginTop:"30px", fontSize:"15px", lineHeight:"2"}}>
              📍 Lahore, Pakistan<br/>📧 iknowbatter007@gmail.com<br/>💬 +92 300 0000
            </div>
          </div>
          <form action="https://formsubmit.co/iknowbatter007@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Lead: GrowthSpark Digital" />
            <input name="name" required placeholder="Your Name" style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #D1D5DB", marginBottom:"12px"}}/>
            <input name="email" type="email" required placeholder="Your Email" style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #D1D5DB", marginBottom:"12px"}}/>
            <textarea name="message" required placeholder="Tell us about your business..." style={{width:"100%", padding:"14px", borderRadius:"12px", border:"1px solid #D1D5DB", height:"120px", marginBottom:"12px"}}></textarea>
            <button type="submit" style={{width:"100%", padding:"16px", background:"#2563EB", color:"#fff", borderRadius:"12px", border:"none", fontWeight:700, cursor:"pointer", fontSize:"15px"}}>Get Free Audit →</button>
          </form>
        </div>
      </section>

      <footer style={{background:"#0F172A", color:"#94A3B8", textAlign:"center", padding:"40px", fontSize:"13px"}}>
        © 2026 GrowthSpark Digital • All Rights Reserved • Lahore, Pakistan
      </footer>
    </main>
  );
}
