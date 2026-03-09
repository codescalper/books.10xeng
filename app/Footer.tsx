import Link from "next/link";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MessagesSquare,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="font-clash text-3xl font-bold text-white tracking-tighter">
              10xEng<span className="text-primary">.</span>
            </div>
            <p className="font-satoshi text-muted-foreground max-w-sm">
              Built with ❤️ for engineers who want more. A free open-source
              initiative.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/codescalper/books.10xeng"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mayanks_tw"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mayankonweb/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayankonli/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 font-satoshi text-muted-foreground">
              <li>
                <Link
                  href="/books"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Books
                </Link>
              </li>
              <li>
                <a
                  href="https://mayankonweb.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Blogs
                </a>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-satoshi text-muted-foreground">
              <li>
                <a
                  href="mailto:mayankyt22@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> mayankyt22@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessagesSquare className="w-4 h-4" /> Join Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mayankonli/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> Mayank (Developer)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 10xEng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
