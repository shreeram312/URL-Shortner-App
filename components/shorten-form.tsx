"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });
      await response;
    } catch (e) {
      console.log(e);
    } finally {
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
        <Button className="w-full p-2 " type="submit">
          Shorten URL
        </Button>
      </div>
    </form>
  );
}
