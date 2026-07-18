export default function Home(){
  return(
    <main>
      {/* HERO - Main Page ka apna content */}
      <section style={{padding:"100px 6%", background:"linear-gradient(135deg,#0F172A,#1E293B)", color:"#fff"}}>
        <div style={{maxWidth:"1200px", margin:"auto"}}>
          <div style={{display:"inline-block", padding:"6px 14px", background:"rgba(245,158,11,0.15)", color:"#F59E0B", borderRadius:"20px", fontSize:"12px", fontWeight:700}}>PAKISTAN'S GROWTH AGENCY</div>
          <h1 style={{fontSize:"60px", lineHeight:"1.1", marginTop:"20px", fontWeight:800}}>We Grow Brands<br/><span style={{color:"#2563EB"}}>That Scale</span></h1>
          <p style={{color:"#94A3B8", fontSize:"18px", maxWidth:"500px", marginTop:"16px"}}>From SEO to Google Ads, we help Pakistani businesses from DG Khan to Lahore scale with data-driven marketing.</p>
          <div style={{display:"flex", gap:"12px", marginTop:"30px"}}>
            <a href="/contact" style={{background:"#2563EB", color:"#fff", padding:"14px 28px", borderRadius:"12px", textDecoration:"none", fontWeight:700}}>Book Free Audit</a>
            <a href="/portfolio" style={{border:"1px solid #334155", color:"#fff", padding:"14px 28px", borderRadius:"12px", textDecoration:"none"}}>View Work</a>
          </div>
        </div>
      </section>

      <section style={{padding:"80px 6%", textAlign:"center"}}>
        <h2 style={{fontSize:"36px", fontWeight:800}}>Why GrowthSpark?</h2>
        <p style={{color:"#64748B", maxWidth:"600px", margin:"10px auto 0"}}>Professional, Modern, Results-Driven.</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px", maxWidth:"1000px", margin:"40px auto 0"}}>
          <div style={{border:"1px solid #E2E8F0", padding:"24px", borderRadius:"16px"}}><b>50+ Clients</b><br/>Across Pakistan</div>
          <div style={{border:"1px solid #E2E8F0", padding:"24px", borderRadius:"16px", background:"#2563EB", color:"#fff"}}><b>340% ROI</b><br/>Average Growth</div>
          <div style={{border:"1px solid #E2E8F0", padding:"24px", borderRadius:"16px"}}><b>24/7 Support</b><br/>Lahore Based</div>
        </div>
      </section>
    </main>
  )
}
