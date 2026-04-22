export default function WAFloat() {
  return (
    <a
      href="https://wa.me/6282333575111?text=Halo,%20saya%20ingin%20order%20service%20AC"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all group"
      aria-label="Chat WhatsApp"
    >
      <span className="text-2xl">💬</span>
      <span className="hidden sm:block text-sm">Chat via WA</span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full ring-4 ring-green-400 animate-ping opacity-30" />
    </a>
  );
}
