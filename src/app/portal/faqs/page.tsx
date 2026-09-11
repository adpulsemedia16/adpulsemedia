"use client";

import React, { useState, useEffect } from "react";
import { FAQItem } from "@/types";
import { Loader2, Save, Plus, Trash2, GripVertical } from "lucide-react";

export default function AdminFaqs() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/cms/content?resource=faqs.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/cms/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "faqs.json", data: faqs }),
    });
    setSaving(false);
    alert("FAQs saved successfully!");
  };

  const handleUpdate = (index: number, field: string, value: string) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  };

  if (loading) {
    return <div className="text-white flex items-center gap-2"><Loader2 className="animate-spin" /> Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">FAQs</h1>
          <p className="text-gray-400 mt-2">Manage frequently asked questions.</p>
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

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="p-4 bg-brand-purpleDark/50 border border-white/10 rounded-xl flex gap-4">
            <div className="mt-2 text-gray-500 cursor-move">
              <GripVertical className="w-5 h-5" />
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Question</label>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => handleUpdate(index, "question", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Answer</label>
                <textarea
                  value={faq.answer}
                  onChange={(e) => handleUpdate(index, "answer", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white h-20"
                />
              </div>
            </div>

            <button
              onClick={() => {
                const updated = [...faqs];
                updated.splice(index, 1);
                setFaqs(updated);
              }}
              className="text-red-400 hover:text-red-300 h-fit mt-2"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button
          onClick={() => {
            setFaqs([
              ...faqs,
              {
                id: `faq-${Date.now()}`,
                question: "New Question?",
                answer: "Answer goes here.",
              }
            ]);
          }}
          className="w-full py-4 border-2 border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 flex items-center justify-center gap-2 transition-colors font-bold"
        >
          <Plus className="w-5 h-5" /> Add FAQ
        </button>
      </div>
    </div>
  );
}
