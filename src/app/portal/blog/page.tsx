"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/types";
import { Loader2, Save, Plus, Trash2 } from "lucide-react";

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/cms/content?resource=blog.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/cms/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resource: "blog.json", data: posts }),
    });
    setSaving(false);
    alert("Blog posts saved successfully!");
  };

  const handleUpdate = (index: number, field: string, value: string) => {
    const updated = [...posts];
    updated[index] = { ...updated[index], [field]: value } as any;
    setPosts(updated);
  };

  if (loading) {
    return <div className="text-white flex items-center gap-2"><Loader2 className="animate-spin" /> Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Blog Posts</h1>
          <p className="text-gray-400 mt-2">Manage your articles and SEO content.</p>
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
        {posts.map((post, index) => (
          <div key={post.slug} className="p-6 bg-brand-purpleDark/50 border border-white/10 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Post: {post.title || `New ${index + 1}`}</h2>
              <button
                onClick={() => {
                  const updated = [...posts];
                  updated.splice(index, 1);
                  setPosts(updated);
                }}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  value={post.title}
                  onChange={(e) => handleUpdate(index, "title", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Category</label>
                <input
                  type="text"
                  value={post.category}
                  onChange={(e) => handleUpdate(index, "category", e.target.value)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Author Name</label>
                <input
                  type="text"
                  value={post.author?.name}
                  onChange={(e) => handleUpdate(index, "author", { ...post.author, name: e.target.value } as any)}
                  className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Summary</label>
              <textarea
                value={post.summary}
                onChange={(e) => handleUpdate(index, "summary", e.target.value)}
                className="w-full px-3 py-2 bg-brand-navy border border-white/10 rounded-md text-white h-20"
              />
            </div>
          </div>
        ))}

        <button
          onClick={() => {
            setPosts([
              ...posts,
              {
                slug: `new-post-${Date.now()}`,
                title: "New Blog Post",
                category: "Marketing",
                summary: "Summary here",
                content: ["Content goes here"],
                author: { name: "Admin", role: "Author" },
                publishedAt: new Date().toISOString().split('T')[0],
                readTime: "5 min read",
                keywords: []
              }
            ]);
          }}
          className="w-full py-4 border-2 border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 flex items-center justify-center gap-2 transition-colors font-bold"
        >
          <Plus className="w-5 h-5" /> Add Post
        </button>
      </div>
    </div>
  );
}
