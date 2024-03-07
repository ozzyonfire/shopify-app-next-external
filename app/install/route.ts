import shopify from "@/lib/shopify/initialize-context";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // get the form data
  const formData = await request.formData();
  console.log(formData);

  const myshopify = formData.get("myshopify");

  // return the response
  return shopify.auth.begin({
    shop: myshopify as string,
    callbackPath: "/api/auth/callback",
    isOnline: false,
    rawRequest: request,
    rawResponse: new Response(),
  });
}
