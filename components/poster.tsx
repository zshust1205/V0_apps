"use client"

import Image from "next/image"
import ExportButton from "@/components/export-button"

// ── Color tokens ─────────────────────────────────────────────
const BG     = "#F8F3EC"
const TEAL   = "#1A6B72"
const TEAL2  = "#0E4A50"
const VERMIL = "#C0392B"
const GOLD   = "#B8902A"
const INK    = "#1C1A17"
const WHITE  = "#FFFFFF"
const CREAM  = "#FBF7F1"

// ── Cross logo ───────────────────────────────────────────────
function CrossLogo({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" style={{ width: size, height: size }} aria-hidden="true">
      <rect x="16" y="3"  width="8" height="34" rx="2.5" fill={WHITE} />
      <rect x="3"  y="16" width="34" height="8"  rx="2.5" fill={WHITE} />
      <rect x="18" y="5"  width="4" height="30" rx="1.5" fill={VERMIL} opacity="0.6" />
      <rect x="5"  y="18" width="30" height="4" rx="1.5" fill={VERMIL} opacity="0.6" />
    </svg>
  )
}

// ── Section label ────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-2 h-2 rounded-sm rotate-45 flex-shrink-0" style={{ background: VERMIL }} />
      <span
        className="font-sans font-bold text-[10px] tracking-[0.25em] uppercase whitespace-nowrap flex-shrink-0"
        style={{ color: TEAL }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: `${TEAL}25` }} />
    </div>
  )
}

// ── Learn card: icon + keyword ───────────────────────────────
function LearnCard({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl"
      style={{ background: CREAM, border: `1.5px solid ${TEAL}20`, flex: 1 }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `${TEAL}15` }}
      >
        {icon}
      </div>
      <span className="font-sans font-black text-[11px] text-center whitespace-nowrap leading-none" style={{ color: INK }}>
        {label}
      </span>
      <span className="font-sans text-[8px] text-center leading-tight" style={{ color: `${TEAL}99` }}>
        {sub}
      </span>
    </div>
  )
}

// ── Gain pill ────────────────────────────────────────────────
function GainPill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-2 py-2 rounded-xl font-sans font-bold text-[11px] leading-none text-center whitespace-nowrap"
      style={{ background: `${TEAL}12`, color: TEAL2, border: `1.5px solid ${TEAL}30` }}
    >
      {children}
    </div>
  )
}

// ── Main poster ──────────────────────────────────────────────
export default function Poster() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-4 py-6"
      style={{ background: "#E8E0D6" }}
    >
      <div
        id="poster-export"
        className="relative flex flex-col overflow-hidden flex-shrink-0"
        style={{
          width: 390,
          height: 844,
          background: BG,
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* ══ TOP BAR ════════════════════════════════════════ */}
        <div
          className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
          style={{ background: TEAL2 }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ background: TEAL }}
            >
              <CrossLogo size={20} />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-black text-[13px] tracking-wide whitespace-nowrap" style={{ color: WHITE }}>
                黄十字专业调理
              </div>
              <div className="font-sans text-[8px] tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: `${WHITE}70` }}>
                Yellow Cross · TCM Wellness
              </div>
            </div>
          </div>
          <div
            className="px-3 py-1 rounded-full font-sans font-bold text-[9.5px] tracking-widest flex-shrink-0 whitespace-nowrap"
            style={{ background: VERMIL, color: WHITE }}
          >
            讲座沙龙
          </div>
        </div>

        {/* Gold stripe */}
        <div className="h-[3px] flex-shrink-0" style={{ background: GOLD }} />

        {/* ══ HERO ═══════════════════════════════════════════ */}
        <div
          className="px-5 py-4 flex-shrink-0"
          style={{ background: TEAL, borderBottom: `3px solid ${GOLD}` }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-px" style={{ background: GOLD }} />
            <span className="font-sans text-[9px] tracking-[0.3em] font-semibold uppercase whitespace-nowrap" style={{ color: `${WHITE}80` }}>
              自媒体时代 · 流量为王
            </span>
          </div>
          <h1
            className="font-serif font-black leading-[1.08] whitespace-nowrap"
            style={{ fontSize: 32, color: WHITE }}
          >
            短视频营销
            <br />
            <span style={{ color: GOLD }}>赋能你的生意</span>
          </h1>
          <div className="mt-2 font-sans text-[10px] leading-relaxed" style={{ color: `${WHITE}CC` }}>
            把专业变流量，把流量变客源
          </div>
        </div>

        {/* ══ BODY ═══════════════════════════════════════════ */}
        <div className="flex flex-col flex-1 px-4 pt-3 pb-3 gap-2.5 min-h-0 overflow-visible">

          {/* 你将学到什么 — 5张图标卡 */}
          <div className="flex-shrink-0">
            <SectionLabel>你将学到什么</SectionLabel>
            <div className="flex gap-1.5">
              <LearnCard
                label="拍摄"
                sub={"构图·灯光·剪辑"}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                    <rect x="2" y="7" width="15" height="11" rx="2" stroke={TEAL} strokeWidth="1.8" />
                    <path d="M17 10l5-3v10l-5-3V10z" stroke={TEAL} strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="9" cy="12" r="2.5" stroke={VERMIL} strokeWidth="1.5" />
                  </svg>
                }
              />
              <LearnCard
                label="文案"
                sub={"钩子·选题·爆点"}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                    <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                }
              />
              <LearnCard
                label="矩阵"
                sub={"多平台·账号布局"}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={TEAL} strokeWidth="1.8" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={TEAL} strokeWidth="1.8" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={TEAL} strokeWidth="1.8" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={VERMIL} strokeWidth="1.8" />
                  </svg>
                }
              />
              <LearnCard
                label="引流"
                sub={"私域·转化·裂变"}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="8" r="3.5" stroke={TEAL} strokeWidth="1.8" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M18 6l2 2-2 2" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <LearnCard
                label="转化"
                sub={"预约·复购·增长"}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
                    <path d="M3 17l5-5 4 4 5-6 4 3" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="19" cy="5" r="3" fill={GOLD} opacity="0.9" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* 等式插图：养生 + 短视频 = 增长 */}
          <div
            className="flex items-center justify-between px-3 py-2 flex-shrink-0 gap-1"
            style={{ background: CREAM, borderRadius: 12, border: `1px solid ${TEAL}18` }}
          >
            <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
              <div className="relative overflow-hidden rounded-lg flex-shrink-0" style={{ width: 76, height: 76 }}>
                <Image src="/img-tcm.png" alt="中医养生" fill className="object-cover" sizes="76px" />
              </div>
              <span className="font-sans font-bold text-[10px] text-center leading-none whitespace-nowrap" style={{ color: TEAL2 }}>中医养生</span>
            </div>
            <div className="font-sans font-black text-[28px] flex-shrink-0" style={{ color: VERMIL }}>+</div>
            <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
              <div className="relative overflow-hidden rounded-lg flex-shrink-0" style={{ width: 76, height: 76 }}>
                <Image src="/img-video.png" alt="短视频营销" fill className="object-cover" sizes="76px" />
              </div>
              <span className="font-sans font-bold text-[10px] text-center leading-none whitespace-nowrap" style={{ color: TEAL2 }}>短视频营销</span>
            </div>
            <div className="font-sans font-black text-[28px] flex-shrink-0" style={{ color: GOLD }}>=</div>
            <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
              <div className="relative overflow-hidden rounded-lg flex-shrink-0" style={{ width: 76, height: 76 }}>
                <Image src="/img-growth.png" alt="业绩增长" fill className="object-cover" sizes="76px" />
              </div>
              <span className="font-sans font-bold text-[10px] text-center leading-none whitespace-nowrap" style={{ color: GOLD }}>业绩增长</span>
            </div>
          </div>

          {/* 参加后你能收获 */}
          <div className="flex-shrink-0">
            <SectionLabel>参加后你能收获</SectionLabel>
            <div className="grid grid-cols-3 gap-1.5">
              <GainPill>精准引流</GainPill>
              <GainPill>爆款文案</GainPill>
              <GainPill>快速变现</GainPill>
              <GainPill>拍摄技巧</GainPill>
              <GainPill>私域转化</GainPill>
              <GainPill>品牌塑造</GainPill>
            </div>
          </div>

          {/* 主讲人卡片 */}
          <div
            className="flex flex-col flex-1 rounded-xl overflow-hidden min-h-0"
            style={{ background: CREAM, border: `1px solid ${TEAL}18` }}
          >
            {/* 卡片标题 */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 flex-shrink-0"
              style={{ background: `${TEAL}12`, borderBottom: `1px solid ${TEAL}20` }}
            >
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: TEAL }}
              >
                <CrossLogo size={9} />
              </div>
              <span className="font-sans font-bold text-[10px] tracking-wide whitespace-nowrap" style={{ color: TEAL2 }}>
                主讲嘉宾介绍
              </span>
            </div>

            {/* 左图 ~41% + 右侧资历 ~59% */}
            <div className="flex flex-1 gap-4 px-3 py-2 min-h-0">
              <div
                className="relative overflow-hidden rounded-lg flex-shrink-0"
                style={{ flexBasis: "41.667%", border: `1.5px solid ${GOLD}40` }}
              >
                <Image src="/img-speaker.png" alt="主讲人照片" fill className="object-cover object-top" sizes="130px" />
              </div>

              <div className="flex flex-col min-w-0 overflow-hidden" style={{ flexBasis: "58.333%" }}>
                <div className="font-sans font-black text-[13px] leading-none mb-0.5 whitespace-nowrap" style={{ color: INK }}>
                  刘林熹老师
                </div>
                <div className="font-sans text-[9px] mb-1.5 whitespace-nowrap" style={{ color: VERMIL }}>
                  中医康养顾问 · 自媒体运营导师
                </div>
                <div className="w-12 h-px mb-1.5" style={{ background: `${TEAL}30` }} />
                <div className="flex flex-col justify-between flex-1 min-h-0">
                  {[
                    "国家注册执业中医师",
                    "从业经验 12 年",
                    "服务客户逾 5000 人次",
                    "专注亚健康体质调理",
                    "短视频粉丝 20W+",
                    "帮助 50+ 机构引流增长",
                    "爆款内容打造实战专家",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 overflow-hidden">
                      <span className="font-sans text-[9px] flex-shrink-0" style={{ color: GOLD }}>◆</span>
                      <span className="font-sans font-medium text-[10px] leading-none truncate" style={{ color: `${INK}CC` }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ══ TIME & LOCATION ════════════════════════════════ */}
        <div
          className="flex items-center justify-between px-4 py-1 flex-shrink-0"
          style={{ background: TEAL2 }}
        >
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" width="10" height="10" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke={GOLD} strokeWidth="1.4" />
              <line x1="8" y1="4.5" x2="8" y2="8.5" stroke={WHITE} strokeWidth="1.4" strokeLinecap="round" />
              <line x1="8" y1="8.5" x2="10.5" y2="10" stroke={WHITE} strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="font-sans font-bold text-[10px] whitespace-nowrap" style={{ color: WHITE }}>
              2026.6.6&nbsp;&nbsp;14:00
            </span>
          </div>
          <div className="w-px h-3 flex-shrink-0" style={{ background: `${WHITE}30` }} />
          <div className="flex items-center gap-1.5 justify-end">
            <svg viewBox="0 0 16 16" fill="none" width="10" height="10" className="flex-shrink-0" aria-hidden="true">
              <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke={GOLD} strokeWidth="1.3" />
              <circle cx="8" cy="6" r="1.6" fill={WHITE} />
            </svg>
            <span className="font-sans text-[9px] leading-none text-right whitespace-nowrap" style={{ color: `${WHITE}CC` }}>
              松江 · 袜子弄米念园区18号8栋201室
            </span>
          </div>
        </div>

      </div>
      <ExportButton targetId="poster-export" />
    </div>
  )
}
