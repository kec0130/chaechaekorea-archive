/* eslint-disable @next/next/no-img-element */
'use client';

import useSWR from 'swr';

interface PreviewData {
  title: string;
  description?: string;
  image?: string;
  favicon: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LinkPreview = ({ url }: { url: string }) => {
  const { data, error, isLoading } = useSWR<PreviewData>(
    `/api/og?url=${encodeURIComponent(url)}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  if (isLoading) return <Loading />;

  if (error || !data)
    return (
      <LinkContainer url={url}>
        <div className="flex-1 overflow-hidden px-4 py-3 text-sm font-normal text-gray-700">
          {url}
        </div>
      </LinkContainer>
    );

  return (
    <LinkContainer url={url}>
      <div className="flex-1 overflow-hidden px-4 py-3 font-normal">
        <div className="line-clamp-1 text-base font-semibold text-gray-900">{data.title}</div>
        <div className="my-[6px] line-clamp-2 h-10 text-sm text-gray-500">{data.description}</div>
        <div className="flex items-center">
          <img src={data.favicon} alt="logo" className="!m-0 h-4 w-4" />
          <div className="ml-[6px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700">
            {url}
          </div>
        </div>
      </div>
      {data.image && (
        <div className="relative hidden w-[200px] sm:block">
          <div className="absolute inset-0">
            <img src={data.image} alt={data.title} className="!m-0 h-full w-full object-cover" />
          </div>
        </div>
      )}
    </LinkContainer>
  );
};

export default LinkPreview;

const LinkContainer = ({ url, children }: { url: string; children: React.ReactNode }) => {
  return (
    <p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex overflow-hidden rounded-[4px] border border-gray-200 no-underline transition-colors hover:bg-gray-100"
      >
        {children}
      </a>
    </p>
  );
};

const Loading = () => {
  return (
    <p className="flex h-[116px] w-full items-center justify-center space-x-2 rounded-[4px] border border-gray-200">
      <div aria-label="loading" role="status">
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
};
