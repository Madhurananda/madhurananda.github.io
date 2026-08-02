export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Dr. Madhu Pahar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Senior Research Fellow | AI/ML Engineer | University of Sheffield
        </p>
        <p className="mb-4">
          I specialize in multimodal analysis of speech, audio, and biological data 
          for real-world clinical applications.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/madhurananda/" 
             className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/Madhurananda" 
             className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://scholar.google.co.uk/citations?user=P2clDtkAAAAJ&hl=en" 
             className="text-blue-600 hover:underline">Google Scholar</a>
        </div>
      </div>
    </main>
  );
}