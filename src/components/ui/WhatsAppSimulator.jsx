import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCheck,
  Lock,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Send,
  FileText,
  BadgeCheck,
  Truck,
  Download,
  Clock,
  Building2,
} from 'lucide-react';

const SIMULATION_MESSAGES = [
  {
    sender: 'user',
    text: 'Hi Orizer team, can you check dispatch status for our PO #OZ-8821?',
    delay: 1000,
  },
  {
    sender: 'bot',
    text: 'Hello! Checking Orizer ERP for Purchase Order #OZ-8821 (Acme Dynamics Pvt Ltd)...',
    delay: 1400,
  },
  {
    sender: 'bot',
    isCard: true,
    cardData: {
      type: 'dispatch',
      title: 'Dispatched via V-Trans Cargo',
      poNumber: '#OZ-8821',
      items: '50x High-Pressure Flange Valves',
      lrNumber: 'LR-994201',
      vehicle: 'GJ-15-BT-4420',
      eta: 'Tomorrow, 11:30 AM',
      docName: 'Tax_Invoice_INV-8821.pdf',
    },
    delay: 1800,
  },
  {
    sender: 'user',
    text: 'Received the LR copy. Can you also share our current ledger outstanding balance?',
    delay: 2200,
  },
  {
    sender: 'bot',
    text: 'Your current ledger balance as of today is ₹1,48,200 (within standard 30-day credit limit). Verified statement attached below.',
    delay: 1500,
  },
  {
    sender: 'bot',
    isCard: true,
    cardData: {
      type: 'ledger',
      title: 'Orizer Financial Statement',
      account: 'Acme Dynamics Pvt Ltd',
      amount: '₹1,48,200.00',
      dueDate: '15 Oct 2026',
      docName: 'Ledger_Statement_Oct2026.pdf',
    },
    delay: 1600,
  },
];

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState('11:42 AM');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const chatRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
  }, []);

  // 3D Tilt Effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -6,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Run simulation script in loop
  useEffect(() => {
    let timeoutId;
    let index = 0;

    const playNext = () => {
      if (index >= SIMULATION_MESSAGES.length) {
        // Pause at end, then restart
        timeoutId = setTimeout(() => {
          setMessages([]);
          index = 0;
          playNext();
        }, 8000);
        return;
      }

      const msg = SIMULATION_MESSAGES[index];

      if (msg.sender === 'bot') {
        setIsTyping(true);
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, { ...msg, time: currentTime }]);
          index++;
          timeoutId = setTimeout(playNext, 1200);
        }, msg.delay);
      } else {
        timeoutId = setTimeout(() => {
          setMessages((prev) => [...prev, { ...msg, time: currentTime }]);
          index++;
          timeoutId = setTimeout(playNext, 1000);
        }, 1200);
      }
    };

    playNext();

    return () => clearTimeout(timeoutId);
  }, [currentTime]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[360px] sm:max-w-[400px] transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Phone Hardware Mockup Frame */}
      <div className="relative rounded-[2.5rem] p-3 bg-slate-900 shadow-2xl ring-1 ring-slate-800">
        {/* Speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center">
          <div className="w-8 h-1 rounded-full bg-slate-800"></div>
        </div>

        {/* Screen container */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#efeae2] h-[580px] flex flex-col border border-slate-200 shadow-inner">
          {/* WhatsApp Header */}
          <div className="bg-[#f0f2f5] px-4 pt-7 pb-3 border-b border-slate-200 flex items-center justify-between z-20 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  O
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm text-slate-900 leading-tight">
                    Orizer eBizChat
                  </span>
                  <BadgeCheck className="w-4 h-4 text-emerald-600 fill-emerald-100 flex-shrink-0" />
                </div>
                <span className="text-[11px] text-emerald-700 font-medium">
                  Official Business Account · ERP Synced
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <button className="p-1 rounded-full hover:bg-slate-200/60">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-1 rounded-full hover:bg-slate-200/60">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-1 rounded-full hover:bg-slate-200/60">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar text-xs selection:bg-brand-200"
          >
            {/* End-to-end encryption banner */}
            <div className="bg-amber-50/90 border border-amber-200/80 rounded-lg p-2 text-center text-[10px] text-amber-900/90 leading-tight mx-auto max-w-[90%] flex items-center justify-center gap-1.5 shadow-subtle">
              <Lock className="w-3 h-3 text-amber-700 flex-shrink-0" />
              <span>Messages are end-to-end encrypted with Meta Business API.</span>
            </div>

            <div className="text-center my-1">
              <span className="bg-slate-200/80 px-2 py-0.5 rounded text-[10px] text-slate-600 font-mono font-medium">
                TODAY
              </span>
            </div>

            {/* Conversation Flow */}
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user';
              if (m.isCard) {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-[88%] bg-[#d9fdd3] rounded-xl rounded-tl-none p-3 shadow-sm border border-emerald-200/80 text-left space-y-2"
                  >
                    <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
                      <span className="font-semibold text-emerald-950 flex items-center gap-1 text-[11px]">
                        {m.cardData.type === 'dispatch' ? (
                          <Truck className="w-3.5 h-3.5 text-emerald-700" />
                        ) : (
                          <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                        )}
                        {m.cardData.title}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-800">
                        {m.cardData.poNumber || m.cardData.amount}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-800 space-y-1 font-sans">
                      {m.cardData.items && <div><strong>Order:</strong> {m.cardData.items}</div>}
                      {m.cardData.lrNumber && (
                        <div className="flex items-center justify-between">
                          <span><strong>LR Docket:</strong> {m.cardData.lrNumber}</span>
                          <span className="font-mono text-[10px] bg-emerald-100 px-1 rounded text-emerald-800">GJ V-Trans</span>
                        </div>
                      )}
                      {m.cardData.vehicle && <div><strong>Vehicle:</strong> {m.cardData.vehicle}</div>}
                      {m.cardData.eta && <div><strong>Expected ETA:</strong> {m.cardData.eta}</div>}
                      {m.cardData.dueDate && <div><strong>Due Date:</strong> {m.cardData.dueDate}</div>}
                    </div>

                    {/* PDF Attachment pill */}
                    <div className="bg-white/90 rounded-lg p-2 flex items-center justify-between border border-emerald-200 text-[11px]">
                      <div className="flex items-center gap-1.5 truncate">
                        <FileText className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span className="font-medium text-slate-800 truncate">
                          {m.cardData.docName}
                        </span>
                      </div>
                      <Download className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 ml-1" />
                    </div>

                    <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 pt-0.5">
                      <span>{m.time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-sky-500" />
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-slate-800 shadow-sm text-left leading-relaxed ${
                      isUser
                        ? 'bg-white rounded-tr-none border border-slate-200'
                        : 'bg-[#d9fdd3] rounded-tl-none border border-emerald-200/80'
                    }`}
                  >
                    <p className="text-xs">{m.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                      <span>{m.time}</span>
                      {isUser && <CheckCheck className="w-3.5 h-3.5 text-sky-500" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#d9fdd3] rounded-xl rounded-tl-none px-3.5 py-2 w-16 shadow-sm border border-emerald-200/80 flex items-center justify-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]"></span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp Message Input Bar */}
          <div className="bg-[#f0f2f5] p-2.5 flex items-center gap-2 border-t border-slate-200 z-20">
            <div className="flex-1 bg-white rounded-full px-3.5 py-2 flex items-center justify-between border border-slate-200 text-slate-400 text-xs">
              <span>Type message or type /help...</span>
              <Paperclip className="w-4 h-4 text-slate-400" />
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
              <Send className="w-3.5 h-3.5 ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
