"use client"

import { useState } from "react"

interface ExportButtonProps {
  targetId: string
}

export default function ExportButton({ targetId }: ExportButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleExport() {
    setLoading(true)
    try {
      const { domToPng } = await import("modern-screenshot")
      const el = document.getElementById(targetId)
      if (!el) return

      const dataUrl = await domToPng(el, {
        scale: 3,
        width: el.offsetWidth,
        height: el.offsetHeight,
      })

      const link = document.createElement("a")
      link.download = "黄十字专业调理讲座海报.png"
      link.href = dataUrl
      link.click()
    } catch (err) {
      alert("保存失败，请截图保存。")
      console.error("[v0] Export error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      aria-label="导出海报为图片"
      className="flex items-center gap-2 rounded-full px-5 py-2.5 font-sans font-bold text-[13px] tracking-wide shadow-lg transition-opacity active:opacity-70"
      style={{
        background: "#0E4A50",
        color: "#FFFFFF",
        opacity: loading ? 0.6 : 1,
        boxShadow: "0 4px 16px rgba(14,74,80,0.35)",
        cursor: loading ? "not-allowed" : "pointer",
      }}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" />
          </svg>
          生成中…
        </>
      ) : (
        <>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 2v8m0 0L5 7m3 3 3-3M2 11v1.5A1.5 1.5 0 0 0 3.5 14h9A1.5 1.5 0 0 0 14 12.5V11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          保存图片
        </>
      )}
    </button>
  )
}
