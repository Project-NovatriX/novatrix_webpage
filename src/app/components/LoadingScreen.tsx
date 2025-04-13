import React from 'react';

interface LoadingScreenProps {
  loadingProgress: number;
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loadingProgress, onComplete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="text-center">
        <div className="text-2xl font-semibold mb-4">Loading... {Math.floor(loadingProgress)}%</div>
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 dark:bg-blue-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;