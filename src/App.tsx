import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import { Hero, About, Capabilities, Skills, Experience, Education, Credentials, Projects, Awards, Resume, Contact, Footer } from './sections/Sections';
const links=[['About','about'],['Capabilities','capabilities'],['Experience','experience'],['Education','education'],['Credentials','credentials'],['Contact','contact']];
function Loader(){return <motion.div className="loader" initial={{opacity:1}} animate={{opacity:0,pointerEvents:'none'}} transition={{duration:.65,delay:1.15}}><div className="loader-mark">RK<span>.</span></div><div className="loader-line"><motion.span initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.9,ease:'easeInOut'}}/></div><span className="loader-caption">A STUDY IN PRECISION</span></motion.div>}
export default function App(){const [menu,setMenu]=useState(false);const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const lenis=new Lenis({duration:1.15,smoothWheel:true});let frame=0;const raf=(time:number)=>{lenis.raf(time);frame=requestAnimationFrame(raf)};frame=requestAnimationFrame(raf);const onScroll=()=>setScrolled(window.scrollY>32);window.addEventListener('scroll',onScroll);return()=>{cancelAnimationFrame(frame);lenis.destroy();window.removeEventListener('scroll',onScroll)}},[]);
 return <><Loader/><Cursor/><header className={`navbar ${scrolled?'navbar-scrolled':''}`}><a href="#home" className="nav-brand">RK<span>.</span></a><nav className="desktop-nav">{links.map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header><AnimatePresence>{menu&&<motion.div className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}<ArrowUpRight size={17}/></a>)}</motion.div>}</AnimatePresence><main><Hero/><About/><Capabilities/><Skills/><Experience/><Education/><Credentials/><Projects/><Awards/><Resume/><Contact/></main><Footer/></>;
}
