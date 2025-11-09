import { useState } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import ResizablePanels from '../components/ResizablePanels';

/**
 * Demo1ページ
 * ResizablePanels
 */

interface LeftPanelProps {
  title: string;
  items: string[];
  onItemClick?: (item: string) => void;
}

interface RightPanelProps {
  content: string;
}

// サンプルコンポーネント
function LeftPanel({ title, items, onItemClick }: LeftPanelProps) {
  return (
    <div className="p-4 bg-blue-100 dark:bg-blue-900 h-full">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">{title}</h2>
      <div className="space-y-2">
        {items.map((item: string, index: number) => (
          <div
            key={index}
            className="p-2 bg-blue-200 dark:bg-blue-800 rounded cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 dark:text-gray-100"
            onClick={() => onItemClick?.(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RightPanel({ content }: RightPanelProps) {
  return (
    <div className="p-4 bg-green-100 dark:bg-green-900 h-full">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">右パネル</h2>
      <p className="dark:text-gray-100">{content}</p>
    </div>
  );
}

export default function Demo1() {
  const [selectedItem, setSelectedItem] = useState('項目を選択してください');

  return (
    <PageLayout>
      <h1 className="text-xl font-bold text-green-600 dark:text-green-400 mb-8 text-center">
        Demo 1 : リサイズ可能なパネル
      </h1>

      <ResizablePanels
        LeftComponent={LeftPanel}
        RightComponent={RightPanel}
        leftProps={{
          title: '左パネル',
          items: ['アイテム1', 'アイテム2', 'アイテム3'],
          onItemClick: (item: string) => setSelectedItem(`選択: ${item}`)
        }}
        rightProps={{
          content: selectedItem
        }}
        initialLeftWidth={40}
        minWidth={20}
        maxWidth={80}
      />

      <Link
        to="/"
        className="block w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
