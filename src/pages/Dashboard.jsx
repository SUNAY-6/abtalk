import { Link } from 'react-router-dom'
import { Flame, ArrowRight, Clock3, Trophy, Eye, Calendar, Zap, Moon, Gift, AlertCircle, Check, X, Plus, TrendingUp, Users, Sparkles, ChevronRight, Target, BookOpen } from 'lucide-react'
import { student, streakCalendar, achievements, day12 } from '../data.js'
import { useState } from 'react'

const GithubIcon = ({size=14, className=""}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
);

export default function Dashboard(){
  const [showFreezeInfo, setShowFreezeInfo] = useState(false)
  const progressPct = Math.round((student.completed / student.total)*100)
  const isFirstDay = false
  const hasMissedYesterday = true

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#0E0F13]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#FFFBF0]/90 backdrop-blur-xl border-b border-[#E7E5E4]">
        <div className="max-w-[390px] md:max-w-[1100px] mx-auto px-4 h-[56px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0E0F13] flex items-center justify-center">
              <span className="font-display font-bold text-white text-[13px]">AB</span>
            </div>
            <span className="font-display font-bold text-[14px] hidden md:inline">ABTalks</span>
            <span className="hidden md:inline-flex ml-1 bg-[#0E0F13] text-white text-[10px] font-bold tracking-widest px-2 py-1 rounded-full">DASHBOARD</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 bg-white border border-[#E7E5E4] rounded-full px-3 py-1.5">
              <Calendar size={14} className="text-[#6B7280]"/><span className="text-xs font-semibold">Day {day12.day} of {student.total}</span><span className="w-1 h-1 bg-[#D1D5DB] rounded-full"></span><span className="text-xs text-[#6B7280]">{progressPct}%</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0E0F13] text-white rounded-full px-3 py-1.5">
              <Flame size={14} className="text-[#FFD230] fill-[#FFD230]"/><span className="text-xs font-bold">{student.streak} day streak</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FFD230] border-2 border-white shadow flex items-center justify-center text-xs font-bold">
              {student.avatar}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[390px] md:max-w-[1100px] mx-auto px-4 pb-10">
        {/* Greeting + progress header */}
        <section className="pt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="font-display font-bold text-[22px] md:text-[26px] leading-none">Hey, Aarav 👋</h1>
              <p className="text-[13px] text-[#6B7280] mt-1">{student.college} • {student.track} track</p>
            </div>
            <Link to="/day/12" className="hidden md:inline-flex bg-[#FF4D00] text-white rounded-full px-5 py-2.5 text-sm font-bold items-center gap-2 hover:bg-[#E34400] transition">Continue Day 12 <ArrowRight size={16}/></Link>
          </div>

          {/* Progress bar */}
          <div className="mt-4 bg-white border border-[#E7E5E4] rounded-2xl p-3 md:p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-widest text-[#6B7280]">YOUR JOURNEY</span>
              <span className="text-[11px] font-mono bg-[#FFFBF0] border border-[#E7E5E4] px-2 py-1 rounded-full">{student.completed}/{student.total} days • {progressPct}%</span>
            </div>
            <div className="mt-3 h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#0E0F13] rounded-full" style={{width: `${progressPct}%`}}></div>
              <div className="h-full bg-[#FF4D00] rounded-full -ml-1" style={{width: `2%`}}></div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-[9px] leading-3 md:text-[11px] md:leading-normal font-mono text-[#9CA3AF]">
  <span className="text-left">Day 1 • First commit</span>
  <span className="text-center">Day 30 • Halfway</span>
  <span className="text-right">Day 60 • Hired</span>
</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-2.5 text-center">
                <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">COMPLETED</div>
                <div className="text-[18px] font-display font-bold">{student.completed}</div>
                <div className="text-[11px] text-[#6B7280]">days shipped</div>
              </div>
              <div className="bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-2.5 text-center">
                <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">REMAINING</div>
                <div className="text-[18px] font-display font-bold">{student.total - student.completed}</div>
                <div className="text-[11px] text-[#6B7280]">to go</div>
              </div>
              <div className="bg-[#0E0F13] rounded-xl p-2.5 text-center text-white">
                <div className="text-[11px] font-bold tracking-widest text-white/60">RANK</div>
                <div className="text-[18px] font-display font-bold">#{student.rank}</div>
                <div className="text-[11px] text-white/60">Top {100-student.percentile}%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Streak card - core */}
        <section className="mt-4">
          <div className="bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden">
            {/* streak header */}
            <div className="p-4 pb-3">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-bold flex items-center gap-2"><span className="w-7 h-7 rounded-full bg-[#FFF1E6] flex items-center justify-center"><Flame size={14} className="text-[#FF4D00] fill-[#FF4D00]"/></span> Current streak</h2>
                <button onClick={()=>setShowFreezeInfo(!showFreezeInfo)} className="text-[11px] font-bold tracking-widest bg-[#FFD230] px-2.5 py-1 rounded-full inline-flex items-center gap-1 hover:brightness-95 transition">
                  <Gift size={12}/> {student.freezesAvailable} FREEZE LEFT
                </button>
              </div>

              {isFirstDay ? (
                <div className="mt-4 text-center py-6 bg-[#FFFBF0] rounded-xl border border-dashed border-[#E7E5E4]">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center mx-auto text-xl">🌱</div>
                  <div className="font-display font-bold mt-3">No streak yet — that’s perfect.</div>
                  <p className="text-[13px] text-[#6B7280] mt-1 px-6">Every 60-day finisher started at zero. Ship Day 1 tonight and your flame ignites.</p>
                  <Link to="/day/12" className="mt-3 inline-flex bg-[#0E0F13] text-white rounded-full px-5 py-2 text-sm font-semibold">Start Day 1</Link>
                </div>
              ) : (
                <>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-display font-bold text-[44px] leading-none tracking-tight">{student.streak}</span>
                    <span className="font-display font-bold text-[18px]">days</span>
                    <span className="ml-auto text-[11px] font-semibold bg-[#FFF1E6] border border-[#FF4D00]/20 text-[#FF4D00] px-2.5 py-1 rounded-full inline-flex items-center gap-1"><Zap size={12}/> Longest: {student.longestStreak}</span>
                  </div>
                  <p className="text-[13px] text-[#6B7280] -mt-1">You’ve shipped 11 of the last 12 days. One miss, zero quit.</p>

                  {/* calendar strip */}
                  <div className="mt-4 grid grid-cols-7 gap-1.5">
                    {streakCalendar.map(d=>(
                      <div key={d.day} className={`rounded-xl border p-2 text-center ${d.status==='today' ? 'bg-[#0E0F13] text-white border-[#0E0F13] shadow-lg scale-[1.02]' : d.status==='missed' ? 'bg-white border-[#FECACA] ring-1 ring-[#FECACA]' : d.status==='done' ? 'bg-white border-[#BBF7D0]' : 'bg-[#F9FAFB] border-[#E5E7EB] opacity-60'}`}>
                        <div className={`text-[10px] font-mono tracking-widest ${d.status==='today' ? 'text-white/60' : 'text-[#9CA3AF]'}`}>{d.date.split(' ')[0].toUpperCase()}</div>
                        <div className={`w-7 h-7 mx-auto mt-1 rounded-full flex items-center justify-center text-[11px] font-bold ${d.status==='done' ? 'bg-[#22C55E] text-white' : d.status==='missed' ? 'bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA]' : d.status==='today' ? 'bg-white text-[#0E0F13]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>
                          {d.status==='done' ? <Check size={12} strokeWidth={3}/> : d.status==='missed' ? <X size={12} strokeWidth={3}/> : d.day}
                        </div>
                        <div className="text-[10px] font-mono mt-1 font-bold">{d.day}</div>
                      </div>
                    ))}
                  </div>

                  {/* missed day handling */}
                  {hasMissedYesterday && (
                    <div className="mt-3 bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-3 flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#FECACA] flex items-center justify-center shrink-0"><AlertCircle size={16} className="text-[#DC2626]"/></div>
                      <div className="flex-1">
                        <div className="text-[13px] font-bold">You missed Day 8 — and that’s okay.</div>
                        <p className="text-[12px] text-[#6B7280] leading-4 mt-0.5">Everyone misses. You recovered and shipped 4 days straight after. That’s the real streak.</p>
                        <div className="mt-2 flex gap-2">
                          <span className="text-[11px] font-semibold bg-white border border-[#E5E7EB] px-2.5 py-1 rounded-full inline-flex items-center gap-1"><Gift size={12} className="text-[#FF4D00]"/> Freeze was available — you saved it</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {showFreezeInfo && (
                    <div className="mt-3 bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-3">
                      <h4 className="text-[13px] font-bold flex items-center gap-1.5"><Moon size={14} className="text-[#6D28D9]"/> Night Owl + Freeze — how it works</h4>
                      <ul className="mt-2 space-y-1.5 text-[12px] leading-4 text-[#4B5563]">
                        <li className="flex gap-2"><span className="text-[#22C55E]">✓</span> Submit any day till <b>2:00 AM IST</b> — for late-night shippers</li>
                        <li className="flex gap-2"><span className="text-[#22C55E]">✓</span> 1 Streak Freeze every 15 days — miss without breaking streak</li>
                        <li className="flex gap-2"><span className="text-[#22C55E]">✓</span> You have <b>{student.freezesAvailable} freeze</b> now. Next in 4 days.</li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="h-[1px] bg-[#F3F4F6]"></div>
            <div className="p-3 flex items-center justify-between bg-[#FFFBF0]">
              <span className="text-[11px] font-mono tracking-widest text-[#6B7280] flex items-center gap-1.5"><TrendingUp size={12}/> CONSISTENCY: 92% (11/12)</span>
              <span className="text-[11px] font-semibold text-[#0E0F13] inline-flex items-center gap-1">View full calendar <ChevronRight size={12}/></span>
            </div>
          </div>
        </section>

        {/* Today's Task */}
        <section className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-[16px]">Today’s task</h2>
            <span className="text-[11px] font-mono bg-[#0E0F13] text-white px-2 py-1 rounded-full">DAY 12 • DUE 2 AM</span>
          </div>

          <Link to="/day/12" className="mt-3 block bg-white border border-[#E7E5E4] rounded-2xl overflow-hidden hover:border-[#D1D5DB] transition group">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FF4D00] to-[#FFD230]"></div>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FFF1E6] border border-[#FF4D00]/20 flex items-center justify-center text-lg shrink-0">🌤️</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold tracking-widest bg-[#F3F4F6] px-2 py-1 rounded-full">FRONTEND</span>
                    <span className="text-[11px] font-bold tracking-widest bg-[#FFF1E6] text-[#FF4D00] px-2 py-1 rounded-full">{day12.difficulty.toUpperCase()}</span>
                    <span className="text-[11px] text-[#6B7280] inline-flex items-center gap-1"><Clock3 size={12}/> {day12.time}</span>
                  </div>
                  <h3 className="font-display font-bold text-[16px] leading-tight mt-2 group-hover:text-[#FF4D00] transition line-clamp-2">{day12.title}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-5 mt-1 line-clamp-2">{day12.brief}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {day12.objectives.slice(0,3).map((o,i)=>(
                  <div key={i} className="bg-[#FFFBF0] border border-[#E7E5E4] rounded-xl p-2.5">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-[11px]">{i===0?'🔌': i===1?'🎨':'🔍'}</div>
                    <div className="text-[11px] font-semibold leading-tight mt-1.5 line-clamp-2">{o}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <span className="flex-1 bg-[#0E0F13] text-white rounded-full h-11 inline-flex items-center justify-center gap-2 font-bold text-sm group-hover:bg-black transition">Start building <ArrowRight size={16}/></span>
                <span className="w-11 h-11 rounded-full bg-[#F3F4F6] flex items-center justify-center"><BookOpen size={18} className="text-[#6B7280]"/></span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-[#6B7280]">
                <Users size={12}/> {day12.submissionsToday} shipped today <span className="w-1 h-1 bg-[#D1D5DB] rounded-full"></span> <span className="text-[#22C55E] font-semibold">Live</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Standing + Recruiter views */}
        <section className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E7E5E4] rounded-2xl p-4">
            <h3 className="font-display font-bold text-sm flex items-center gap-2"><Trophy size={16} className="text-[#FFD230]"/> Standing</h3>
            <div className="mt-3 flex items-end gap-3">
              <div>
                <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">YOUR RANK</div>
                <div className="font-display font-bold text-2xl">#{student.rank}</div>
                <div className="text-[12px] text-[#6B7280]">Top 32% this week</div>
              </div>
              <div className="ml-auto text-right">
                <div className="inline-flex items-center gap-1 bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-bold px-2.5 py-1 rounded-full"><TrendingUp size={12}/> +24 this week</div>
                <div className="text-[11px] text-[#6B7280] mt-1">among 1,203 frontend peers</div>
              </div>
            </div>
            <div className="mt-3 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
              <div className="h-full bg-[#22C55E]" style={{width: `${student.percentile}%`}}></div>
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-mono text-[#9CA3AF]"><span>0% </span><span>68th percentile</span><span>100%</span></div>
          </div>

          <div className="bg-white border border-[#E7E5E4] rounded-2xl p-4">
            <h3 className="font-display font-bold text-sm flex items-center gap-2"><Eye size={16} className="text-[#0EA5E9]"/> Recruiter visibility</h3>
            <div className="mt-3 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFBF0] border border-[#E7E5E4] flex flex-col items-center justify-center">
                <span className="font-display font-bold text-xl leading-none">{student.recruiterViews}</span><span className="text-[10px] font-bold tracking-widest text-[#6B7280]">VIEWS</span>
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold">People are watching 👀</div>
                <p className="text-[12px] text-[#6B7280] leading-4">Your LinkedIn streak was viewed 12× this week. Keep posting daily.</p>
                <div className="mt-2 flex gap-1.5">
                  <img src="https://i.pravatar.cc/100?img=33" alt="" className="w-6 h-6 rounded-full border-2 border-white"/>
                  <img src="https://i.pravatar.cc/100?img=34" alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
                  <img src="https://i.pravatar.cc/100?img=35" alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
                  <span className="text-[11px] text-[#6B7280] ml-1 self-center">+ 9 others</span>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-xl p-2.5 flex items-center gap-2">
              <Sparkles size={14} className="text-[#0EA5E9]"/><span className="text-[12px] font-medium">Tip: Posts with a screenshot get 3× more views</span>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-[16px]">Achievements</h2>
            <span className="text-[11px] font-mono bg-[#F3F4F6] px-2 py-1 rounded-full">3/6 UNLOCKED</span>
          </div>
          <div className="mt-3 grid grid-cols-3 md:grid-cols-6 gap-2">
            {achievements.map(a=>(
              <div key={a.id} className={`rounded-2xl border p-3 text-center ${a.unlocked ? 'bg-white border-[#E7E5E4]' : 'bg-[#F9FAFB] border-[#E5E7EB] opacity-60'}`}>
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-lg ${a.unlocked ? 'bg-[#FFFBF0] border border-[#E7E5E4]' : 'bg-[#E5E7EB]'}`}>{a.icon}</div>
                <div className="text-[12px] font-bold leading-tight mt-2">{a.title}</div>
                <div className="text-[10px] text-[#6B7280] mt-0.5 leading-tight">{a.desc}</div>
                {a.unlocked ? <div className="mt-2 inline-flex bg-[#22C55E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">UNLOCKED</div> : <div className="mt-2 inline-flex bg-white border border-[#E5E7EB] text-[10px] font-bold px-2 py-0.5 rounded-full">LOCKED</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Week view + empty profile edge */}
        <section className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E7E5E4] rounded-2xl p-4">
            <h3 className="font-display font-bold text-sm flex items-center gap-2"><Target size={16}/> This week</h3>
            <div className="mt-3 space-y-2">
              {[
                {d:"Day 9 • Todo CLI", s:"done"},
                {d:"Day 10 • Portfolio polish", s:"done"},
                {d:"Day 11 • API basics", s:"done"},
                {d:"Day 12 • Weather App", s:"today"},
                {d:"Day 13 • Auth UI", s:"upcoming"},
              ].map(r=>(
                <div key={r.d} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${r.s==='today' ? 'bg-[#0E0F13] text-white border-[#0E0F13]' : r.s==='done' ? 'bg-[#F0FDF4] border-[#BBF7D0]' : 'bg-[#F9FAFB] border-[#E5E7EB]'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${r.s==='done' ? 'bg-[#22C55E] text-white' : r.s==='today' ? 'bg-[#FF4D00] text-white' : 'bg-white border border-[#E5E7EB]'}`}>
                    {r.s==='done' ? <Check size={12} strokeWidth={3}/> : r.s==='today' ? <Clock3 size={12}/> : <span className="text-[10px] font-mono">13</span>}
                  </div>
                  <span className={`text-[13px] font-medium ${r.s==='today' ? 'text-white' : 'text-[#0E0F13]'}`}>{r.d}</span>
                  <span className={`ml-auto text-[11px] font-bold ${r.s==='done' ? 'text-[#15803D]' : r.s==='today' ? 'text-[#FFD230]' : 'text-[#9CA3AF]'}`}>{r.s==='done' ? 'SHIPPED' : r.s==='today' ? 'TODAY' : 'LOCKED'}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0E0F13] rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#FF4D00] rounded-full blur-3xl opacity-20"></div>
            <h3 className="font-display font-bold text-sm flex items-center gap-2"><Users size={16} className="text-[#FFD230]"/> Your profile</h3>

            {/* empty profile edge case illustration */}
            <div className="mt-3 bg-white rounded-xl p-3 text-[#0E0F13]">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FFD230] flex items-center justify-center text-sm font-bold">AM</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold">Aarav Mehta</div>
                  <div className="text-[12px] text-[#6B7280]">RVCE • Frontend</div>
                  <div className="mt-1 inline-flex items-center gap-1 bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-[11px] font-bold px-2 py-1 rounded-full"><AlertCircle size={12}/> Add LinkedIn to get discovered</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-2.5">
                  <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">GITHUB</div>
                  <div className="text-[12px] font-semibold flex items-center gap-1"><GithubIcon size={12}/> aaravmehta ✓</div>
                  <div className="text-[11px] text-[#22C55E]">Connected</div>
                </div>
                <div className="bg-[#FFFBF0] border border-dashed border-[#E7E5E4] rounded-xl p-2.5">
                  <div className="text-[11px] font-bold tracking-widest text-[#6B7280]">LINKEDIN</div>
                  <div className="text-[12px] font-semibold text-[#9CA3AF]">Not added</div>
                  <button className="mt-1 text-[11px] font-bold text-[#0A66C2] inline-flex items-center gap-1">+ Add URL <Plus size={12}/></button>
                </div>
              </div>
              <div className="mt-3 bg-[#FFF1E6] border border-[#FF4D00]/20 rounded-xl p-2.5 flex gap-2">
                <Sparkles size={14} className="text-[#FF4D00] shrink-0 mt-0.5"/>
                <p className="text-[12px] leading-4"><b>Empty profile?</b> You still rank. But adding LinkedIn boosts recruiter views by 4×. Takes 20 seconds.</p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-white text-[#0E0F13] rounded-full py-2.5 text-sm font-bold">Complete profile</button>
              <button className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm font-semibold">Share</button>
            </div>
          </div>
        </section>

        {/* Help footer */}
        <div className="mt-6 bg-white border border-[#E7E5E4] rounded-2xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center"><Moon size={16}/></div>
          <div className="flex-1">
            <div className="text-[13px] font-bold">Shipping late tonight?</div>
            <div className="text-[12px] text-[#6B7280]">Your Day 12 window closes at 2:00 AM IST. We’ll nudge you at 9 PM.</div>
          </div>
          <span className="text-[11px] font-bold bg-[#0E0F13] text-white px-3 py-1.5 rounded-full">Remind me</span>
        </div>

        <div className="mt-6 text-center">
          <div className="text-[10px] font-mono tracking-widest text-[#9CA3AF]">ROUTE MAP • FOR AUTO SCREENSHOT</div>
          <div className="inline-flex bg-white border border-[#E7E5E4] rounded-full px-4 py-2 mt-2 text-[11px] font-mono gap-3">
            <span>/</span><span className="w-px bg-[#E5E7EB]"></span><span>/dashboard</span><span className="w-px bg-[#E5E7EB]"></span><span>/day/12</span>
          </div>
        </div>
      </main>
    </div>
  )
}
