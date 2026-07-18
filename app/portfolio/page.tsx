export default function Portfolio(){
 return(
 <main style={{padding:"80px 6%", fontFamily:"sans-serif"}}>
  <a href="/">← Back to Home</a>
  <h1 style={{fontSize:"36px", marginTop:"20px", color:"#0F172A"}}>Portfolio</h1>
  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginTop:"30px"}}>
   <div style={{background:"#0F172A", color:"#fff", padding:"24px", borderRadius:"16px"}}><b>MyBrand Store</b><br/>E-commerce - 3x Sales Growth</div>
   <div style={{background:"#2563EB", color:"#fff", padding:"24px", borderRadius:"16px"}}><b>DG Khan Motors</b><br/>SEO - #1 Ranking</div>
   <div style={{background:"#F59E0B", color:"#000", padding:"24px", borderRadius:"16px"}}><b>Lahore Fitness</b><br/>Social Media - 10k Followers</div>
   <div style={{background:"#F8FAFC", border:"1px solid #E2E8F0", padding:"24px", borderRadius:"16px"}}><b>StartupX</b><br/>Google Ads - 50 Leads/Week</div>
  </div>
 </main>
 )
}
