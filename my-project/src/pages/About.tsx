import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Aboutページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function About() {
  return (
    <PageLayout gradientFrom="gray-50" gradientTo="gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-8 text-center">
        About
      </h1>

      <p className="text-gray-600 text-center mb-8">
        このページは今後実装予定のAboutページです
      </p>

      <Link
        to="/"
        className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
