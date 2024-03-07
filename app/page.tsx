import { performChecks } from "@/lib/shopify/shopify-oauth";
import Home from "./main-page";
import { Button, Card, Text, TextField } from "@shopify/polaris";
import shopify from "@/lib/shopify/initialize-context";
import { cookies } from "next/headers";
import InstallPage from "./install-page";

export default function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { shop } = searchParams;
  // get session cookie?
  const sessionCookie = cookies().get("shopifySession");
  console.log(sessionCookie);

  if (!sessionCookie) {
    // show install page
    return <InstallPage />;
  }

  return <Home shop={shop as string} />;
}
