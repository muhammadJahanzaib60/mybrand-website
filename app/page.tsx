
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MyBrand. - Define Your Style</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',sans-serif;background:#0A0A0A;color:#F5F5F0}
  .serif{font-family:'Playfair Display',serif}
  .topbar{background:#F5F5F0;color:#0A0A0A;text-align:center;padding:10px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase}
  header{display:flex;justify-content:space-between;align-items:center;padding:22px 6%;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;background:rgba(10,10,10,0.9);backdrop-filter:blur(12px);z-index:10}
  .logo{font-family:'Playfair Display',serif;font-size:26px;font-weight:700}
  .btn{padding:14px 28px;border-radius:100px;border:none;cursor:pointer;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;transition:0.2s}
  .btn-white{background:#fff;color:#000}.btn-white:hover{background:#eee}
  .btn-dark{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.2)}
  .hero{padding:60px 6%;display:grid;grid-template-columns:1.2fr 0.8fr;gap:40px;align-items:center;max-width:1400px;margin:auto}
  .hero h1{font-size:64px;line-height:0.95;letter-spacing:-0.03em;margin-bottom:20px}
  .hero p{color:rgba(255,255,255,0.6);font-size:16px;line-height:1.6;max-width:440px;margin-bottom:32px}
  .grid{padding:40px 6%;max-width:1400px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .card{background:#151515;border:1px solid rgba(255,255,255,0.07);border-radius:24px;overflow:hidden;transition:0.3s}
  .card:hover{transform:translateY(-4px)}
  .imgbox{height:280px;display:grid;place-items:center;font-size:40px;background:linear-gradient(180deg,#F5F1E8 0%, #E8E0D0 100%);color:#000}
  .card.dark .imgbox{background:linear-gradient(180deg,#222 0%, #0A0A0A 100%);color:#fff}
  .info{padding:18px}
  .info h3{font-size:15px;margin-bottom:4px}
  .info small{color:rgba(255,255,255,0.5);font-size:11px}
  .price{display:flex;justify-content:space-between;align-items:center;margin-top:14px}
  .price b{font-size:14px}
  .add{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,0.15);background:transparent;color:#fff;cursor:pointer}
  /* CONTACT FORM */
  .contact-wrap{padding:80px 6%;max-width:1100px;margin:60px auto 0;background:#F5F5F0;border-radius:32px;color:#0A0A0A;display:grid;grid-template-columns:0.9fr 1.1fr;gap:50px}
  .contact-wrap h2{font-size:42px;line-height:0.95}
  .contact-wrap p{margin:16px 0 0;color:rgba(0,0,0,0.6);line-height:1.6}
  .field{width:100%;padding:14px 18px;border-radius:14px;border:1px solid rgba(0,0,0,0.12);background:white;margin-top:12px;font-size:14px;outline:none}
  .field:focus{border-color:#0A0A0A}
  textarea.field{height:120px;resize:none}
  .send-btn{margin-top:16px;width:100%;padding:16px;background:#0A0A0A;color:white;border-radius:100px;border:none;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer}
  .send-btn:hover{background:#000}
  .whatsapp{position:fixed;bottom:20px;right:20px;background:#25D366;color:#000;padding:14px 20px;border-radius:100px;text-decoration:none;font-weight:700;display:flex;align-items:center;gap:8px;z-index:20}
  footer{margin-top:80px;padding:40px 6%;border-top:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);font-size:12px;text-align:center}
  @media(max-width:900px){.hero{grid-template-columns:1fr}.hero h1{font-size:44px}.grid{grid-template-columns:1fr 1fr}.contact-wrap{grid-template-columns:1fr}}
  @media(max-width:600px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="topbar">Free delivery on orders above Rs. 5000 • Cash on Delivery Available</div>
<header><div class="logo">MyBrand.</div><button class="btn btn-white" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Contact Us</button></header>

<section class="hero">
  <div>
    <h1 class="serif">Define<br>Your Style<br>— Own It.</h1>
    <p>Premium menswear, handcrafted in Lahore. From everyday kurtas to Eid luxury edits. Made for Pakistan, worn with pride.</p>
    <div style="display:flex;gap:12px">
      <button class="btn btn-white" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">Shop Now</button>
      <button class="btn btn-dark">Lookbook</button>
    </div>
  </div>
  <div style="background:#F5F1E8;border-radius:32px;height:480px;display:grid;place-items:center;color:#000;font-size:18px" class="serif">
    Premium<br>Collection<br>Photo Here
  </div>
</section>

<div id="shop" class="grid">
  <div class="card"><div class="imgbox">👘</div><div class="info"><h3>Premium Kurta</h3><small>Handcrafted Cotton • Summer '24</small><div class="price"><b>Rs. 4,499</b><button class="add" onclick="order('Premium Kurta')">+</button></div></div></div>
  <div class="card"><div class="imgbox">👕</div><div class="info"><h3>Classic Shalwar</h3><small>Washed Linen Blend</small><div class="price"><b>Rs. 2,499</b><button class="add" onclick="order('Classic Shalwar')">+</button></div></div></div>
  <div class="card dark"><div class="imgbox">🧥</div><div class="info"><h3>Designer Waistcoat</h3><small>Jamawar Weave • Formal</small><div class="price"><b>Rs. 6,999</b><button class="add" onclick="order('Designer Waistcoat')">+</button></div></div></div>
  <div class="card"><div class="imgbox">✨</div><div class="info"><h3>Eid Collection</h3><small>Embroidered Set • Limited</small><div class="price"><b>Rs. 12,499</b><button class="add" onclick="order('Eid Collection')">+</button></div></div></div>
</div>

<!-- WORKING CONTACT FORM - BACKEND CONNECTED -->
<div id="contact" class="contact-wrap">
  <div>
    <h2 class="serif">Let's Talk<br>Your Style.</h2>
    <p>Have a question about sizing, delivery in DG Khan / Lahore, or bulk orders? Send us a message — we reply within 2 hours on WhatsApp & Email.</p>
    <div style="margin-top:32px;display:flex;flex-direction:column;gap:12px;font-size:14px">
      <div>📍 MM Alam Road, Lahore, Pakistan</div>
      <div>📧 iknowbatter007@gmail.com</div>
      <div>💬 WhatsApp: +92 300 0000000</div>
    </div>
  </div>
  <form action="https://formsubmit.co/iknowbatter007@gmail.com" method="POST">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_subject" value="New Message from MyBrand Website!">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_next" value="https://mybrand-website.vercel.app/">
    <input class="field" type="text" name="name" placeholder="Your Name" required>
    <input class="field" type="email" name="email" placeholder="Your Email Address" required>
    <input class="field" type="text" name="phone" placeholder="WhatsApp Number (optional)">
    <textarea class="field" name="message" placeholder="Write your message here..." required></textarea>
    <button class="send-btn" type="submit">Send Message →</button>
    <p style="font-size:11px;color:rgba(0,0,0,0.5);margin-top:10px;text-align:center">Powered by FormSubmit • Secure & Free • Messages go to iknowbatter007@gmail.com</p>
  </form>
</div>

<a class="whatsapp" href="https://wa.me/923000000000" target="_blank">💬 WhatsApp</a>
<footer>© 2026 MyBrand. All rights reserved • Lahore, Pakistan • Contact: iknowbatter007@gmail.com</footer>

<script>
function order(name){
  let wa = `https://wa.me/923000000000?text=Salam! I want to order ${name} from MyBrand. website: mybrand-website.vercel.app`;
  window.open(wa,'_blank');
}
</script>
</body>
</html>
