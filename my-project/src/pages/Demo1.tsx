import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * Demo1ページ（プレースホルダー）
 * フロントページへ戻るリンクのみを提供
 */
export default function Demo1() {
  return (
    <PageLayout gradientFrom="blue-50" gradientTo="blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Demo 1
      </h1>

      <p className="text-gray-600 text-center mb-8">
        このページは今後実装予定のデモページです
      </p>

      <Link
        to="/"
        className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
