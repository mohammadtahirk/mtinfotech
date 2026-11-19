'use client';
import { useState } from 'react';
import { generateAdminNotificationEmail, generateClientAutoReplyEmail } from '../../lib/emailTemplates';

export default function EmailPreview() {
  const [activeTab, setActiveTab] = useState('autoReply'); // 'autoReply' or 'adminNotification'
  const [copied, setCopied] = useState(false);

  const sampleData = {
    name: 'Sarah Jenkins',
    email: 'sarah.j@techstartup.com',
    phone: '+1 (415) 890-1234',
    projectType: 'React / Next.js Web App',
    message: 'We are looking to rebuild our SaaS dashboard with Next.js 14 and Tailwind CSS. We need pixel-perfect responsiveness, high performance, and custom animated charts. Would love to discuss availability and rates.',
  };

  const adminHtml = generateAdminNotificationEmail(sampleData);
  const clientHtml = generateClientAutoReplyEmail(sampleData);

  const currentHtml = activeTab === 'autoReply' ? clientHtml : adminHtml;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-[#ffca9a] font-semibold bg-[#111] px-3.5 py-1.5 rounded-full shadow-inner inline-block mb-3">
          Custom Email Templates
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Portfolio Themed Email Templates
        </h1>
        <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Custom responsive HTML emails styled in Tahir's dark portfolio aesthetic (#111111, #ffca9a, #00ff88).
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#1b1b1b] border border-white/5 shadow-inner mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('autoReply')}
            className={`py-2 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'autoReply'
                ? 'bg-white text-black shadow-md'
                : 'bg-transparent text-white/70 hover:text-white'
            }`}
          >
            ✉️ Client Auto-Reply Email
          </button>
          <button
            onClick={() => setActiveTab('adminNotification')}
            className={`py-2 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'adminNotification'
                ? 'bg-white text-black shadow-md'
                : 'bg-transparent text-white/70 hover:text-white'
            }`}
          >
            📋 Admin Inquiry Notification
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto bg-[#242424] hover:bg-[#ffca9a] hover:text-black text-white text-xs sm:text-sm font-medium py-2 px-5 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
        >
          {copied ? '✓ Copied HTML!' : '📋 Copy Raw HTML'}
        </button>
      </div>

      {/* Live Email Render Frame */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <div className="bg-[#181818] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            <span className="ml-2 font-mono text-white/40">
              {activeTab === 'autoReply' ? 'Client-Auto-Reply-Preview.html' : 'Admin-Notification-Preview.html'}
            </span>
          </div>
          <span>Responsive Preview (600px max)</span>
        </div>

        <div className="p-4 sm:p-8 bg-[#0c0c0c] min-h-[500px] flex justify-center">
          <iframe
            srcDoc={currentHtml}
            title="Email Template Live Preview"
            className="w-full max-w-[620px] min-h-[720px] rounded-xl border border-white/5 shadow-2xl bg-[#0c0c0c]"
          />
        </div>
      </div>
    </div>
  );
}
