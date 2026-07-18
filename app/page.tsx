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
            <p style={{fontSize:"18px", color:"#94A3B8", marginTop:"20px", lineHeight:"1.6"}}>From SEO to Google Ads, we turn your business into a
