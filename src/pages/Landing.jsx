import { Link } from 'react-router-dom'
import { ArrowRight, Check, Flame, Clock3, Medal, Users, Trophy, Sparkles, Play, ShieldCheck, Calendar, Eye, ArrowUpRight, Zap, Moon, Gift } from 'lucide-react'
import { tracks, wallOfProof } from '../data.js'

const GithubIcon = ({size=14, className=""}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = ({size=14, className=""}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

export default function Landing(){
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#0E0F13] overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-[#FFFBF0]/80 backdrop-blur-xl border-b border-[#E7E5E4]">
        <div className="max-w-[390px] md:max-w-[1100px] mx-auto px-4 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0E0F13] flex items-center justify-center">
              <span className="font-display font-bold text-white text-[13px] tracking-tight">AB</span>
            </div>
            <span className="font-display font-bold text-[16px] tracking-tight">ABTalks</span>
            <span className="hidden md:inline-flex ml-2 text-[11px] font-semibold tracking-widest bg-[#FFD230] px-2 py-1 rounded-full">60-DAY CHALLENGE</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="hidden md:inline-flex text-sm font-semibold px-4 py-2">Log in</Link>
            <Link to="/dashboard" className="bg-[#0E0F13] text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-black transition">Dashboard</Link>
            <Link to="/dashboard" className="bg-[#FF4D00] text-white text-[13px] font-bold px-4 py-2 rounded-full hidden md:inline-flex items-center gap-1 hover:bg-[#E34400] transition">Start Day 1 <ArrowRight size={14}/></Link>
          </div>
        </div>
      </header>

      <main className="max-w-[390px] md:max-w-[1100px] mx-auto">
        {/* HERO */}
        <section className="px-4 pt-6 md:pt-12 pb-6 md:pb-10">
          <div className="md:grid md:grid-cols-2 md:gap-10 md:items-center">
            <div>
              {/* trust pill */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#E7E5E4] rounded-full px-3 py-1.5 shadow-sm">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                <span className="text-[11px] font-semibold tracking-wide">LIVE: 812 students shipping today</span>
                <span className="hidden md:inline text-[11px] text-[#6B7280]">• Day 12 in progress</span>
              </div>

              <h1 className="font-display font-bold leading-[0.92] tracking-[-0.04em] mt-4 text-[38px] md:text-[56px]">
                Get hired <span className="relative inline-block">before
                  <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#FFD230] -z-10 md:h-[10px]"></span>
                </span> <br/>you graduate.
              </h1>
              <p className="text-[15px] md:text-[17px] leading-6 text-[#4B5563] mt-4">
                60 days. One commit. One post. Every day. <span className="font-semibold text-[#0E0F13]">Build in public</span> and let recruiters find you — no DSA grind, just real proof of work.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-col gap-3">
                <Link to="/dashboard" className="w-full md:w-auto bg-[#FF4D00] text-white rounded-full h-[48px] inline-flex items-center justify-center gap-2 font-bold text-[15px] hover:bg-[#E34400] transition shadow-[0_8px_20px_-8px_rgba(255,77,0,0.6)]">
                  Start Day 1 — It’s free <ArrowRight size={18} />
                </Link>
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="inline-flex items-center gap-1.5 text-[#6B7280]"><Clock3 size={14}/> 10–60 min/day</span>
                  <span className="w-1 h-1 bg-[#D1D5DB] rounded-full"></span>
                  <span className="inline-flex items-center gap-1.5 text-[#6B7280]"><ShieldCheck size={14}/> No credit card</span>
                  <span className="hidden md:inline-flex items-center gap-1.5 text-[#6B7280]"><Moon size={14}/> 2 AM grace period</span>
                </div>
              </div>

              {/* social proof avatars */}
              <div className="mt-6 bg-white border border-[#E7E5E4] rounded-2xl p-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <img src="https://i.pravatar.cc/100?img=8" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <img src="https://i.pravatar.cc/100?img=9" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                  <div className="w-8 h-8 rounded-full bg-[#0E0F13] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">+2k</div>
                </div>
                <div className="text-[12px] leading-4">
                  <div className="font-semibold">Trusted by 4,821 students</div>
                  <div className="text-[#6B7280]">300+ placed • 1.2L+ commits shipped</div>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-1 text-[#FFA41C]">
                  <span className="text-sm">★★★★★</span><span className="text-xs text-[#0E0F13] font-semibold">4.8/5</span>
                </div>
              </div>
            </div>

            {/* Hero visual - streak card mock */}
            <div className="mt-6 md:mt-0 relative">
              {/* phone frame */}
              <div className="bg-[#0E0F13] rounded-[28px] p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] md:rotate-[1.2deg]">
                <div className="bg-white rounded-[20px] overflow-hidden">
                  {/* phone header */}
                  <div className="h-7 flex items-center justify-between px-4 text-[11px] font-mono text-[#6B7280] border-b border-[#F3F4F6]">
                    <span>9:41</span><span className="flex gap-1"><span className="w-3 h-3 rounded-full bg-[#E5E7EB]"></span><span className="w-6 h-3 rounded-full bg-[#0E0F13]"></span></span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-[#FFD230] flex items-center justify-center text-sm">🦉</div>
                        <div>
                          <div className="text-[13px] font-bold leading-none">Day 12 • Today</div>
                          <div className="text-[11px] text-[#6B7280]">Weather App • 45 min</div>
                        </div>
                      </div>
                      <div className="bg-[#FFF1E6] border border-[#FF4D00]/20 text-[#FF4D00] text-[11px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1"><Flame size={12}/> 11 day streak</div>
                    </div>

                    <div className="mt-4 bg-[#FFFBF0] border border-[#E7E5E4] rounded-2xl p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-widest text-[#6B7280]">TODAY'S PROOF</span>
                        <span className="text-[11px] font-mono bg-[#0E0F13] text-white px-2 py-1 rounded-full">2 done</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-2.5 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0E0F13] flex items-center justify-center"><GithubIcon size={14} className="text-white"/></div>
                          <div><div className="text-[11px] font-bold">GitHub</div><div className="text-[10px] text-[#22C55E] font-semibold">✓ Committed</div></div>
                        </div>
                        <div className="bg-white border border-[#E5E7EB] rounded-xl p-2.5 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center"><LinkedinIcon size={14} className="text-white"/></div>
                          <div><div className="text-[11px] font-bold">LinkedIn</div><div className="text-[10px] text-[#22C55E] font-semibold">✓ Posted</div></div>
                        </div>
                      </div>
                      <div className="mt-3 bg-[#0E0F13] text-white rounded-xl p-3 flex items-center justify-between">
                        <div>
                          <div className="text-[12px] font-bold">Streak keep-alive</div>
                          <div className="text-[11px] text-white/60">Submit before 2:00 AM</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowUpRight size={16} className="text-[#0E0F13]"/></div>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <div className="flex-1 bg-[#F3F4F6] rounded-xl p-2.5 text-center">
                        <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">COMPLETION</div>
                        <div className="text-[18px] font-display font-bold">18%</div>
                        <div className="h-1.5 bg-white rounded-full mt-1 overflow-hidden"><div className="h-full bg-[#FF4D00] w-[18%]"></div></div>
                      </div>
                      <div className="flex-1 bg-[#F3F4F6] rounded-xl p-2.5 text-center">
                        <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">VIEWS</div>
                        <div className="text-[18px] font-display font-bold flex items-center justify-center gap-1"><Eye size={14}/> 47</div>
                        <div className="text-[10px] text-[#6B7280]">by recruiters</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* floating badges */}
              <div className="absolute -top-2 -right-1 md:right-4 bg-[#FFD230] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg rotate-3">
                <span className="w-2 h-2 bg-[#0E0F13] rounded-full"></span><span className="text-[11px] font-bold">Night Owl Window till 2 AM</span>
              </div>
              <div className="absolute -bottom-3 -left-1 bg-white border border-[#E7E5E4] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow">
                <Gift size={12} className="text-[#FF4D00]"/><span className="text-[11px] font-semibold">1 streak freeze available</span>
              </div>
            </div>
          </div>

          {/* trusted strip */}
          <div className="mt-8 flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            <span className="text-[11px] font-bold tracking-widest text-[#9CA3AF] whitespace-nowrap"> STUDENTS PLACED AT</span>
            <div className="flex items-center gap-2">
              {["Razorpay","Zomato","Flipkart","Infosys","TCS","Swiggy"].map(c=>(
                <span key={c} className="whitespace-nowrap bg-white border border-[#E7E5E4] rounded-full px-3 py-1 text-[12px] font-semibold text-[#4B5563]">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 py-6 md:py-10">
          <div className="flex items-end justify-between">
            <h2 className="font-display font-bold text-[22px] md:text-[28px] leading-none">How it works</h2>
            <span className="text-[11px] font-mono bg-[#0E0F13] text-white px-2 py-1 rounded-full">3 STEPS • DAILY</span>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-3">
            {[
              {n:"01", title:"Pick a track", desc:"Frontend, Backend, AI/ML or DSA. One track for 60 days.", icon:<Zap size={18}/>, accent:"bg-[#FFD230]"},
              {n:"02", title:"Build daily", desc:"10–60 min tasks. Real products, not tutorials.", icon:<Clock3 size={18}/>, accent:"bg-[#FF4D00] text-white"},
              {n:"03", title:"Submit proof", desc:"GitHub commit + LinkedIn post. Public streak = recruiter magnet.", icon:<ShieldCheck size={18}/>, accent:"bg-[#0E0F13] text-white"},
            ].map(s=>(
              <div key={s.n} className="bg-white border border-[#E7E5E4] rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${s.accent} flex items-center justify-center font-mono text-xs font-bold`}>{s.n}</div>
                  <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center">{s.icon}</div>
                </div>
                <h3 className="font-display font-bold mt-3">{s.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-5 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* thoughtful feature highlight */}
          <div className="mt-4 bg-[#0E0F13] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 text-white relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FF4D00] rounded-full blur-2xl opacity-30"></div>
            <div className="w-10 h-10 rounded-xl bg-[#FFD230] flex items-center justify-center text-[#0E0F13] shrink-0"><Moon size={20}/></div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-widest"><span className="w-1.5 h-1.5 bg-[#FFD230] rounded-full"></span> THOUGHTFUL IDEA • NIGHT OWL WINDOW</div>
              <h3 className="font-display font-bold mt-2">We know you ship after midnight.</h3>
              <p className="text-[13px] text-white/70 leading-5 mt-1">Most students open ABTalks at 10PM–2AM. So your day counts till <span className="text-white font-semibold">2:00 AM IST</span>. No stress if college ran late. Plus, one Streak Freeze every 15 days — miss a day, recover without guilt.</p>
            </div>
            <Link to="/dashboard" className="bg-white text-[#0E0F13] rounded-full px-5 py-3 text-sm font-bold inline-flex items-center justify-center gap-2 shrink-0">See how freezes work <ArrowRight size={16}/></Link>
          </div>
        </section>

        {/* TRACKS */}
        <section className="px-4 py-6">
          <h2 className="font-display font-bold text-[22px]">Pick your track</h2>
          <p className="text-[13px] text-[#6B7280]">Switch anytime in first 7 days. After that, commit.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            {tracks.map(t=>(
              <div key={t.id} className="bg-white border border-[#E7E5E4] rounded-2xl p-4 flex gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{background: `${t.color}15`, border: `1px solid ${t.color}30`}}>{t.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-[15px]">{t.name}</h3>
                    <span className="text-[10px] font-bold tracking-widest bg-[#F3F4F6] px-2 py-1 rounded-full">{t.level}</span>
                  </div>
                  <p className="text-[13px] text-[#6B7280]">{t.desc} • {t.days}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#9CA3AF]">
                    <span className="w-2 h-2 rounded-full" style={{background:t.color}}></span> Starts daily at 6 AM • 45 min avg
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#9CA3AF] shrink-0 mt-1"/>
              </div>
            ))}
          </div>
        </section>

        {/* 60 days timeline */}
        <section className="px-4 py-6">
          <div className="bg-white border border-[#E7E5E4] rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-[16px]">What you’ll ship in 60 days</h3>
              <span className="text-[11px] font-mono bg-[#FFFBF0] border border-[#E7E5E4] px-2 py-1 rounded-full">6 SPRINTS</span>
            </div>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                {s:"W1-2", title:"Foundations", items:"Portfolio, clones, Git pro"},
                {s:"W3-4", title:"Real apps", items:"Weather, Chat, FinTrack"},
                {s:"W5-6", title:"Level up", items:"Auth, APIs, DB"},
                {s:"W7", title:"Polish", items:"Perf, a11y, tests"},
                {s:"W8", title:"Build in public", items:"Growth, content"},
                {s:"W9", title:"Hire me", items:"Capstone + resume"},
              ].map(b=>(
                <div key={b.s} className="bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-3">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#FF4D00]">{b.s}</div>
                  <div className="text-[13px] font-bold leading-tight mt-1">{b.title}</div>
                  <div className="text-[11px] text-[#6B7280] leading-tight mt-1">{b.items}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#0E0F13] rounded-xl p-3 flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center"><Trophy size={14}/></div>
              <div className="flex-1">
                <div className="text-[13px] font-bold">Day 60 Capstone → Portfolio that recruiters share</div>
                <div className="text-[11px] text-white/60">Past cohorts averaged 3.2 recruiter DMs in last 2 weeks</div>
              </div>
              <span className="hidden md:inline-flex bg-white text-[#0E0F13] text-xs font-bold px-3 py-1.5 rounded-full">View Day 60 brief</span>
            </div>
          </div>
        </section>

        {/* Wall of proof */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-[22px]">Wall of proof</h2>
            <span className="text-[11px] font-semibold text-[#6B7280] inline-flex items-center gap-1"><Eye size={12}/> Real LinkedIn posts</span>
          </div>
          <div className="mt-4 space-y-3">
            {wallOfProof.map((p,i)=>(
              <div key={i} className={`bg-white border ${p.featured ? 'border-[#FFD230] shadow-[0_4px_20px_-8px_rgba(255,210,48,0.6)]' : 'border-[#E7E5E4]'} rounded-2xl p-4`}>
                {p.featured && <div className="inline-flex items-center gap-1 bg-[#FFD230] rounded-full px-2 py-1 text-[10px] font-bold tracking-widest mb-2"><Trophy size={10}/> FEATURED • 60/60 FINISHER</div>}
                <div className="flex items-start gap-3">
                  <img src={`https://i.pravatar.cc/100?img=${15+i}`} alt="" className="w-9 h-9 rounded-full object-cover"/>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold">{p.name}</span>
                      <span className="text-[11px] text-[#6B7280]">{p.college} • Day {p.day}</span>
                      <span className="ml-auto text-[11px] text-[#9CA3AF]">{p.time}</span>
                    </div>
                    <p className="text-[13px] leading-5 mt-1">{p.text}</p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-[#6B7280]">
                      <span className="inline-flex items-center gap-1"><span className="w-5 h-5 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">♥</span> {p.likes} likes</span>
                      <span>💬 12 comments</span>
                      <span className="ml-auto inline-flex items-center gap-1 text-[#0A66C2] font-semibold"><LinkedinIcon size={12}/> LinkedIn</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-[#FFF1E6] border border-[#FF4D00]/20 rounded-xl p-3 flex items-center gap-2">
            <Sparkles size={16} className="text-[#FF4D00]"/>
            <p className="text-[12px] leading-4"><span className="font-bold">Proof before polish:</span> Every submission is public. Recruiters browse by streak, not CGPA.</p>
          </div>
        </section>

        {/* FAQ + final CTA */}
        <section className="px-4 py-6">
          <div className="bg-[#0E0F13] rounded-[20px] p-5 md:p-8 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF4D00] rounded-full blur-3xl opacity-20"></div>
            <h2 className="font-display font-bold text-[24px] md:text-[30px] leading-none">Start tonight. <br/><span className="text-[#FFD230]">Stay consistent.</span></h2>
            <p className="text-[13px] text-white/70 mt-3 leading-5">Join 4,821 students. First 7 days are risk-free — miss a day, your streak freeze has you covered. Works on your phone at 1 AM.</p>
            <div className="mt-5 flex flex-col gap-3">
              <Link to="/dashboard" className="bg-[#FF4D00] text-white rounded-full h-[48px] inline-flex items-center justify-center gap-2 font-bold">Start Day 1 — Free <ArrowRight size={18}/></Link>
              <Link to="/day/12" className="bg-white text-[#0E0F13] rounded-full h-[44px] inline-flex items-center justify-center gap-2 font-semibold text-sm"><Play size={16}/> Preview Day 12 task</Link>
            </div>
            <div className="mt-4 flex items-center gap-3 text-[11px] text-white/60">
              <span className="inline-flex items-center gap-1"><Users size={12}/> 4,821 enrolled</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="inline-flex items-center gap-1"><Calendar size={12}/> Next cohort: Today</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-display font-bold">Questions? We got you.</h3>
            <div className="mt-3 space-y-2">
              {[
                {q:"What if I miss a day?", a:"Your streak pauses. Use a Streak Freeze (1 per 15 days) or continue — progress never resets. Best cohorts miss ~4 days and still finish."},
                {q:"Do I need a laptop?", a:"Tasks are mobile-friendly, but GitHub is easier on laptop. Many students start on phone, push from lab later. 2 AM window helps."},
                {q:"How much time per day?", a:"10 min on light days, 60 min on build days. Average 34 min. Designed after college hours."},
              ].map(f=>(
                <details key={f.q} className="bg-white border border-[#E7E5E4] rounded-xl p-4 group">
                  <summary className="list-none flex items-center justify-between cursor-pointer">
                    <span className="text-[13px] font-semibold">{f.q}</span><span className="w-6 h-6 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-[13px] text-[#6B7280] leading-5 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-4 py-8 border-t border-[#E7E5E4] mt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0E0F13] flex items-center justify-center"><span className="font-display font-bold text-white text-xs">AB</span></div>
            <span className="font-display font-bold text-sm">ABTalks</span><span className="text-xs text-[#6B7280]">© 2026 • Built for students, by students</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-[#6B7280]">
            <a href="#" className="hover:text-[#0E0F13]">Privacy</a><span>•</span><a href="#" className="hover:text-[#0E0F13]">Terms</a><span>•</span><a href="#" className="hover:text-[#0E0F13]">Support: Discord</a><span>•</span><a href="#" className="hover:text-[#0E0F13]">hello@abtalks.in</a>
          </div>
          <div className="mt-4 text-[10px] font-mono tracking-widest text-[#9CA3AF]">ROUTE MAP<br/>/<br/>/dashboard<br/>/day/12</div>
        </footer>
      </main>
    </div>
  )
}
