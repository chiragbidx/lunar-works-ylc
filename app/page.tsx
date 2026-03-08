// Server Component: keep layout/content server-rendered.
// Main Snaplytics landing with features grid, hero, screenshot form, footer, and owner/contact.
import { Suspense } from "react";
import WebsiteScreenshotForm from "../components/WebsiteScreenshotForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-[#ffe6d8] text-zinc-900">
      <main className="flex min-h-screen w-full flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16 lg:max-w-[1600px] lg:mx-auto">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#fb7232]/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-2xl font-black tracking-tight text-[#fb7232]">Snaplytics</span>
            </div>
            <p className="text-sm font-semibold text-[#c75829] sm:text-base">
              Instantly capture any website screenshot. Effortless &amp; production‑ready.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end w-full sm:w-auto">
            <a
              href="#features"
              className="w-full sm:w-auto text-center rounded-full border border-[#fb7232]/30 bg-white px-4 py-2 text-sm font-semibold text-[#c75829] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Features
            </a>
            <a
              href="#get-started"
              className="w-full sm:w-auto text-center rounded-full bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md"
            >
              Get started
            </a>
          </div>
        </header>

        {/* HERO & Screenshot Form */}
        <section className="grid min-h-[480px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" id="get-started">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232] shadow-sm">
              The simplest website screenshot tool
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#3f1b08] sm:text-5xl">
              Get pixel‑perfect screenshots <span className="text-[#fb7232]">from any URL</span>, in seconds.
            </h1>
            <p className="max-w-3xl text-lg leading-7 text-zinc-700">
              No browser extensions. No hassle. Enter a URL—Snaplytics captures your site’s screenshot instantly, powered by next‑gen browserless cloud.
            </p>
          </div>
          <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl border border-[#fb7232]/30 bg-white/70 shadow-md p-4">
            <Suspense>
              <WebsiteScreenshotForm />
            </Suspense>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#fb7232] mb-6 text-center">
            All Snaplytics Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Instant URL Screenshots"
              desc="Paste any public website address and get a high-resolution screenshot instantly in your browser."
              accent="bg-[#fb7232]/10 text-[#fb7232]"
            />
            <FeatureCard
              title="PNG Image Output"
              desc="All screenshots are delivered in crisp PNG format, ready to download, share, or embed."
              accent="bg-[#1e88e5]/10 text-[#1e88e5]"
            />
            <FeatureCard
              title="Cloud-Powered Backend"
              desc="Screenshots created using secure, scalable browserless cloud (Browserless API) with zero setup."
              accent="bg-[#43a047]/10 text-[#43a047]"
            />
            <FeatureCard
              title="No Signup Needed"
              desc="Try it instantly! No registration, payments, or logins required for basic usage."
              accent="bg-[#c75829]/10 text-[#c75829]"
            />
            <FeatureCard
              title="Easy API Integration"
              desc="Developers: POST any URL to our secure `/api/capture` endpoint to automate screenshot flows."
              accent="bg-[#ffab00]/10 text-[#ffab00]"
            />
            <FeatureCard
              title="Mobile &amp; Desktop Responsive"
              desc="The Snaplytics UI adapts for any screen—use it at home or on the go, always accessible."
              accent="bg-[#6d4c41]/10 text-[#6d4c41]"
            />
            <FeatureCard
              title="Pro-Level Accuracy"
              desc="Uses real browser rendering for pixel-perfect, up-to-date shots—no static HTML hacks."
              accent="bg-[#7b1fa2]/10 text-[#7b1fa2]"
            />
            <FeatureCard
              title="Secure &amp; Private"
              desc="We never expose your API keys in the browser; all screenshot calls are server-proxied and stateless."
              accent="bg-[#00838f]/10 text-[#00838f]"
            />
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="rounded-2xl border border-[#fb7232]/20 bg-white/80 px-6 py-10 shadow-sm sm:px-10 mt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">
                How Snaplytics works
              </p>
              <h3 className="text-xl font-bold text-[#341404]">Cloud screenshots, in a snap</h3>
              <ol className="list-decimal list-inside text-[#6a3515] text-sm mt-2 space-y-1">
                <li>Paste any public website URL</li>
                <li>Click <span className="font-semibold">Capture Screenshot</span></li>
                <li>Our server action contacts Browserless, renders a fresh browser image, and returns it instantly</li>
                <li>Download or reuse the image as you like!</li>
              </ol>
            </div>
            <div className="hidden sm:block w-full max-w-md">
              <img src="https://pixabay.com/get/g8b45f015d68e8582153f70c4eb87510023a1d9478058ee5e04b77c37222685f6fb2453356800c4c2a2192532f32f344bf2a1a3b599bd105ac17dc8427791c8d3_640.jpg" alt="Website screenshot illustration" className="rounded-xl w-full shadow-md" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <section
          className="rounded-2xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-12 text-[#33170a] shadow-sm sm:px-12 mt-12"
        >
          <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Questions?</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Contact the Snaplytics team</h2>
              <p className="text-base text-[#6a3515]">
                Built and operated by Chirag Dodiya. For support or API access, reach out anytime.
              </p>
            </div>
            <div className="grid gap-4 rounded-xl border border-[#fb7232]/20 bg-white/80 p-6 text-sm shadow-sm sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Owner</p>
                <span className="block text-[#5a2a12] font-semibold">Chirag Dodiya</span>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="mailto:chirag@bidx.ai">
                  chirag@bidx.ai
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c75829]">Resources</p>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="#features">
                  Features
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="#how">
                  How it works
                </a>
                <a className="block text-[#5a2a12] transition hover:text-[#fb7232]" href="mailto:chirag@bidx.ai">
                  Support
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center border-t border-[#fb7232]/15 pt-6 text-center text-xs text-[#6a3515]">
            <span>Built with Snaplytics • MIT licensed • Instantly capture, share, and download website screenshots</span>
          </div>
        </section>
      </main>
    </div>
  );
}

// Feature card component
function FeatureCard({ title, desc, accent }: { title: string; desc: string; accent: string }) {
  return (
    <div className={`rounded-xl border border-[#fb7232]/20 bg-white/80 p-5 shadow-sm flex flex-col gap-2`}>
      <span className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded ${accent}`}>{title}</span>
      <p className="font-semibold text-[#4b1f0a]">{desc}</p>
    </div>
  );
}