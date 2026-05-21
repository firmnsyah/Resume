"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "owner";
  timestamp: number;
}

const MSG_KEY = "chat_messages_";
const UID_KEY = "chat_uid";
const OPENED_KEY = "chat_opened_";

function getOrCreateUserId(): string {
  let uid = localStorage.getItem(UID_KEY);
  if (!uid) {
    uid = `u_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    localStorage.setItem(UID_KEY, uid);
  }
  return uid;
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [uid, setUid] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Init: load uid & persisted messages
  useEffect(() => {
    const id = getOrCreateUserId();
    setUid(id);

    const raw = localStorage.getItem(MSG_KEY + id);
    const saved: Message[] = raw ? JSON.parse(raw) : [];

    const alreadyOpened = !!localStorage.getItem(OPENED_KEY + id);

    if (!alreadyOpened) {
      // First visit: inject welcome message (will be saved on first open)
      const welcome: Message = {
        id: "welcome",
        text: "Hello World! :)",
        sender: "owner",
        timestamp: Date.now(),
      };
      setMessages([welcome]);
      setUnread(1);
    } else {
      setMessages(saved);
    }
  }, []);

  // Persist messages whenever they change
  useEffect(() => {
    if (!uid || messages.length === 0) return;
    localStorage.setItem(MSG_KEY + uid, JSON.stringify(messages));
  }, [messages, uid]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(true);
    setUnread(0);
    if (uid) localStorage.setItem(OPENED_KEY + uid, "true");
  }

  function handleToggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      handleOpen();
    }
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: `m_${Date.now()}`,
      text,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply: Message = {
        id: `r_${Date.now()}`,
        text: "Thanks for reaching out! I'll get back to you as soon as possible. 😊",
        sender: "owner",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, reply]);
      if (!isOpen) setUnread((n) => n + 1);
    }, 1400);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* ── Chat Window ── */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-80 flex-col overflow-hidden neu-raised transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "translate-y-4 scale-95 opacity-0 pointer-events-none"
        }`}
        style={{ height: 440 }}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--neu-accent)] text-white text-xs font-bold shadow-inner">
              F
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--neu-base)] bg-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none text-[var(--neu-text)]">
                Firmansyah
              </p>
              <p className="mt-0.5 text-[10px] text-green-500 font-medium">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="neu-interactive rounded-full p-1.5"
            aria-label="Close chat"
          >
            <X className="h-3.5 w-3.5 text-[var(--neu-text-soft)]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col gap-0.5 ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "rounded-br-sm bg-[var(--neu-accent)] text-white"
                    : "neu-raised-xs rounded-bl-sm text-[var(--neu-text)]"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-[var(--neu-text-soft)] px-1">
                {formatTime(msg.timestamp)}
              </span>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="neu-raised-xs rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[var(--neu-text-soft)]"
                      style={{
                        animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-[var(--border)] px-3 py-3 flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            className="flex-1 neu-pressed-sm rounded-xl bg-transparent px-3 py-2 text-sm text-[var(--neu-text)] placeholder:text-[var(--neu-text-soft)] outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="neu-interactive flex-shrink-0 rounded-xl p-2 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="h-4 w-4 text-[var(--neu-accent)]" />
          </button>
        </div>
      </div>

      {/* ── Toggle Button ── */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 neu-interactive flex h-14 w-14 items-center justify-center rounded-full"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className={`transition-all duration-200 ${isOpen ? "rotate-90 scale-90 opacity-0 absolute" : "rotate-0 scale-100 opacity-100"}`}>
          <MessageCircle className="h-6 w-6 text-[var(--neu-accent)]" />
        </div>
        <div className={`transition-all duration-200 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-90 opacity-0 absolute"}`}>
          <X className="h-6 w-6 text-[var(--neu-accent)]" />
        </div>

        {/* Unread badge */}
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
