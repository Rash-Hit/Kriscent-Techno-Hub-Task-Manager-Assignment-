"use client";
import { useClerk } from "@clerk/nextjs";
import { addUser } from "./actions/userActions";
import { useEffect } from "react";
import Tasks from "@/components/Tasks";

export default function Home() {
  return (
    <>
      <Tasks />
    </>
  );
}
