"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(url);
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
