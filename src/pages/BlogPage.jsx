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
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPostId, setExpandedPostId] = useState(null);

  const categories = ['All', 'Manufacturing', 'Lead Generation', 'WhatsApp API', 'Customer Support'];

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
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', path: '/resources' },
              { label: 'Blog & Articles' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Orizer B2B Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              The Modern Business Automation Journal
            </h1>
            <p className="text-base text-slate-600 font-normal">
              Practical guides and architectural breakdowns for scaling manufacturing operations, customer messaging, and ERP efficiency.
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
                    ? 'bg-brand-600 text-white shadow-sm'
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
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>
      </div>

      {/* ─── FEATURED POST (HERO ARTICLE) ─── */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-float text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                    Featured Case
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white">
                    O
                  </div>
                  <span>{featuredPost.author.name} · {featuredPost.date}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() =>
                    setExpandedPostId(expandedPostId === featuredPost.id ? null : featuredPost.id)
                  }
                  className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shadow-btn inline-flex items-center gap-2"
                >
                  {expandedPostId === featuredPost.id ? 'Collapse Article' : 'Read Full Article'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* In-place full text accordion expansion */}
              {expandedPostId === featuredPost.id && (
                <div className="lg:col-span-12 pt-6 border-t border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed space-y-4 animate-in fade-in-50">
                  <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800 font-sans whitespace-pre-line">
                    {featuredPost.content}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── ARTICLE GRID ─── */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const isExpanded = expandedPostId === post.id;
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200 uppercase">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {post.excerpt}
                    </p>

                    {isExpanded && (
                      <div className="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-line animate-in fade-in-50 font-sans">
                        {post.content}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">{post.date}</span>
                    <button
                      onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700"
                    >
                      {isExpanded ? 'Close' : 'Read Article'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
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
