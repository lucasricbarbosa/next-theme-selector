import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="px-5 container max-w-5xl mx-auto  py-2 w-full flex items-center justify-between">
        <span className="font-semibold">lucasricbarbosa</span>
        <div className="flex items-center gap-0.5">
          <Link
            target="_blank"
            className="hover:bg-muted block p-1 rounded-md"
            href="https://github.com/lucasricbarbosa"
          >
            <Github className="size-4" />
          </Link>
          <Link
            target="_blank"
            className="hover:bg-muted block p-1 rounded-md"
            href="https://www.linkedin.com/in/lucas-ricardo-barbosa"
          >
            <Linkedin className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
