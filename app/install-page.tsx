"use client";

import { Button, Card } from "@shopify/polaris";

export default function InstallPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="w-72">
        <Card>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Installation</h1>
            <form action="/install" method="POST">
              <input
                required
                className="w-full border border-gray-300 rounded p-2"
                placeholder="example.myshopify.com"
                name="myshopify"
                autoComplete="off"
              />
              <div className="flex mt-2">
                <Button variant="primary" submit>
                  Install
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </main>
  );
}
