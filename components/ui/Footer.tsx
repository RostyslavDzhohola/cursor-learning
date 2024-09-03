import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex justify-between items-center py-6">
        <p className="text-sm text-gray-500">
          © 2023 Airbnb, Inc. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Privacy
          </Link>
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Terms
          </Link>
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  );
}