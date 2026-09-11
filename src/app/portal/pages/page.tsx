"use client";

import React, { useState, useEffect } from "react";
import { Save, Loader2, FileText, CheckCircle2 } from "lucide-react";

export default function PagesAdmin() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"home" | "about" | "contact">("home");

  useEffect(() => {
    fetch("/api/cms/content?resource=site.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.pages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load pages data:", err);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      // First fetch the full site.json to preserve other fields
      const res = await fetch("/api/cms/content?resource=site.json");
      const fullSite = await res.json();
      fullSite.pages = data;

      const saveRes = await fetch("/api/cms/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resource: "site.json",
          data: fullSite,
        }),
      });

      if (!saveRes.ok) throw new Error("Failed to save");
      setMessage({ type: "success", text: "Page content updated successfully!" });
    } catch (error) {
      console.error("Save error:", error);
      setMessage({ type: "error", text: "Failed to save changes. Please try again." });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const updateField = (page: string, section: string, field: string, value: string) => {
    setData((prev: any) => ({
      ...prev,
      [page]: {
        ...prev[page],
        [section]: {
          ...prev[page][section],
          [field]: value,
        },
      },
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-brand-magenta" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <FileText className="w-8 h-8 text-brand-magenta" />
            Page Content
          </h1>
          <p className="text-gray-400 mt-2">Manage the text content for the static pages.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 bg-brand-magenta hover:bg-brand-pink text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-magenta/20 disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 border ${
            message.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}
        >
          {message.type === "success" && <CheckCircle2 className="w-5 h-5" />}
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      <div className="flex border-b border-white/10 mb-6">
        {["home", "about", "contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 font-semibold capitalize border-b-2 transition-colors ${
              activeTab === tab
                ? "border-brand-magenta text-brand-pink"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab} Page
          </button>
        ))}
      </div>

      <div className="bg-[#130028] border border-white/10 rounded-2xl p-6">
        {activeTab === "home" && data.home && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Hero Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={data.home.hero.heading}
                    onChange={(e) => updateField("home", "hero", "heading", e.target.value)}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Subheading</label>
                  <textarea
                    value={data.home.hero.subheading}
                    onChange={(e) => updateField("home", "hero", "subheading", e.target.value)}
                    rows={3}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-y"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">About Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={data.home.about.heading}
                    onChange={(e) => updateField("home", "about", "heading", e.target.value)}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Text Copy</label>
                  <textarea
                    value={data.home.about.text}
                    onChange={(e) => updateField("home", "about", "text", e.target.value)}
                    rows={4}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-y"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "about" && data.about && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Hero Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={data.about.hero.heading}
                    onChange={(e) => updateField("about", "hero", "heading", e.target.value)}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Subheading</label>
                  <textarea
                    value={data.about.hero.subheading}
                    onChange={(e) => updateField("about", "hero", "subheading", e.target.value)}
                    rows={3}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-y"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Mission Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={data.about.mission.heading}
                    onChange={(e) => updateField("about", "mission", "heading", e.target.value)}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Text Copy</label>
                  <textarea
                    value={data.about.mission.text}
                    onChange={(e) => updateField("about", "mission", "text", e.target.value)}
                    rows={4}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-y"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && data.contact && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Hero Section</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Heading</label>
                  <input
                    type="text"
                    value={data.contact.hero.heading}
                    onChange={(e) => updateField("contact", "hero", "heading", e.target.value)}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Subheading</label>
                  <textarea
                    value={data.contact.hero.subheading}
                    onChange={(e) => updateField("contact", "hero", "subheading", e.target.value)}
                    rows={3}
                    className="w-full bg-[#1a0033] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-y"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
