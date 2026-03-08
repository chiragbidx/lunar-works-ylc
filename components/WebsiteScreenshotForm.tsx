"use client";

import { useState, useRef } from "react";

export default function WebsiteScreenshotForm() {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setImage(null);
    if (!url || !/^https?:\/\//i.test(url)) {
      setError("Please enter a valid URL (including https://)");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/capture", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to capture screenshot.");
      const data = await res.json();
      if (!data.imageUrl) throw new Error("No screenshot returned.");
      setImage(data.imageUrl);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <label className="block text-sm font-medium mb-1 text-[#c75829]" htmlFor="snaplytics-url">
        Website URL
      </label>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="flex-1 rounded-lg border border-[#fb7232]/40 bg-white px-3 py-2 text-sm text-[#33170a] outline-none ring-0 transition focus:border-[#fb7232] focus:shadow-[0_0_0_3px_rgba(251,114,50,0.12)]"
          id="snaplytics-url"
          placeholder="https://your-website.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="url"
          required
          autoFocus
        />
        <button
          disabled={loading}
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-[#fb7232] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e06225] hover:shadow-md disabled:opacity-60"
        >
          {loading ? "Capturing..." : "Capture Screenshot"}
        </button>
      </div>
      {error && <div className="text-xs text-red-700">{error}</div>}
      {image && (
        <div className="rounded-xl mt-4 border border-[#fb7232]/25 p-2 bg-gradient-to-r from-[#ffe7dd] via-white to-[#ffd9c6] shadow">
          <img
            src={image}
            alt="Website screenshot"
            className="w-full rounded object-contain"
            style={{ maxHeight: 350 }}
          />
          <a
            href={image}
            download="website-screenshot.png"
            className="block mt-3 px-4 py-2 rounded bg-[#fb7232] text-white text-center text-xs font-semibold shadow hover:bg-[#e06225]"
          >
            Download PNG
          </a>
        </div>
      )}
    </form>
  );
}