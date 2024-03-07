import { DeliveryMethod } from "@shopify/shopify-api";
import shopify from "../lib/shopify/initialize-context";

export function setupGDPRWebHooks(path: string) {
  /**
   * Customers can request their data from a store owner. When this happens,
   * Shopify invokes this webhook.
   *
   * https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#customers-data_request
   */
  return shopify.webhooks.addHandlers({
    CUSTOMERS_DATA_REQUEST: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: path,
      callback: async (topic, shop, body) => {
        const payload = JSON.parse(body);
        // Payload has the following shape:
        // {
        //   "shop_id": 954889,
        //   "shop_domain": "{shop}.myshopify.com",
        //   "orders_requested": [
        //     299938,
        //     280263,
        //     220458
        //   ],
        //   "customer": {
        //     "id": 191167,
        //     "email": "john@example.com",
        //     "phone": "555-625-1199"
        //   },
        //   "data_request": {
        //     "id": 9999
        //   }
        // }
      },
    },
    CUSTOMERS_REDACT: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: path,
      callback: async (topic, shop, body) => {
        const payload = JSON.parse(body);
        // Payload has the following shape:
        // {
        //   "shop_id": 954889,
        //   "shop_domain": "{shop}.myshopify.com",
        //   "customer": {
        //     "id": 191167,
        //     "email": "john@example.com",
        //     "phone": "555-625-1199"
        //   },
        //   "orders_to_redact": [
        //     299938,
        //     280263,
        //     220458
        //   ]
        // }
      },
    },
    SHOP_REDACT: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: path,
      callback: async (topic, shop, body) => {
        const payload = JSON.parse(body);
        // Payload has the following shape:
        // {
        //   "shop_id": 954889,
        //   "shop_domain": "{shop}.myshopify.com"
        // }
      },
    },
  });
}
