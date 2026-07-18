"use client"
export default function Contact(){
 return(
 <section style={{padding:"80px 6%", maxWidth:"600px", margin:"auto"}}>
  <h1 style={{fontSize:"44px", fontWeight:800}}>Contact Us</h1>
  <p style={{color:"#64748B"}}>Message karo, 2 hours me reply ayega.</p>
  <form action="https://formsubmit.co/iknowbatter007@gmail.com" method="POST" style={{marginTop:"24px", background:"#fff", padding:"24px", borderRadius:"16px", border:"1px solid #E2E8F0"}}>
   <input type="hidden" name="_captcha" value="false"/>
   <input name="name" required placeholder="Your Name" style={{width:"100%", padding:"12px", borderRadius:"8px", border:"1px solid #ddd", marginBottom:"10px"}}/>
   <input name="email" type="email" required placeholder="Email" style={{width:"100%", padding:"12px", borderRadius:"8px", border:"1px solid #ddd", marginBottom:"10px"}}/>
   <textarea name="message" required placeholder="Your Message" style={{width:"100%", padding:"12px", borderRadius:"8px", border:"1px solid #ddd", height:"100px"}}></textarea>
   <button style={{width:"100%", marginTop:"10px", padding:"14px" border:"none", borderRadius:"8px", fontWeight:700}}>Send Message →</button>
  </form>
 </section>
 )
}
