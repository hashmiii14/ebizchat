import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  Sparkles,
  MessageSquare,
  Building2,
  Tag,
  CheckCircle2,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEOHead from '../components/ui/SEOHead';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPostPage({ onOpenDemoModal, onOpenContactModal }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <SEOHead title="Article Not Found" />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
          <span className="font-mono text-xs font-bold text-emerald-600 uppercase tracking-wider">
            404 · Content Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Article Not Found</h1>
          <p className="text-sm text-slate-600">
            The article you are looking for may have moved or is no longer available.
          </p>
          <div className="pt-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog & Insights</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const currentUrl = `https://ebizchat.vercel.app/blog/${post.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', path: '/resources' },
              { label: 'Blog', path: '/blog' },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Category Badge & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 text-xs font-mono flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 text-left">
          {post.title}
        </h1>

        {/* Excerpt Lead Paragraph */}
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 text-left border-l-4 border-emerald-500 pl-4 py-1">
          {post.excerpt}
        </p>

        {/* Author Card & Share Actions */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              eB
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs sm:text-sm">
                {post.author.name}
              </div>
              <div className="text-[11px] text-slate-500 font-normal">
                {post.author.role} · Orizer Infotech
              </div>
            </div>
          </div>

          {/* Social Share Strip */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
            <span className="text-[11px] text-slate-500 font-semibold mr-1">Share:</span>
            
            {/* WhatsApp Share */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${post.title} - Read more: ${currentUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white flex items-center justify-center transition-colors"
              title="Share on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Twitter Share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
              title="Share on X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="mb-10 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/90 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                Executive Takeaways
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="text-left text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
          <div
            className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-strong:text-slate-900 prose-li:my-1"
          >
            {post.content.split('\n\n').map((para, index) => {
              const trimmed = para.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-900 mt-8 mb-3">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">
                    {trimmed.replace('## ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n- ');
                return (
                  <ul key={index} className="space-y-1.5 my-4 list-disc pl-5">
                    {items.map((it, i) => (
                      <li key={i} className="text-slate-700">
                        {it.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.match(/^[0-9]+\./)) {
                const items = trimmed.split(/\n[0-9]+\./);
                return (
                  <ol key={index} className="space-y-2 my-4 list-decimal pl-5">
                    {items.map((it, i) => (
                      <li key={i} className="text-slate-700">
                        {it.replace(/^[0-9]+\./, '').trim()}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-slate-700 leading-relaxed font-normal">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        {/* In-Article Conversion Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white text-left shadow-float relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wide">
              <span>Ready to Automate WhatsApp?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Connect WhatsApp to Your Core Business with eBizChat by Orizer
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Experience the power of a shared multi-agent inbox, automated qualification pipelines, and native Orizer ERP synchronization in your business.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-1.5"
              >
                <span>Book a Guided Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenContactModal}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                Talk to Sales Team
              </button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Tags:</span>
            {post.tags &&
              post.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                  #{t}
                </span>
              ))}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <span className="font-mono text-xs font-bold uppercase text-emerald-600 tracking-wider">
                Related Reading
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
                More Articles & Insights
              </h3>
            </div>
            <Link
              to="/blog"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-left flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold uppercase">
                      {rel.category}
                    </span>
                    <span className="text-slate-400">{rel.readTime}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal mb-4">
                    {rel.excerpt}
                  </p>
                </div>
                <Link
                  to={`/blog/${rel.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}