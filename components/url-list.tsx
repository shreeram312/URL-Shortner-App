"use client";
import { Check, CopyIcon, EyeIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import SkeletonLoader from "./ui/SkeletonLoader";

type A = {
  id: number;
  ShortCode: string;
  originalUrl: string;
  visits: string;
};

export default function UrlList() {
  const [UrlListData, setUrlListData] = useState<A[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyurl, setcopyurl] = useState<string>("");

  const [loading, setloading] = useState<boolean>(false);

  const shortenUrl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  function handleCopyUrl(code: string) {
    const fullUrl = ` ${shortenUrl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setcopyurl(code);
    });
    setTimeout(() => {
      setCopied(false);
      setcopyurl("");
    }, 3000);
  }

  // Fetch URLs initially and set them in state
  useEffect(() => {
    fetchUrls();
  }, []);

  // Function to fetch URL data
  const fetchUrls = async () => {
    setloading(true);
    try {
      const urls = await fetch("/api/urls");
      const data = await urls.json();
      setUrlListData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  };

  // Function to update the visits count (if dynamic update is needed)

  // Handle loading state with SkeletonLoader
  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>

      <ul className="space-y-2">
        {UrlListData.map((url) => (
          <li
            key={url.id}
            className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border p-2"
          >
            <Link
              href={`/${url.ShortCode}`}
              className="text-blue-500"
              target="_blank"
            >
              {shortenUrl(url.ShortCode)}
            </Link>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => handleCopyUrl(url.ShortCode)}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted"
              >
                {copied && copyurl == url.ShortCode ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <CopyIcon className="w-4 h-4 " />
                )}
                <span className="sr-only">Copy Url</span>
              </Button>
              <span className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                {url.visits} views
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
