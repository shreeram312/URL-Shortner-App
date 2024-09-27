import { CopyIcon, EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function UrlList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URL's</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 justify-between">
          <Link
            href="https://chatgpt.com/c/66ed8a51-371c-8009-91ff-4848c6717fea"
            className="text-blue-500"
            target="_blank"
          ></Link>
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
      </ul>
    </div>
  );
}
