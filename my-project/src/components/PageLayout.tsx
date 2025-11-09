import type { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * ページ共通レイアウトコンポーネント
 * 中央配置されたカードレイアウトを提供
 * ダーク/ライトテーマに対応
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-8 transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl w-full relative">
        {/* テーマ切り替えボタン - 右上に配置 */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* コンテンツエリア */}
        <div className="text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}
