import Link from "next/link";
export default function Events(){
 const events=[
  ["28 Sep 2026","Welcome & Orientation Day","Community"],
  ["15 Oct 2026","Annual Science Exhibition","Academic"],
  ["06 Nov 2026","Inter-School Sports Day","Sports"]
 ];
 return <main><div className="top"><div className="container topin"><span>Northbridge Academy</span><span>Events</span></div></div><div className="navwrap"><div className="container nav"><Link href="/" className="brand"><span className="mark">NA</span><b>Northbridge Academy</b></Link><Link href="/" className="btn outline">← Home</Link></div></div><section><div className="container"><div className="label">Calendar</div><h1 className="title">School Events</h1><p className="muted">This public page is designed to be connected to the admin Events CMS.</p><div className="events">{events.map(e=><article className="card" key={e[1]}><div className="date">{e[0]} · {e[2]}</div><h2>{e[1]}</h2><p className="muted">Event details, location and registration information can be managed from the school dashboard.</p></article>)}</div></div></section></main>
}