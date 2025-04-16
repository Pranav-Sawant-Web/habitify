// pages/dashboard.tsx

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <SignedIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>Welcome to your dashboard! 🎯</h1>
          <UserButton />
        </div>
        <p>This is a protected page. Only signed-in users can see this.</p>
      </SignedIn>

      <SignedOut>
        <div>
          <h2>You are signed out.</h2>
          <SignInButton />
        </div>
      </SignedOut>
    </div>
  );
}
