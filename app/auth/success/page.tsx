"use client";

import { Suspense, useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";

function AuthSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }

    // Determine where to redirect back
    const returnPath = localStorage.getItem("returnPath") || "/";
    localStorage.removeItem("returnPath");

    // Redirect back to the intended destination at the comments section
    router.replace(`${returnPath}#comments`);
  }, [searchParams, router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Successfully logged in!</h2>
        <p className="text-muted-foreground mt-2">Redirecting you back...</p>
      </div>
    </div>
  );
}

export default function AuthSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <AuthSuccessContent />
    </Suspense>
  );
}
