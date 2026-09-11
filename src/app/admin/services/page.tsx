"use client";

import React, { useState, useEffect } from "react";
import { ServiceGroup } from "@/types";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

export default function AdminServices() {
  const [services, setServices] = useState<ServiceGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content?resource=services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "services.json", data: services }),
    });
    setSaving(false);
    alert("Services saved successfully!");
  };

  const handleUpdate = (index: number, field: string, value: string) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  if (loading) {
    return <div className="text-white flex items-center gap-2"><Loader2 className="animate-spin" /> Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Services</h1>
          <p className="text-gray-400 mt-2">Manage your core service offerings.</p>
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
        {services.map((service, index) => (
          <div key={service.id} className="p-6 bg-brand-purpleDark/50 border border-white/10 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Service {index + 1}</h2>
              <button
                onClick={() => {
                  const updated = [...services];
                  updated.splice(index, 1);
                  setServices(updated);
                }}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => handleUpdate(index, "title", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Tagline</label>
                <input
                  type="text"
                  value={service.tagline}
                  onChange={(e) => handleUpdate(index, "tagline", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Short Description</label>
              <textarea
                value={service.shortDescription}
                onChange={(e) => handleUpdate(index, "shortDescription", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white h-24"
              />
            </div>
          </div>
        ))}

        <button
          onClick={() => {
            setServices([
              ...services,
              {
                id: `new-${Date.now()}`,
                slug: `new-service-${Date.now()}`,
                title: "New Service",
                tagline: "Service Tagline",
                shortDescription: "Description here",
                iconName: "Sparkles",
                deliverables: [],
                benefits: [],
                subServices: [],
              },
            ]);
          }}
          className="w-full py-4 border-2 border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 flex items-center justify-center gap-2 transition-colors font-bold"
        >
          <Plus className="w-5 h-5" /> Add Service
        </button>
      </div>
    </div>
  );
}
