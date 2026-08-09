import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock3, Check, AlertCircle, Sparkles, ExternalLink, Copy, Play, FileText, Lightbulb, ChevronRight, Flame, Gift, Moon, Zap, ShieldCheck, Eye, ArrowRight, Wand2 } from 'lucide-react'
import { day12 } from '../data.js'
import { useState } from 'react'

const GithubIcon = ({size=14, className=""}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = ({size=14, className=""}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

export default function Day(){
  const { id } = useParams()
  const dayNum = id ? parseInt(id) : 12
  const task = day12

  const [githubUrl, setGithubUrl] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [showGenerator, setShowGenerator] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({github:false, linkedin:false})

  const isGithubValid = githubUrl.includes('github.com') && githubUrl.length > 18
  const isLinkedinValid = linkedinUrl.includes('linkedin.com') && linkedinUrl.length > 18
  const canSubmit = isGithubValid && isLinkedinValid

  const generateCaption = () => {
    setCaption(`Day 12/60 — Built a weather app that doesn't look like a tutorial 🌤️\n\nToday I shipped:\n→ Live search with debounce + error states\n→ 3-day forecast & "what to wear" logic\n→ Thumb-friendly UI for one-hand use\n\nStack: React + OpenWeather API\nTime: ~50 min after college\n\nProof: ${githubUrl || 'github.com/aarav/weather-app'}\n\nBuilding in public with #ABTalks 60-day challenge. 11 day streak 🔥\n\nFeedback welcome!`)
    setShowGenerator(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!canSubmit) {
      setTouched({github:true, linkedin:true})
      return
    }
    setSubmitted(true)
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#0E0F13]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FFFBF0]/90 backdrop-blur-xl border-b border-[#E7E5E4]">
        <div className="max-w-[390px] md:max-w-[1100px] mx-auto px-4 h-[56px] flex items-center justify-between">
          <Link to="/dashboard" className="w-9 h-9 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center hover:bg-[#F9FAFB] transition">
            <ArrowLeft size={16}/>
          </Link>
          <div className="flex-1 text-center">
            <div className="text-[11px] font-mono tracking-widest text-[#6B7280]">DAY {dayNum} OF 60</div>
            <div className="text-[13px] font-bold leading-none hidden md:block">Frontend Track • Weather App</div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="hidden md:inline-flex text-xs font-semibold bg-white border border-[#E7E5E4] px-3 py-1.5 rounded-full">Dashboard</Link>
            <div className="w-8 h-8 rounded-full bg-[#FFD230] flex items-center justify-center text-xs font-bold">AM</div>
          </div>
        </div>
      </header>

      <main className="max-w-[390px] md:max-w-[1100px] mx-auto px-4 pb-10">
        {/* Progress + time */}
        <div className="pt-4 flex items-center gap-2">
          <Link to="/dashboard" className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#6B7280] hover:text-[#0E0F13]"><ArrowLeft size={12}/> Back to dashboard</Link>
          <div className="md:ml-auto flex items-center gap-2 w-full md:w-auto">
            <div className="flex-1 md:flex-none h-2 bg-[#E5E7EB] rounded-full overflow-hidden w-auto md:w-32">
              <div className="h-full bg-[#0E0F13]" style={{width: `${(11/60)*100}%`}}></div>
            </div>
            <span className="text-[11px] font-mono bg-[#0E0F13] text-white px-2 py-1 rounded-full">11/60</span>
            <span className="hidden md:inline-flex items-center gap-1 bg-[#FFF1E6] border border-[#FF4D00]/20 text-[#FF4D00] text-[11px] font-bold px-2.5 py-1 rounded-full"><Clock3 size={12}/> 5h 42m left</span>
          </div>
        </div>
        <div className="md:hidden mt-2 flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-widest bg-[#FFF1E6] border border-[#FF4D00]/20 text-[#FF4D00] px-2.5 py-1 rounded-full inline-flex items-center gap-1"><Clock3 size={12}/> DUE TODAY 2:00 AM • 5h 42m left</span>
          <span className="text-[11px] text-[#6B7280] flex items-center gap-1"><Flame size={12} className="text-[#FF4D00]"/> 11 streak</span>
        </div>

        {submitted && (
          <div className="mt-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-4 flex gap-3">
            <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center text-white shrink-0"><Check size={18} strokeWidth={3}/></div>
            <div className="flex-1">
              <div className="font-display font-bold">Submitted! Day {dayNum} secured 🔥</div>
              <p className="text-[13px] text-[#15803D] leading-4 mt-1">Your streak is now 12 days. Recruiter views +3. Keep shipping tomorrow.</p>
              <div className="mt-3 flex gap-2">
                <Link to="/dashboard" className="bg-[#0E0F13] text-white rounded-full px-4 py-2 text-xs font-bold inline-flex items-center gap-1">Back to dashboard <ArrowRight size={12}/></Link>
                <button onClick={()=>setSubmitted(false)} className="bg-white border border-[#BBF7D0] rounded-full px-4 py-2 text-xs font-semibold">Edit submission</button>
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        <section className="mt-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest bg-[#0E0F13] text-white px-2.5 py-1 rounded-full">DAY {dayNum}</span>
            <span className="text-[11px] font-bold tracking-widest bg-[#F3F4F6] px-2.5 py-1 rounded-full">FRONTEND</span>
            <span className="text-[11px] font-bold tracking-widest bg-[#FFF1E6] text-[#FF4D00] px-2.5 py-1 rounded-full">{task.difficulty.toUpperCase()}</span>
            <span className="text-[11px] text-[#6B7280] inline-flex items-center gap-1"><Clock3 size={12}/> {task.time}</span>
          </div>
          <h1 className="font-display font-bold text-[26px] md:text-[32px] leading-[0.95] tracking-[-0.02em] mt-3">
            {task.title}
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-5 mt-3">
            {task.description}
          </p>

          {/* Night owl banner - thoughtful */}
          <div className="mt-4 bg-[#0E0F13] rounded-2xl p-3 flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-full bg-[#FFD230] flex items-center justify-center shrink-0"><Moon size={16} className="text-[#0E0F13]"/></div>
            <div className="flex-1">
              <div className="text-[12px] font-bold">Night Owl Window • Till 2:00 AM IST</div>
              <div className="text-[11px] text-white/60">College ran late? No panic. You’ve got until 2 AM. • <span className="text-[#FFD230]">Freeze available</span></div>
            </div>
            <span className="hidden md:inline-flex bg-white text-[#0E0F13] text-xs font-bold px-3 py-1.5 rounded-full">Active</span>
          </div>
        </section>

        <div className="mt-6 md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-6">
          <div>
            {/* What to build */}
            <section className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden">
              <div className="p-4">
                <h2 className="font-display font-bold flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-[#FF4D00] text-white flex items-center justify-center text-xs">✓</span> What to build</h2>
                <p className="text-[13px] text-[#6B7280] mt-1">Ship something you’d keep on your phone. Checklist = done.</p>

                <div className="mt-4 space-y-2.5">
                  {task.objectives.map((o,i)=>(
                    <label key={i} className="flex gap-3 bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-3 cursor-pointer hover:border-[#D1D5DB] transition group">
                      <input type="checkbox" defaultChecked={i===0} className="mt-0.5 w-5 h-5 rounded-full accent-[#0E0F13] shrink-0"/>
                      <span className="text-[13px] leading-5 font-medium">{o}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3">
                  <div className="text-[11px] font-bold tracking-widest text-[#6B7280] flex items-center gap-1.5"><Lightbulb size={12} className="text-[#FFD230]"/> PRO TIPS</div>
                  <ul className="mt-2 space-y-1.5">
                    {task.hints.map((h,i)=>(
                      <li key={i} className="text-[12px] text-[#4B5563] flex gap-2"><span className="text-[#9CA3AF]">•</span> {h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFFBF0] border-t border-[#E7E5E4] p-4">
                <h3 className="text-[12px] font-bold tracking-widest flex items-center gap-1.5"><FileText size={12}/> STARTER & STACK</h3>
                <div className="mt-2 bg-white border border-[#E7E5E4] rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0E0F13] flex items-center justify-center"><GithubIcon size={16} className="text-white"/></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-mono font-medium truncate">{task.starter.repo}</div>
                    <div className="text-[11px] text-[#6B7280]">{task.starter.stack}</div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition"><Copy size={14}/></button>
                </div>
                <div className="mt-2 flex gap-2">
                  <a href="#" className="flex-1 bg-[#0E0F13] text-white rounded-full py-2.5 text-xs font-bold inline-flex items-center justify-center gap-1.5 hover:bg-black transition"><ExternalLink size={12}/> Open starter</a>
                  <a href="#" className="flex-1 bg-white border border-[#E7E5E4] rounded-full py-2.5 text-xs font-semibold inline-flex items-center justify-center gap-1.5"><Play size={12}/> Watch 12-min guide</a>
                </div>
              </div>
            </section>

            {/* Deliverables */}
            <section className="mt-4 bg-white border border-[#E7E5E4] rounded-2xl p-4">
              <h3 className="font-display font-bold text-sm flex items-center gap-2"><ShieldCheck size={16} className="text-[#22C55E]"/> How you’ll be reviewed</h3>
              <div className="mt-3 space-y-2">
                {task.deliverables.map((d,i)=>(
                  <div key={i} className="flex items-center gap-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-3 py-2.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${d.required ? 'bg-[#0E0F13] text-white' : 'bg-white border border-[#E5E7EB]'}`}>{i+1}</div>
                    <span className="text-[13px] font-medium flex-1">{d.label}</span>
                    {d.required && <span className="text-[10px] font-bold tracking-widest bg-[#FF4D00] text-white px-2 py-1 rounded-full">REQUIRED</span>}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-[#6B7280]">
                <Eye size={12}/> Reviewed by peers + auto-Checks (commit exists, post is public)
              </div>
            </section>

            {/* Resources */}
            <section className="mt-4 bg-white border border-[#E7E5E4] rounded-2xl p-4">
              <h3 className="font-display font-bold text-sm">Resources</h3>
              <div className="mt-3 space-y-2">
                {task.resources.map((r,i)=>(
                  <a key={i} href={r.url} className="flex items-center gap-3 bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-3 hover:border-[#D1D5DB] transition">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E7E5E4] flex items-center justify-center text-[10px] font-bold tracking-widest">{r.type}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold truncate">{r.title}</div>
                      <div className="text-[11px] text-[#6B7280]">{r.meta}</div>
                    </div>
                    <ExternalLink size={14} className="text-[#9CA3AF]"/>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Submission */}
          <div className="mt-4 md:mt-0">
            <div className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden sticky md:top-[70px]">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-[#0E0F13] text-white flex items-center justify-center"><Zap size={12} fill="white"/></span> Submit proof</h2>
                  <span className="text-[11px] font-mono bg-[#FFF1E6] border border-[#FF4D00]/20 text-[#FF4D00] px-2 py-1 rounded-full">{task.submissionsToday} today</span>
                </div>
                <p className="text-[13px] text-[#6B7280] mt-1">Two links. Public. That’s your streak.</p>

                {/* Status stepper */}
                <div className="mt-4 flex items-center gap-1">
                  <div className={`flex-1 h-1.5 rounded-full ${canSubmit || submitted ? 'bg-[#22C55E]' : 'bg-[#E5E7EB]'}`}></div>
                  <div className={`flex-1 h-1.5 rounded-full ${submitted ? 'bg-[#22C55E]' : 'bg-[#E5E7EB]'}`}></div>
                  <span className={`text-[11px] font-bold ml-2 ${submitted ? 'text-[#22C55E]' : canSubmit ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{submitted ? 'SHIPPED ✓' : canSubmit ? 'READY TO SUBMIT' : 'INCOMPLETE'}</span>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
                  {/* GitHub */}
                  <div>
                    <label className="text-[11px] font-bold tracking-widest flex items-center gap-1.5">GITHUB REPO / COMMIT <span className="text-[#FF4D00]">*</span></label>
                    <div className={`mt-2 flex items-center gap-2 bg-[#F9FAFB] border rounded-xl px-3 py-2.5 focus-within:bg-white focus-within:border-[#0E0F13] transition ${touched.github && !isGithubValid ? 'border-[#FCA5A5] bg-[#FEF2F2]' : touched.github && isGithubValid ? 'border-[#86EFAC] bg-[#F0FDF4]' : 'border-[#E5E7EB]'}`}>
                      <GithubIcon size={16} className="text-[#6B7280] shrink-0"/>
                      <input
                        value={githubUrl}
                        onChange={e=>setGithubUrl(e.target.value)}
                        onBlur={()=>setTouched(s=>({...s, github:true}))}
                        placeholder="https://github.com/you/weather-app"
                        className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-[#9CA3AF]"
                        inputMode="url"
                      />
                      {touched.github && isGithubValid && <span className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white"><Check size={12} strokeWidth={3}/></span>}
                    </div>
                    {touched.github && !isGithubValid && <p className="text-[11px] text-[#DC2626] mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> Paste a valid GitHub URL (must contain github.com)</p>}
                    {touched.github && isGithubValid && <p className="text-[11px] text-[#15803D] mt-1 flex items-center gap-1"><Check size={12}/> Looks good — we’ll verify commit exists</p>}
                    <div className="mt-1.5 flex gap-1.5 text-[11px]">
                      <span className="bg-white border border-[#E5E7EB] rounded-full px-2 py-1">Must be public</span>
                      <span className="bg-white border border-[#E5E7EB] rounded-full px-2 py-1">Include README</span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="text-[11px] font-bold tracking-widest flex items-center gap-1.5">LINKEDIN POST URL <span className="text-[#FF4D00]">*</span></label>
                    <div className={`mt-2 flex items-center gap-2 bg-[#F9FAFB] border rounded-xl px-3 py-2.5 focus-within:bg-white focus-within:border-[#0E0F13] transition ${touched.linkedin && !isLinkedinValid ? 'border-[#FCA5A5] bg-[#FEF2F2]' : touched.linkedin && isLinkedinValid ? 'border-[#86EFAC] bg-[#F0FDF4]' : 'border-[#E5E7EB]'}`}>
                      <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center shrink-0"><LinkedinIcon size={12} className="text-white"/></div>
                      <input
                        value={linkedinUrl}
                        onChange={e=>setLinkedinUrl(e.target.value)}
                        onBlur={()=>setTouched(s=>({...s, linkedin:true}))}
                        placeholder="https://linkedin.com/posts/you-day12..."
                        className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-[#9CA3AF]"
                        inputMode="url"
                      />
                      {touched.linkedin && isLinkedinValid && <span className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white"><Check size={12} strokeWidth={3}/></span>}
                    </div>
                    {touched.linkedin && !isLinkedinValid && <p className="text-[11px] text-[#DC2626] mt-1.5 flex items-center gap-1"><AlertCircle size={12}/> Paste a valid LinkedIn post URL</p>}

                    {/* Thoughtful: caption generator */}
                    <div className="mt-3 bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-bold flex items-center gap-1.5"><Wand2 size={14} className="text-[#6D28D9]"/> Can’t write the post?</span>
                        <button type="button" onClick={generateCaption} className="text-[11px] font-bold bg-[#0E0F13] text-white px-3 py-1.5 rounded-full hover:bg-black transition">Generate draft</button>
                      </div>
                      <p className="text-[11px] text-[#6B7280] mt-1 leading-4">Turns your GitHub into a LinkedIn caption. Edit, copy, post — 30 seconds.</p>
                      {showGenerator && (
                        <div className="mt-3 bg-white border border-[#E7E5E4] rounded-xl p-3">
                          <textarea
                            value={caption}
                            onChange={e=>setCaption(e.target.value)}
                            rows={8}
                            className="w-full text-[13px] leading-5 outline-none resize-none"
                            placeholder="Your caption will appear here..."
                          />
                          <div className="mt-2 flex gap-2">
                            <button type="button" onClick={()=>navigator.clipboard.writeText(caption)} className="flex-1 bg-[#0A66C2] text-white rounded-full py-2 text-xs font-bold inline-flex items-center justify-center gap-1"><Copy size={12}/> Copy caption</button>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex-1 bg-white border border-[#E5E7EB] rounded-full py-2 text-xs font-semibold inline-flex items-center justify-center gap-1">Open LinkedIn <ExternalLink size={12}/></a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-3">
                    <div className="text-[11px] font-bold tracking-widest">BEFORE YOU SUBMIT</div>
                    <div className="mt-2 space-y-1.5">
                      <label className="flex items-center gap-2 text-[12px]"><input type="checkbox" defaultChecked className="rounded"/> Repo is public + has README</label>
                      <label className="flex items-center gap-2 text-[12px]"><input type="checkbox" className="rounded"/> LinkedIn post is public (not connections only)</label>
                      <label className="flex items-center gap-2 text-[12px]"><input type="checkbox" className="rounded"/> I built this today — not a fork</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full rounded-full h-[48px] font-bold text-[15px] inline-flex items-center justify-center gap-2 transition ${canSubmit ? 'bg-[#FF4D00] text-white hover:bg-[#E34400] shadow-[0_8px_20px_-8px_rgba(255,77,0,0.5)]' : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'}`}
                  >
                    {submitted ? <><Check size={18}/> Submitted — streak safe</> : <>Submit Day {dayNum} <ArrowRight size={18}/></>}
                  </button>
                  <p className="text-[11px] text-center text-[#6B7280]">By submitting, you agree your links are public and reviewable by peers.</p>
                </form>
              </div>

              <div className="bg-[#FFFBF0] border-t border-[#E7E5E4] p-3 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center"><Gift size={12} className="text-[#FF4D00]"/></div>
                <div className="text-[11px] leading-3">
                  <div className="font-bold">Streak freeze available</div>
                  <div className="text-[#6B7280]">Missed Day 8? You’re still at 11. Next freeze in 4 days.</div>
                </div>
                <ChevronRight size={14} className="ml-auto text-[#9CA3AF]"/>
              </div>
            </div>

            {/* Help + preview */}
            <div className="mt-4 bg-white border border-[#E7E5E4] rounded-2xl p-4">
              <h3 className="text-[13px] font-bold flex items-center gap-2"><Sparkles size={14} className="text-[#FF4D00]"/> What happens after submit?</h3>
              <ol className="mt-2 space-y-2 text-[12px] text-[#4B5563] leading-5">
                <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-[#0E0F13] text-white flex items-center justify-center text-[10px] font-bold shrink-0">1</span> Auto-checks verify GitHub commit + LinkedIn is public (seconds)</li>
                <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-[#0E0F13] text-white flex items-center justify-center text-[10px] font-bold shrink-0">2</span> Peers give feedback — you’ll get 2–3 comments by morning</li>
                <li className="flex gap-2"><span className="w-5 h-5 rounded-full bg-[#FF4D00] text-white flex items-center justify-center text-[10px] font-bold shrink-0">3</span> Streak + recruiter views update instantly</li>
              </ol>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
              <span>Need help?</span><a href="#" className="font-semibold text-[#0E0F13] underline">Ask on Discord</a><span>•</span><a href="#" className="font-semibold text-[#0E0F13] underline">See example submission</a>
            </div>
          </div>
        </div>

        {/* Day nav */}
        <div className="mt-6 flex gap-2">
          <Link to="/day/11" className="flex-1 bg-white border border-[#E7E5E4] rounded-full py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#F9FAFB] transition"><ArrowLeft size={14}/> Day 11</Link>
          <Link to="/dashboard" className="flex-1 bg-[#0E0F13] text-white rounded-full py-3 text-sm font-bold inline-flex items-center justify-center gap-2">Dashboard</Link>
          <Link to="/day/13" className="flex-1 bg-white border border-[#E7E5E4] rounded-full py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#F9FAFB] transition">Day 13 <ChevronRight size={14}/></Link>
        </div>

        <div className="mt-6 text-center">
          <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF]">ROUTE MAP</div>
          <div className="inline-flex bg-white border border-[#E7E5E4] rounded-full px-4 py-2 mt-2 text-[11px] font-mono gap-3">
            <span>/</span><span className="w-px bg-[#E5E7EB]"></span><span>/dashboard</span><span className="w-px bg-[#E5E7EB]"></span><span>/day/12</span>
          </div>
        </div>
      </main>
    </div>
  )
}
