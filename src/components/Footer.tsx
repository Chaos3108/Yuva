import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-white border-t border-violet-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by
          Yuva Kishore © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
