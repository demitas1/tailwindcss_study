import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Demo2ページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function Demo2() {
  return (
    <PageLayout>
      <h1 className="text-xl font-bold text-green-600 dark:text-green-400 mb-8 text-center">
        Demo 2
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        このページは今後実装予定のデモページです
      </p>

      <Link
        to="/"
        className="block w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
