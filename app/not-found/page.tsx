import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[12rem] leading-none font-black text-primary text-glow">
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the smoke</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page drifted off. Head home to find your next dispensary.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
