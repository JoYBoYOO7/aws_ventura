import { Suspense } from "react";
import Hero from "./hero";

export default function HeroWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Hero />
    </Suspense>
  );
}
