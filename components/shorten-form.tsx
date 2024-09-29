"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";

interface handleUrlShortenedProps {
  handleUrlShortened(): void;
}
export default function ShortenForm({
  handleUrlShortened,
}: handleUrlShortenedProps) {
  const [loading, setloading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setloading(true);
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });

      await response.json();
      setUrl("");
      handleUrlShortened();
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4">
        <Input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            console.log(e.target.value);
          }}
          className="h-12"
          type="url"
          placeholder="Enter your URL"
          required
        />
        <Button className="w-full p-2 " type="submit" disabled={loading}>
          {loading ? "Shoteneing...." : "Shorten Url"}
        </Button>
      </div>
    </form>
  );
}
