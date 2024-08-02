import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 bg-blue-500 animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;

