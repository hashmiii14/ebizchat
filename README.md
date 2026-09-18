# Orizer ERP — eBizChat

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Meta API](https://img.shields.io/badge/WhatsApp_Business_API-Meta_Verified-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://developers.facebook.com/)
[![Orizer ERP](https://img.shields.io/badge/Orizer_ERP-Enterprise_Ready-1e293b?style=for-the-badge)](https://orizer.in/)

> Unified WhatsApp Communication, Multi-Channel Lead Management, and Factory ERP Sync for High-Growth Manufacturing & B2B Enterprises.

Official Orizer Website: [https://orizer.in/](https://orizer.in/)  
GitHub Repository: [https://github.com/hashmiii14/ebizchat](https://github.com/hashmiii14/ebizchat)

---

## 1. Executive Summary

**Orizer eBizChat** transforms how modern B2B manufacturers and fast-scaling enterprises engage customers, qualify inbound prospects, and close orders. Seamlessly integrated with **Orizer's Enterprise ERP suite** (trusted across 220+ projects, 2,810+ active enterprise users, and 494+ awards), eBizChat connects verified WhatsApp Business API channels directly to factory shop floors, inventory ledgers, CRM dispatch pipelines, and payment collection.

---

## 2. Complete Website Architecture (25 Dedicated Routes)

### Core Hub & Flagship Pages
- **Home (`/`)**: Enterprise B2B homepage with light-mode visual hierarchy, verified Orizer statistics, live interactive WhatsApp Web simulator (ERP invoice & dispatch notifications), 4 feature showcases, manufacturing case studies, testimonial wall, and FAQ.
- **LeadGen+ (`/leadgen`)**: Inbound conversion engine inspired by Cunnekt's LeadGen+, showcasing multi-channel lead ingestion (Meta Ads, Indiamart, TradeIndia, Justdial), automated 15-second WhatsApp engagement, dynamic SLA tracking, and team attribution.
- **Pricing (`/pricing`)**: Transparent B2B pricing tiers (Starter ₹1,999/mo, Growth ₹4,999/mo, Enterprise Custom) with billing switch, full feature matrix, and Meta API conversation cost guidelines.
- **Resources (`/resources`)**: Whitepapers, implementation checklists, WhatsApp template libraries, and API guides.
- **Blog (`/blog`)**: Actionable B2B playbooks on manufacturing CRM, WhatsApp marketing compliance, and ERP dispatch automation.
- **FAQ (`/faq`)**: Comprehensive searchable and categorized FAQ repository.
- **Case Studies (`/case-studies`)**: Verified customer success stories (including Apex Industrial Dynamics: 38% faster lead response and ₹1.4 Cr recovered pipeline).
- **About Orizer (`/about`)**: Company background, leadership values, Head Office in Vapi, Gujarat, verified metrics, and ERP lineage.
- **Contact Sales (`/contact`)**: Verified corporate contact details, interactive consultation booking form, and department phone directory.
- **Legal (`/privacy`, `/terms`)**: Production-grade compliance documentation, Meta Business Terms, and data sovereignty safeguards.
- **404 Not Found (`*`)**: Clean custom light-theme error fallback page with quick navigation back to core routes.

### Features Hub (`/features`) & 7 Deep-Dive Sub-Pages
1. **WhatsApp Marketing (`/features/whatsapp-marketing`)**: High-throughput broadcasts, green-tick verification, audience segmentation, click-to-WhatsApp ads.
2. **Lead Management & CRM (`/features/lead-management`)**: Visual Kanban boards, lead scoring, automatic assignment, SLA escalations.
3. **Conversational Chatbot (`/features/chatbot`)**: No-code drag-and-drop conversational designer with human fallback and ERP query nodes.
4. **Shared Team Inbox (`/features/team-inbox`)**: Multi-agent collaborative console with internal notes, canned replies, and agent collisions prevention.
5. **Workflow Automation (`/features/automation`)**: Trigger-action builder syncing WhatsApp events with webhooks, Zapier, and factory databases.
6. **Analytics & Reporting (`/features/analytics`)**: Real-time deliverability dashboards, agent productivity metrics, response SLAs, and campaign ROI.
7. **Enterprise Integrations (`/features/integrations`)**: Native connectivity for Orizer ERP, Tally, SAP, Zoho, Salesforce, IndiaMart, and Shopify.

### Solutions Hub (`/solutions`) & 5 Industry Sub-Pages
1. **Manufacturing & Industrial (`/solutions/manufacturing`)**: Primary spotlight — production dispatch alerts, gate pass issuance, PO status updates, and dealer broadcast networks.
2. **E-Commerce & D2C (`/solutions/ecommerce`)**: Abandoned cart recovery, automated COD-to-prepaid conversion, and 1-click order tracking.
3. **Education & EdTech (`/solutions/education`)**: Admission inquiry qualification, fee payment reminders, and student counseling workflows.
4. **Real Estate & Infrastructure (`/solutions/real-estate`)**: Site visit booking, brochure sharing, automated follow-ups, and channel partner pipelines.
5. **Professional & Healthcare Services (`/solutions/services`)**: Appointment scheduling, prescription/report dispatch, and retainer billing updates.

---

## 3. Tech Stack & Engineering Standards

- **Frontend**: React 18.3.1, React Router DOM 6.27, Vite 5.4
- **Styling**: Tailwind CSS 3.4, PostCSS, Autoprefixer
- **Icons**: Lucide React (Strict Rule: 100% SVG icons — ZERO emojis anywhere in the UI)
- **Theme**: Strict Clean Light Theme (Slate-900 typography, Emerald/Teal accents, crisp white cards, subtle border borders)
- **Animations**: Framer Motion 11.11
- **API Bridges**: Vercel Serverless Function (`api/contact.js`) with client-side graceful fallback and persistent local state

---

## 4. Local Development

```bash
# Clone the repository
git clone https://github.com/hashmiii14/ebizchat.git
cd ebizchat

# Install dependencies
npm install

# Start local Vite development server
npm run dev
```

Visit `http://localhost:3000` in your web browser.

---

## 5. Production Build & Deployment Guide

```bash
# Compile and optimize production build
npm run build

# Preview production build locally
npm run preview
```

### Manual Vercel Deployment

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** → **Project**.
3. Select and import the `hashmiii14/ebizchat` GitHub repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

`vercel.json` is already pre-configured with SPA client-side route rewrites:
```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 6. Official Orizer Verification & Contact Details

- **Company Name**: Orizer (Orizer ERP)
- **Product**: eBizChat
- **Headquarters**: 214-A, 2nd Floor, Fortune Square 2, Vapi, Gujarat 396195, India
- **Sales & Support Phone**:
  - `+91 96245 13385`
  - `+91 98982 36655`
  - `+91 97379 11132`
- **Email**: `sales@orizer.in` / `support@orizer.in`
- **Website**: [https://orizer.in/](https://orizer.in/)

---

© 2026 Orizer. All rights reserved. Built with precision for modern manufacturing and enterprise operations.
