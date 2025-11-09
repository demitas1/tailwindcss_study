import { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import ResizablePanels from '../components/ResizablePanels';

/**
 * Demo1ページ
 * ResizablePanels
 */
// サンプルコンポーネント
function LeftPanel({ title, items, onItemClick }) {
  return (
    <div className="p-4 bg-blue-100 h-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div 
            key={index}
            className="p-2 bg-blue-200 rounded cursor-pointer hover:bg-blue-300"
            onClick={() => onItemClick?.(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function RightPanel({ content }) {
  return (
    <div className="p-4 bg-green-100 h-full">
      <h2 className="text-xl font-bold mb-4">右パネル</h2>
      <p>{content}</p>
    </div>
  );
}

export default function Demo1() {
  const [selectedItem, setSelectedItem] = useState('項目を選択してください');

  return (
    <PageLayout gradientFrom="green-50" gradientTo="green-100">
      <h1 className="text-xl font-bold text-green-600 mb-8 text-center">
        Demo 1 : リサイズ可能なパネル
      </h1>

      <ResizablePanels
        LeftComponent={LeftPanel}
        RightComponent={RightPanel}
        leftProps={{
          title: '左パネル',
          items: ['アイテム1', 'アイテム2', 'アイテム3'],
          onItemClick: (item) => setSelectedItem(`選択: ${item}`)
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
        className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-center"
      >
        ← フロントページへ戻る
      </Link>
    </PageLayout>
  );
}
