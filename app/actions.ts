"use server";
import { verifyAuth } from "@/lib/shopify/verify";
import shopify from "@/lib/shopify/initialize-context";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function checkSession(shop: string) {
  try {
    await verifyAuth(shop);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function doServerAction(shop: string): Promise<{
  status: "success" | "error";
}> {
  try {
    console.log("shop", shop);
    await verifyAuth(shop);
    return {
      status: "success",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
    };
  }
}

export async function logout() {
  cookies().delete("shopifySession");
  revalidatePath("/");
}
