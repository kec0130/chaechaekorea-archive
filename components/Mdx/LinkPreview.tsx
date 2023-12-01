/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';

interface PreviewData {
  title: string;
  description: string;
  image: string;
  favicon: string;
}

const LinkPreview = ({ url }: { url: string }) => {
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);

  useEffect(() => {
    const fetchPreviewData = async () => {
      const response = await fetch(`/api/og?url=${encodeURIComponent(url)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setPreviewData(data);
    };

    fetchPreviewData();
  }, [url]);

  if (!previewData)
    return (
      <p className="flex h-[116px] items-center justify-center space-x-2 rounded-[4px] border border-gray-200">
        <div aria-label="Loading..." role="status">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 animate-spin stroke-slate-500"
          >
            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
          </svg>
        </div>
        <span className="text-xs font-medium text-slate-500">Loading...</span>
      </p>
    );

  return (
    <p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex overflow-hidden rounded-[4px] border border-gray-200 no-underline transition-colors hover:bg-gray-100"
      >
        <div className="flex-1 overflow-hidden px-4 py-3 font-normal">
          <div className="line-clamp-1 text-base font-semibold text-gray-900">
            {previewData.title}
          </div>
          <div className="my-[6px] line-clamp-2 h-10 text-sm text-gray-500">
            {previewData.description}
          </div>
          <div className="flex items-center">
            <img src={previewData.favicon} alt="logo" className="!m-0 h-4 w-4" />
            <div className="ml-[6px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700">
              {url}
            </div>
          </div>
        </div>

        {previewData.image && (
          <div className="relative w-[200px]">
            <div className="absolute inset-0">
              <img
                src={previewData.image}
                alt={previewData.title}
                className="!m-0 h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </a>
    </p>
  );
};

export default LinkPreview;
