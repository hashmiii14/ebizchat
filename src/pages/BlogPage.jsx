import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  User,
  BookOpen,
} from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEOHead from '../components/ui/SEOHead';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Automation', 'Lead Generation', 'WhatsApp API', 'CRM & Sales', 'Manufacturing', 'Digital Transformation'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title="Blog & Insights | WhatsApp Automation & Lead Generation"
        description="Explore enterprise guides, B2B lead generation tactics, WhatsApp Business API compliance, and ERP synchronization playbooks by Orizer."
        canonicalPath="/blog"
      />

      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', path: '/resources' },
              { label: 'Blog & Insights' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-18 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Orizer B2B Knowledge & Playbooks</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              The Modern Business Automation Journal
            </h1>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Practical guides and operational breakdowns for scaling manufacturing communication, customer messaging, and ERP efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="border-y border-slate-200 bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* ─── FEATURED POST (HERO ARTICLE) ─── */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-float text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                    Featured Guide
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 text-xs font-mono">
                    {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-[10px]">
                    eB
                  </div>
                  <span>{featuredPost.author.name} · {featuredPost.author.role}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-btn inline-flex items-center gap-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── ARTICLE GRID ─── */}
      <section className="py-14 bg-slate-50/70 border-t border-slate-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 uppercase">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              No articles found matching your search. Try adjusting the category or search keywords.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}