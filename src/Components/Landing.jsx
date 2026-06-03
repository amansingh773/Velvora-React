// LandingPage.jsx
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const categories = [
  { label: "Men's Clothing", emoji: "🧥", count: "12 pieces" },
  { label: "Women's Clothing", emoji: "👗", count: "8 pieces" },
  { label: "Electronics", emoji: "⚡", count: "6 pieces" },
  { label: "Jewelery", emoji: "💎", count: "4 pieces" },
]

export default function Landing() {
  const [visible, setVisible]           = useState(false)
  const [heroTextVisible, setHeroText]  = useState(false)
  const [ctaVisible, setCta]            = useState(false)
  const [cardsVisible, setCards]        = useState(false)
  const [statsVisible, setStats]        = useState(false)

  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true),      100)
    setTimeout(() => setHeroText(true),     400)
    setTimeout(() => setCta(true),          750)
    setTimeout(() => setCards(true),       1050)
    setTimeout(() => setStats(true),       1300)
  }, [])

  return (
    <div
      className="min-h-screen bg-[#111110] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* ── Navbar ── */}
      <header
        className="flex items-center justify-between px-6 sm:px-12 lg:px-20 py-5 border-b border-[#1e1e1c]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-16px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#666660] mb-0.5">Est. 2026</p>
          <h1
            className="text-xl font-semibold text-[#f0ede6] tracking-tight m-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Velvora
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Collection', 'Categories'].map((item) => (
            <span
            onClick={()=>{
              navigation("/products")
            }}
              key={item}
              className="text-[11px] uppercase tracking-[0.18em] text-[#555550] hover:text-[#f0ede6] transition-colors duration-200 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </nav>

        <Link
          to="/home"
          className="text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 bg-[#c8b89a] text-[#111110] rounded-full hover:bg-[#f0ede6] transition-colors duration-200"
        >
          Shop Now
        </Link>
      </header>

      {/* ── Hero ── */}
      <section className="relative px-6 sm:px-12 lg:px-20 pt-20 pb-28 overflow-hidden">

        {/* Subtle background glows */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,184,154,0.07) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,184,154,0.04) 0%, transparent 70%)',
            transform: 'translate(-40%, 40%)',
          }}
        />

        {/* Season label */}
        <div
          className="inline-flex items-center gap-2 mb-10"
          style={{
            opacity: heroTextVisible ? 1 : 0,
            transform: heroTextVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="w-6 h-px bg-[#c8b89a]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8b89a] font-medium">
            New Season Arrivals
          </span>
        </div>

        {/* Headline — staggered lines */}
        <div className="max-w-4xl mb-10">
          {[
            { text: 'Dress the',      stroke: false, delay: '0.1s' },
            { text: 'best version',   stroke: true,  delay: '0.25s' },
            { text: 'of yourself.',   stroke: false, delay: '0.4s' },
          ].map(({ text, stroke, delay }) => (
            <h2
              key={text}
              className="text-5xl sm:text-7xl lg:text-8xl font-semibold leading-none m-0"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '-2px',
                color: stroke ? 'transparent' : '#f0ede6',
                WebkitTextStroke: stroke ? '1px #c8b89a' : undefined,
                opacity: heroTextVisible ? 1 : 0,
                transform: heroTextVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
              }}
            >
              {text}
            </h2>
          ))}
        </div>

        {/* Sub-copy + CTA buttons */}
        <div
          className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-[#666660] text-sm leading-relaxed max-w-xs font-light">
            Handpicked collections across clothing, electronics & jewellery.
            Quality that speaks before you do.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              to="/home"
              className="px-8 py-4 bg-[#c8b89a] text-[#111110] text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#f0ede6] transition-all duration-300 hover:shadow-[0_0_32px_rgba(200,184,154,0.25)]"
            >
              Explore Collection
            </Link>
            <Link
              to="/home"
              className="text-[11px] uppercase tracking-[0.18em] text-[#555550] border-b border-[#2a2a28] pb-0.5 hover:text-[#c8b89a] hover:border-[#c8b89a] transition-colors duration-200"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Stat pills — right side */}
        <div
          className="absolute right-6 sm:right-12 lg:right-20 top-20 hidden sm:flex flex-col gap-3"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateX(0)' : 'translateX(32px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          {[
            { num: '500+', label: 'Products' },
            { num: '4.8★', label: 'Avg Rating' },
            { num: '10k+', label: 'Customers' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#161614] border border-[#1e1e1c] rounded-2xl px-5 py-3 text-right hover:border-[#3a3a36] transition-colors duration-200"
              style={{
                opacity: ctaVisible ? 1 : 0,
                transform: ctaVisible ? 'translateX(0)' : 'translateX(32px)',
                transition: `opacity 0.7s ease ${0.3 + i * 0.15}s, transform 0.7s ease ${0.3 + i * 0.15}s`,
              }}
            >
              <p className="text-lg font-semibold text-[#f0ede6] m-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.num}
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#444440] m-0">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="border-t border-[#1e1e1c]" />
      </div>

      {/* ── Category Cards ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">

        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3"
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#555550] mb-1.5">Browse By</p>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-[#f0ede6] m-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop Categories
            </h3>
          </div>
          <Link
            to="/home"
            className="text-[10px] uppercase tracking-[0.2em] text-[#666660] hover:text-[#c8b89a] transition-colors duration-200 self-start sm:self-auto"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative bg-[#161614] border border-[#1e1e1c] rounded-2xl p-6 cursor-pointer overflow-hidden hover:-translate-y-1 hover:border-[#3a3a36] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,184,154,0.06) 0%, transparent 70%)' }}
              />
              <div className="text-3xl mb-4">{cat.emoji}</div>
              <p className="text-[#f0ede6] text-sm font-medium mb-1 leading-snug">{cat.label}</p>
              <p className="text-[10px] text-[#444440] uppercase tracking-widest">{cat.count}</p>
              <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#c8b89a] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Browse →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Feature strip ── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-12 border-t border-b border-[#1e1e1c]"
        style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '🚚', title: 'Free Delivery',  sub: 'On all orders'     },
            { icon: '✦',  title: 'Curated Picks',  sub: 'Expert selected'   },
            { icon: '↩',  title: 'Easy Returns',   sub: '30-day policy'     },
            { icon: '🔒', title: 'Secure Pay',      sub: '100% protected'   },
          ].map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4"
              style={{
                opacity: statsVisible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 0.12}s`,
              }}
            >
              <span className="text-xl mt-0.5 shrink-0">{f.icon}</span>
              <div>
                <p className="text-[12px] font-medium text-[#c8c4bc] mb-0.5">{f.title}</p>
                <p className="text-[10px] text-[#444440] uppercase tracking-widest">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-28 text-center relative overflow-hidden"
        style={{
          opacity: statsVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(200,184,154,0.05) 0%, transparent 65%)' }}
        />
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8b89a] mb-5">The Collection Awaits</p>
        <h3
          className="text-4xl sm:text-5xl font-semibold text-[#f0ede6] mb-5 mx-auto"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-1px', maxWidth: '600px' }}
        >
          Your wardrobe deserves better.
        </h3>
        <p className="text-sm text-[#555550] font-light mb-10 max-w-sm mx-auto leading-relaxed">
          Join thousands who've elevated their everyday style with Velvora's curated picks.
        </p>
        <Link
          to="/home"
          className="inline-block px-10 py-4 bg-[#c8b89a] text-[#111110] text-[11px] uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-[#f0ede6] transition-all duration-300 hover:shadow-[0_0_48px_rgba(200,184,154,0.3)]"
        >
          Start Shopping
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1e1e1c] px-6 sm:px-12 lg:px-20 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p
            className="text-sm font-semibold text-[#f0ede6] mb-0.5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Velvora
          </p>
          <p className="text-[10px] text-[#333330] uppercase tracking-widest">© 2024 All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map((l) => (
            <span
              key={l}
              className="text-[10px] uppercase tracking-widest text-[#333330] hover:text-[#666660] transition-colors duration-200 cursor-pointer"
            >
              {l}
            </span>
          ))}
        </div>
      </footer>

    </div>
  )
}