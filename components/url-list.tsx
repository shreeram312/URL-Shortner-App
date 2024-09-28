"use client";
import { CopyIcon, EyeIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type A = {
  id: number;
  ShortCode: string;
  originalUrl: string;
  visited: string;
};

export default function UrlList() {
  const [UrlListData, setUrlListData] = useState<A[]>([]);

  useEffect(() => {
    fetchUrls();
  }, [UrlListData]);
  const fetchUrls = async () => {
    try {
      const urls = await fetch("/api/urls");
      const data = await urls.json();
      setUrlListData(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URL's</h2>

      <ul className="space-y-2">
        {UrlListData.map((url) => (
          <li key={url.id} className="flex items-center gap-2 justify-between">
            <Link
              href={url.originalUrl}
              className="text-blue-500"
              target="_blank"
            >
              {url.ShortCode}
            </Link>
            {url.originalUrl}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted"
              >
                <CopyIcon className="w-4 h-4 " />
                <span className="sr-only">Copy Url</span>
              </Button>
              <span className="flex items-center gap-1">
                <EyeIcon className="h-4 w-4" />
                100 views
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
