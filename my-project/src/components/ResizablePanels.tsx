import { useState, useRef, useEffect } from 'react';

// リサイズ可能なパネルコンテナ
function ResizablePanels({ 
  LeftComponent, 
  RightComponent,
  leftProps = {},
  rightProps = {},
  initialLeftWidth = 50,
  minWidth = 10,
  maxWidth = 90
}) {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
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
        className={`w-1 bg-gray-300 hover:bg-blue-500 cursor-col-resize transition-colors ${
          isDragging ? 'bg-blue-500' : ''
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
