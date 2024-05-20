"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Roles } from "@/types/globals";


interface Props {
  role: Roles;
}

export default function Navbar({ role }: Props) {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <div>{role === "MANAGER" ? "Manager" : "Employee"} Board</div>
        <div className="space-x-2">
          <span className="font-semibold">
            {user?.fullName} | {user?.primaryEmailAddress?.emailAddress}
          </span>
          <Button
            variant={"outline"}
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
            className="underline"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}
