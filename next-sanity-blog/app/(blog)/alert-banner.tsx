// "use client";

import Link from "next/link";
// import Contact from "./contact/page";
// import About from './about/page'

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
//   const router = useRouter();
//   const [pending, startTransition] = useTransition();

//   const shouldShow = useSyncExternalStore(
//     emptySubscribe,
//     () => window.top === window,
//     () => false,
//   );

//   if (!shouldShow) return null;

  return (
    <div
      className= "fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex item-center justify-between px-4 h-14"
    >
      <div className="py-2 text-center text-sm">
        BLOG
            
      </div>
      <nav className="flex items-center space-x-4 text-sm font-medium">

        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/" className="hover:ttext-blue-400">About</Link>
        <Link href="/" className="hover:text-blue-400">Contact</Link>
      </nav>
    </div>
  );
}
