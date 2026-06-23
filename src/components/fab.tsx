import Link from "next/link";

export default function Fab() {
  return (
    <Link
      href="/commander"
      aria-label="Commander"
      className="fixed bottom-[22px] right-[22px] z-[95] w-[62px] h-[62px] rounded-full bg-cta grid place-items-center shadow-[0_10px_28px_rgba(199,91,51,.45)] transition-transform hover:scale-[1.08] animate-fab"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[33px] h-[33px] fill-white">
        <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
      </svg>
    </Link>
  );
}
