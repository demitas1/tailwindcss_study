import { useState, useRef, useEffect } from 'react';
import type { ComponentType } from 'react';

interface ResizablePanelsProps {
  LeftComponent: ComponentType<any>;
  RightComponent: ComponentType<any>;
  leftProps?: Record<string, any>;
  rightProps?: Record<string, any>;
  initialLeftWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

/**
 * リサイズ可能なパネルコンテナ
 */
function ResizablePanels({
  LeftComponent,
  RightComponent,
  leftProps = {},
  rightProps = {},
  initialLeftWidth = 50,
  minWidth = 10,
  maxWidth = 90
}: ResizablePanelsProps) {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

      if (newLeftWidth >= minWidth && newLeftWidth <= maxWidth) {
        setLeftWidth(newLeftWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, minWidth, maxWidth]);

  return (
    <div 
      ref={containerRef}
      className="flex w-full"
    >
      {/* 左パネル */}
      <div 
        className="overflow-auto"
        style={{ width: `${leftWidth}%` }}
      >
        <LeftComponent {...leftProps} />
      </div>

      {/* リサイズハンドル */}
      <div
        className={`w-1 bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-400 cursor-col-resize transition-colors ${
          isDragging ? 'bg-blue-500 dark:bg-blue-400' : ''
        }`}
        onMouseDown={() => setIsDragging(true)}
      />

      {/* 右パネル */}
      <div 
        className="overflow-auto flex-1"
      >
        <RightComponent {...rightProps} />
      </div>
    </div>
  );
}

export default ResizablePanels;
