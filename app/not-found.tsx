import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">404</h1>
      <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        Go Home
      </Link>
    </div>
  );
}
