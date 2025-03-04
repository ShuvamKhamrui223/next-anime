"use client";
// import { ClerkProvider } from "@clerk/nextjs";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>{children}</>
    </>
  );
}
