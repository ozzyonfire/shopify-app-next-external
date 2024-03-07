"use client";

import { gql } from "@apollo/client";
import { LegacyCard as Card, Page, Text } from "@shopify/polaris";
import { doServerAction, logout } from "./actions";

interface Data {
  name: string;
  height: string;
}

const GET_SHOP = gql`
  query {
    shop {
      name
    }
  }
`;

interface ShopData {
  shop: {
    name: string;
  };
}

export default function Home({ shop }: { shop: string }) {
  return (
    <Page
      title="Home"
      primaryAction={{
        content: "Log out",
        onAction: async () => {
          await logout();
          // refresh the window
          window.location.reload();
        },
      }}
    >
      <Card sectioned title="You are now logged in">
        <Text as="p" variant="bodyMd">
          You can use the session id that is stored in your cookie to retrieve
          an offline token.
        </Text>
      </Card>
    </Page>
  );
}
