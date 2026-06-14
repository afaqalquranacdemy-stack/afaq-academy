"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FloatingWhatsApp() {
  const { isRtl } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white/95 backdrop-blur-xl text-gray-800 text-sm px-4 py-2.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] max-w-[200px] border border-white/50"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className={`absolute -top-2 ${isRtl ? "-left-2" : "-right-2"} w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors`}
              aria-label="Close tooltip"
              title="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-medium">
              {isRtl ? "تحدث معنا!" : "Chat with us!"}
            </p>
            <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-white/95 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/201010575332"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_8px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.6)] transition-shadow duration-300"
      >
        {/* Orbital pulse ring */}
        <div className="absolute -inset-1.5 md:-inset-2 rounded-full border-2 border-green-400/30 animate-glow-ring" />
        <div className="absolute -inset-3 md:-inset-4 rounded-full border border-green-400/10 animate-glow-ring [animation-delay:-1.2s]" />
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
      </motion.a>
    </div>
  );
}
