import { log } from "console";
import UserButton from "./UserButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website",
  description: "My Next.js website",
};

export default async function UserPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    console.log(id);
    
    return <>
    <h1>User ID: {id}</h1>
    <UserButton/>
    </>;
}

