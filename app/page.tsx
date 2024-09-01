"use client";

import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { api } from "../convex/_generated/api";

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <div className="">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      </div>
    </main>
  );
}
