export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-6 mt-12 transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[var(--color-text)] opacity-70">
        © {new Date().getFullYear()} Dr. Madhu Pahar – built with Next.js & Tailwind
      </div>
    </footer>
  );
}
