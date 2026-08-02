export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-lg mb-8">I'm always open to research collaborations and interesting conversations.</p>
      <ul className="space-y-4 text-lg">
        <li>📧 <a href="mailto:mad hupahar@gmail.com">mad hupahar@gmail.com</a></li>
        <li>📞 +44 7397 145850</li>
        <li>📍 Sheffield, UK (remote/hybrid)</li>
        <li>🔗 <a href="https://www.linkedin.com/in/madhurananda/">LinkedIn</a></li>
        <li>🐙 <a href="https://github.com/Madhurananda">GitHub</a></li>
        <li>📚 <a href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en">Google Scholar</a></li>
        <li>🆔 <a href="https://orcid.org/0000-0002-5926-0144">ORCID</a></li>
      </ul>
    </div>
  );
}
