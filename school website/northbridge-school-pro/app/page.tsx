import Link from "next/link";
import { ShieldCheck, Users, GraduationCap, CalendarDays, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const events=[
 {date:"28 Sep 2026",title:"Welcome & Orientation Day",cat:"Community",place:"Main Campus",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"},
 {date:"15 Oct 2026",title:"Annual Science Exhibition",cat:"Academic",place:"Science Block",img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"},
 {date:"06 Nov 2026",title:"Inter-School Sports Day",cat:"Sports",place:"Sports Ground",img:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"}
];

export default function Home(){
 return <main>
  <div className="top"><div className="container topin"><span>Admissions: +92 300 1234567</span><span>Mon–Fri · 8:00 AM–4:00 PM</span></div></div>
  <header className="navwrap"><div className="container nav">
   <Link href="/" className="brand"><span className="mark">NA</span><span><b>Northbridge Academy</b><small>Excellence · Equality · Integrity</small></span></Link>
   <nav className="links"><a href="#about">About</a><a href="#academics">Academics</a><a href="#safety">Safety & Equality</a><a href="#events">Events</a><a href="#careers">Careers</a><a href="#contact">Contact</a></nav>
   <a className="btn gold" href="#admissions">Admissions</a><button className="menu">☰</button>
  </div></header>

  <section className="hero"><div className="container">
   <div className="eyebrow">A school built around every student</div>
   <h1>A place to learn.<br/>A place to belong.</h1>
   <p>Strong academics, thoughtful teaching and a secure, respectful environment where every student is encouraged to discover their strengths and prepare for the future.</p>
   <div className="actions"><a className="btn gold" href="#admissions">Explore Admissions <ArrowRight size={16}/></a><a className="btn outline" href="#about">Discover Our School</a></div>
   <div className="stats"><div className="stat"><b>25+</b>Years of experience</div><div className="stat"><b>98%</b>Parent satisfaction</div><div className="stat"><b>1:18</b>Learning approach</div><div className="stat"><b>100%</b>Respect for every student</div></div>
  </div></section>

  <section id="about"><div className="container about"><div className="photo"/><div><div className="label">About our school</div><h2 className="title">Education with purpose, character and care.</h2><p className="muted">At Northbridge Academy, education is about more than examinations. We want students to become confident, curious and responsible people who can contribute positively to their communities.</p><p className="muted">Our teachers work closely with students and families so that questions are welcomed, effort is valued and every learner has an opportunity to progress.</p><div className="grid3" style={{marginTop:25}}><div className="card"><b>Academic</b><p className="muted">Strong foundations and ambitious learning.</p></div><div className="card"><b>Character</b><p className="muted">Integrity, responsibility and confidence.</p></div></div></div></div></section>

  <section className="cream" id="academics"><div className="container"><div className="head"><div className="label">Academic programme</div><h2 className="title">Learning designed for every stage.</h2><p className="muted">Academic knowledge is combined with communication, creativity, problem solving and personal development.</p></div><div className="grid3">{["Foundation","Primary School","Secondary School"].map((x,i)=><div className="card" key={x}><div className="icon"><GraduationCap/></div><small>{["Early Years","Primary","Secondary"][i]}</small><h3>{x}</h3><p className="muted">A supportive programme designed to develop knowledge, confidence and independence.</p></div>)}</div></div></section>

  <section className="dark" id="safety"><div className="container security"><div><div className="label">Safety & equality</div><h2 className="title">A school where students can learn with confidence.</h2><p className="muted">Student wellbeing is an essential part of education. We use clear procedures, responsible supervision and respectful communication to create a positive environment.</p><div className="points"><div className="point"><ShieldCheck/> <span><b>Responsible supervision</b><br/><small>Clear supervision procedures across school activities and shared spaces.</small></span></div><div className="point"><Users/> <span><b>Equal opportunity</b><br/><small>Students are treated fairly and encouraged to participate.</small></span></div><div className="point"><ShieldCheck/> <span><b>Respect & anti-bullying culture</b><br/><small>Students are encouraged to speak up and seek support.</small></span></div></div></div><div className="securityphoto"/></div></section>

  <section id="events"><div className="container"><div className="head"><div className="label">What's happening</div><h2 className="title">School events.</h2><p className="muted">Important dates, activities and community events.</p></div><div className="events">{events.map(e=><article className="event" key={e.title}><div className="eventimg" style={{backgroundImage:`url("${e.img}")`}}/><div className="eventbody"><div className="date">{e.date} · {e.cat}</div><h3>{e.title}</h3><p className="muted"><MapPin size={14} style={{verticalAlign:"middle"}}/> {e.place}</p></div></article>)}</div><div style={{marginTop:28}}><Link className="btn primary" href="/events">View all events <ArrowRight size={16}/></Link></div></div></section>

  <section className="cream"><div className="container"><div className="head"><div className="label">Parent voices</div><h2 className="title">What our families say.</h2></div><div className="grid3">{[
   ["Ayesha Khan","Parent of Grade 7 student","The teachers have been incredibly supportive. We appreciate how seriously the school takes academics and student wellbeing."],
   ["Muhammad Ahmed","Parent of Grade 5 student","Communication with the school has been excellent. Our child feels comfortable asking questions."],
   ["Sara Malik","Parent of Grade 8 student","We value the school's emphasis on respect and equal treatment. The learning environment has been very positive."]
  ].map(r=><div className="card" key={r[0]}><div style={{color:"var(--gold)",letterSpacing:3}}>★★★★★</div><p>“{r[2]}”</p><b>{r[0]}</b><small className="muted" style={{display:"block"}}>{r[1]}</small></div>)}</div></div></section>

  <section id="careers"><div className="container"><div className="head"><div className="label">Join our faculty</div><h2 className="title">Great schools are built by great teachers.</h2><p className="muted">Passionate educators can submit an application through our secure careers system.</p></div><Link className="btn primary" href="/careers">Teacher application <ArrowRight size={16}/></Link></div></section>

  <section id="admissions" className="cream"><div className="container"><div className="head"><div className="label">Admissions</div><h2 className="title">Let's begin your child's next chapter.</h2><p className="muted">Our admissions team can guide your family through availability, requirements and the application process.</p></div><div className="grid3"><div className="card"><div className="icon">01</div><h3>Enquire</h3><p className="muted">Tell us which year group you're interested in.</p></div><div className="card"><div className="icon">02</div><h3>Visit</h3><p className="muted">Arrange a campus visit and meet our team.</p></div><div className="card"><div className="icon">03</div><h3>Apply</h3><p className="muted">Complete the admissions process with our team.</p></div></div></div></section>

  <section id="contact"><div className="container"><div className="head"><div className="label">Get in touch</div><h2 className="title">We're here to help.</h2></div><div className="contact"><div className="contactlist"><div className="contactitem"><Phone/> <b>Admissions</b><br/>+92 300 1234567</div><div className="contactitem"><Mail/> <b>Email</b><br/>admissions@northbridge.edu</div><div className="contactitem"><MapPin/> <b>Address</b><br/>123 Education Avenue, Lahore, Pakistan</div></div><div className="map"><a className="btn gold" href="https://www.google.com/maps" target="_blank">Open location in Google Maps</a></div></div></div></section>

  <footer><div className="container"><div className="footgrid"><div><div className="brand"><span className="mark">NA</span><b>Northbridge Academy</b></div><p style={{color:"#aebdca"}}>A learning community committed to academic growth, student wellbeing and equal opportunity.</p></div><div><h3>School</h3><div className="footlinks"><a href="#about">About</a><a href="#academics">Academics</a><a href="#safety">Safety & Equality</a></div></div><div><h3>Admissions</h3><div className="footlinks"><a href="#admissions">Admissions</a><a href="/careers">Careers</a><a href="#contact">Contact</a></div></div><div><h3>Contact</h3><div className="footlinks"><span>+92 300 1234567</span><span>admissions@northbridge.edu</span><span>Lahore, Pakistan</span></div></div></div><div className="copy">© {new Date().getFullYear()} Northbridge Academy. All rights reserved.</div></div></footer>
 </main>
}