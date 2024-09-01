"use client";

import { Authenticated, AuthLoading, Unauthenticated, useMutation } from "convex/react";
import { SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { api } from "../convex/_generated/api";

export default function Home() {
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  // Call the mutation to save the user info in Convex DB
  if (user) {
    createUser({
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: user.fullName ?? '',
      username: user.username ?? '',
      pfp: user.imageUrl,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <Authenticated>
          <div>
            <p>Logged in:</p>
            <UserButton />
            <button
              onClick={() => signOut()}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Sign Out
            </button>
          </div>
        </Authenticated>
        <Unauthenticated>
          <div>
            <p>Logged out:</p>
            <SignInButton />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <p>Still loading...</p>
        </AuthLoading>
      </div>
    </main>
  );
}