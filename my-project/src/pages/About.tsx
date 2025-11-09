import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Aboutページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function About() {
  return (
    <PageLayout>
      <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-8 text-center">
        About
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        このページは今後実装予定のAboutページです
      </p>

      <Link
        to="/"
        className="block w-full bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
