import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  /** グラデーション開始色（Tailwindクラス名の色部分） 例: 'blue-50' */
  gradientFrom?: string;
  /** グラデーション終了色（Tailwindクラス名の色部分） 例: 'indigo-100' */
  gradientTo?: string;
}

/**
 * ページ共通レイアウトコンポーネント
 * 中央配置されたカードレイアウトとグラデーション背景を提供
 */
export default function PageLayout({
  children,
  gradientFrom = 'blue-50',
  gradientTo = 'indigo-100',
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-${gradientFrom} to-${gradientTo} flex items-center justify-center p-8`}>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        {children}
      </div>
    </div>
  );
}
