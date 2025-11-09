import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Demo3ページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function Demo3() {
  return (
    <PageLayout gradientFrom="purple-50" gradientTo="purple-100">
      <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
        Demo 3
      </h1>

      <p className="text-gray-600 text-center mb-8">
        このページは今後実装予定のデモページです
      </p>

      <Link
        to="/"
        className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
