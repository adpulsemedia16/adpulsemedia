"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Save } from "lucide-react";

export default function AdminSettings() {
  const [siteConfig, setSiteConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content?resource=site.json")
      .then((res) => res.json())
      .then((data) => {
        setSiteConfig(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "site.json", data: siteConfig }),
    });
    setSaving(false);
    alert("Settings saved successfully!");
  };

  const handleUpdate = (section: string, field: string, value: string) => {
    setSiteConfig((prev: any) => ({
      ...prev,
      siteConfig: {
        ...prev.siteConfig,
        [section]: {
          ...prev.siteConfig[section],
          [field]: value
        }
      }
    }));
  };

  if (loading) {
    return <div className="text-white flex items-center gap-2"><Loader2 className="animate-spin" /> Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Site Settings</h1>
          <p className="text-gray-400 mt-2">Manage global contact information and metrics.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-brand-magenta text-white rounded-lg font-bold hover:bg-brand-pink transition-colors disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-brand-purpleDark/50 border border-white/10 rounded-xl space-y-4">
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Display Phone Number</label>
              <input
                type="text"
                value={siteConfig.siteConfig.contact.phoneDisplay}
                onChange={(e) => handleUpdate("contact", "phoneDisplay", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">WhatsApp Number (No spaces)</label>
              <input
                type="text"
                value={siteConfig.siteConfig.contact.whatsappNumber}
                onChange={(e) => handleUpdate("contact", "whatsappNumber", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Email Address</label>
              <input
                type="text"
                value={siteConfig.siteConfig.contact.email}
                onChange={(e) => handleUpdate("contact", "email", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Address</label>
              <input
                type="text"
                value={siteConfig.siteConfig.contact.address}
                onChange={(e) => handleUpdate("contact", "address", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
