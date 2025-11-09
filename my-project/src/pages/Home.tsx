import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

/**
 * フロントページコンポーネント
 * Demo1, Demo2, Demo3, Aboutへのナビゲーションを提供
 */
export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-lg font-bold text-gray-500 mb-8 text-center">
        Tailwind CSS v4 学習プロジェクト
      </h1>

      <nav className="space-y-4">
        <Link
          to="/demo1"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-xl transition-colors duration-200 text-center"
        >
          Demo 1
        </Link>

        <Link
          to="/demo2"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center"
        >
          Demo 2
        </Link>

        <Link
          to="/demo3"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center"
        >
          Demo 3
        </Link>

        <Link
          to="/about"
          className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center"
        >
          About
        </Link>
      </nav>
    </PageLayout>
  );
}
