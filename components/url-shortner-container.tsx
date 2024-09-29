"use client";
import { useState } from "react";
import ShortenForm from "./shorten-form";
import UrlList from "./url-list";

export default function () {
  const [refreshKey, setrefreshKey] = useState<number>(0);

  const handleUrlShortened = () => {
    setrefreshKey((prev) => prev + 1);
  };
  return (
    <div>
      URLSHORTNER
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      <UrlList key={refreshKey} />
    </div>
  );
}
