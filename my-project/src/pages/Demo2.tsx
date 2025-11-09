import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Demo2ページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function Demo2() {
  return (
    <PageLayout gradientFrom="green-50" gradientTo="green-100">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Demo 2
      </h1>

      <p className="text-gray-600 text-center mb-8">
        このページは今後実装予定のデモページです
      </p>

      <Link
        to="/"
        className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
