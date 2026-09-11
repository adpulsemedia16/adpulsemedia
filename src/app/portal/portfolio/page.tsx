"use client";

import React, { useState, useEffect, useRef } from "react";
import { PortfolioProject } from "@/types";
import {
  Loader2,
  Save,
  Plus,
  Trash2,
  Upload,
  Image as ImageIcon,
  Video,
  X,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────
// File Upload Component
// ─────────────────────────────────────────────
interface FileUploadProps {
  label: string;
  accept: string;
  folder: string;
  currentUrl?: string | null;
  type: "image" | "video";
  onUploaded: (url: string) => void;
  onRemove: () => void;
}

function FileUpload({
  label,
  accept,
  folder,
  currentUrl,
  type,
  onUploaded,
  onRemove,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("bucket", "portfolio-media");
      fd.append("folder", folder);

      const res = await fetch("/api/cms/upload", { method: "POST", body: fd });
      const json = await res.json();

      if (!res.ok || json.error) throw new Error(json.error || "Upload failed");
      onUploaded(json.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-gray-400">{label}</label>

      {/* Preview */}
      {currentUrl && (
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30">
          {type === "image" ? (
            <div className="relative h-36 w-full">
              <Image
                src={currentUrl}
                alt="Thumbnail preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <video
              src={currentUrl}
              className="w-full h-36 object-cover"
              controls
              muted
            />
          )}
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 flex items-center justify-center hover:bg-red-600 transition-colors"
            title="Remove"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      )}

      {/* Upload button */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          e.target.value = "";
        }}
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-sm text-gray-300 hover:text-white transition-all active:scale-[0.97] disabled:opacity-50"
      >
        {uploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : type === "image" ? (
          <ImageIcon className="w-4 h-4 text-brand-pink" />
        ) : (
          <Video className="w-4 h-4 text-brand-pink" />
        )}
        {uploading
          ? "Uploading…"
          : currentUrl
          ? `Replace ${type === "image" ? "Image" : "Video"}`
          : `Upload ${type === "image" ? "Thumbnail" : "Video"}`}
      </button>

      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" /> {error}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Category options
// ─────────────────────────────────────────────
const CATEGORIES = [
  "real-estate",
  "construction",
  "websites",
  "social-media",
  "branding",
  "video",
] as const;

// ─────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────
function Toast({ msg, ok }: { msg: string; ok: boolean }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold border backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200 ${
        ok
          ? "bg-green-500/20 border-green-500/30 text-green-300"
          : "bg-red-500/20 border-red-500/30 text-red-300"
      }`}
    >
      {ok ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
      {msg}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function AdminPortfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [dirty, setDirty] = useState(false);

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  // Load from Supabase via API
  useEffect(() => {
    fetch("/api/cms/content?resource=portfolio")
      .then((r) => r.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showToast("Failed to load portfolio data", false);
      });
  }, []);

  // Save to Supabase AND update local JSON cache
  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/cms/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resource: "portfolio", data: projects }),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || "Save failed");
      setDirty(false);
      showToast("Portfolio saved to Supabase ✓");
    } catch (err: any) {
      showToast(err.message, false);
    } finally {
      setSaving(false);
    }
  };

  const update = (index: number, patch: Partial<PortfolioProject>) => {
    setProjects((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...patch };
      return next;
    });
    setDirty(true);
  };

  const removeProject = (index: number) => {
    if (!confirm("Remove this project?")) return;
    setProjects((prev) => prev.filter((_, i) => i !== index));
    setDirty(true);
  };

  const addProject = () => {
    const ts = Date.now();
    setProjects((prev) => [
      ...prev,
      {
        id: `proj-${ts}`,
        slug: `new-project-${ts}`,
        title: "New Project",
        client: "Client Name",
        category: "real-estate",
        services: [],
        thumbnail: "",
        videoUrl: null,
        shortDescription: "Project description",
        resultMetric: "",
        resultLabel: "",
        isPlaceholder: true,
      },
    ]);
    setDirty(true);
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-400 py-12 justify-center">
        <Loader2 className="w-5 h-5 animate-spin" /> Loading portfolio…
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Portfolio</h1>
          <p className="text-gray-400 text-sm mt-1">
            {projects.length} project{projects.length !== 1 ? "s" : ""} — changes sync to Supabase on save
          </p>
        </div>
        <div className="flex items-center gap-3">
          {dirty && (
            <span className="text-xs text-yellow-400 flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> Unsaved changes
            </span>
          )}
          <button
            onClick={handleSave}
            disabled={saving || !dirty}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-magenta text-white rounded-xl font-bold text-sm hover:bg-brand-pink active:scale-[0.97] transition-all disabled:opacity-40"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? "Saving…" : "Save to Supabase"}
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="p-6 bg-[#130028]/80 border border-white/8 rounded-2xl space-y-5"
          >
            {/* Card header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-brand-magenta/20 text-brand-pink text-xs font-black flex items-center justify-center">
                  {index + 1}
                </span>
                <h2 className="text-base font-bold text-white">
                  {project.title || "Untitled Project"}
                </h2>
                {project.isPlaceholder && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-semibold">
                    placeholder
                  </span>
                )}
              </div>
              <button
                onClick={() => removeProject(index)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                title="Remove project"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Media: Thumbnail + Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 rounded-xl bg-white/3 border border-white/5">
              <FileUpload
                label="Thumbnail Image"
                accept="image/jpeg,image/png,image/webp,image/gif"
                folder="thumbnails"
                type="image"
                currentUrl={project.thumbnail || null}
                onUploaded={(url) => update(index, { thumbnail: url })}
                onRemove={() => update(index, { thumbnail: "" })}
              />
              <FileUpload
                label="Project Video (optional)"
                accept="video/mp4,video/webm,video/quicktime"
                folder="videos"
                type="video"
                currentUrl={project.videoUrl ?? null}
                onUploaded={(url) => update(index, { videoUrl: url })}
                onRemove={() => update(index, { videoUrl: null })}
              />
            </div>

            {/* Text Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(
                [
                  { label: "Title", field: "title" },
                  { label: "Client", field: "client" },
                  { label: "Result Metric (e.g. 1200+)", field: "resultMetric" },
                  { label: "Result Label (e.g. Leads Generated)", field: "resultLabel" },
                ] as { label: string; field: keyof PortfolioProject }[]
              ).map(({ label, field }) => (
                <div key={field}>
                  <label className="block text-xs font-bold text-gray-400 mb-1">{label}</label>
                  <input
                    type="text"
                    value={(project[field] as string) ?? ""}
                    onChange={(e) => update(index, { [field]: e.target.value } as any)}
                    className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-lg text-white text-sm focus:border-brand-magenta/50 focus:outline-none transition-colors"
                  />
                </div>
              ))}

              {/* Category dropdown */}
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Category</label>
                <select
                  value={project.category}
                  onChange={(e) =>
                    update(index, { category: e.target.value as PortfolioProject["category"] })
                  }
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-lg text-white text-sm focus:border-brand-magenta/50 focus:outline-none transition-colors appearance-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c.replace("-", " ")}
                    </option>
                  ))}
                </select>
              </div>

              {/* Slug */}
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Slug</label>
                <input
                  type="text"
                  value={project.slug}
                  onChange={(e) => update(index, { slug: e.target.value })}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-lg text-white text-sm font-mono focus:border-brand-magenta/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">
                Short Description
              </label>
              <textarea
                value={project.shortDescription}
                onChange={(e) => update(index, { shortDescription: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-lg text-white text-sm focus:border-brand-magenta/50 focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Services tags */}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">
                Services (comma-separated)
              </label>
              <input
                type="text"
                value={project.services.join(", ")}
                onChange={(e) =>
                  update(index, {
                    services: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="Meta Ads, Google Ads, SEO"
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-lg text-white text-sm focus:border-brand-magenta/50 focus:outline-none transition-colors"
              />
              {project.services.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.services.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-brand-magenta/10 border border-brand-magenta/20 text-brand-pink font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Mark placeholder */}
            <label className="flex items-center gap-2 cursor-pointer w-fit">
              <input
                type="checkbox"
                checked={project.isPlaceholder}
                onChange={(e) => update(index, { isPlaceholder: e.target.checked })}
                className="accent-brand-magenta w-4 h-4"
              />
              <span className="text-xs text-gray-400">Mark as placeholder / sample project</span>
            </label>
          </div>
        ))}

        {/* Add project button */}
        <button
          onClick={addProject}
          className="w-full py-5 border-2 border-dashed border-white/15 hover:border-brand-magenta/40 rounded-2xl text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-all font-bold text-sm active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" /> Add Project
        </button>
      </div>

      {/* Bottom save */}
      {projects.length > 0 && (
        <div className="sticky bottom-0 pb-2 pt-4">
          <button
            onClick={handleSave}
            disabled={saving || !dirty}
            className="w-full py-3 flex items-center justify-center gap-2 bg-brand-magenta text-white rounded-xl font-bold text-sm hover:bg-brand-pink active:scale-[0.97] transition-all disabled:opacity-40 shadow-lg"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? "Saving to Supabase…" : "Save All Changes to Supabase"}
          </button>
        </div>
      )}

      {toast && <Toast {...toast} />}
    </div>
  );
}
