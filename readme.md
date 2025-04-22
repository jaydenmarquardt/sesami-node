# Sesami Node.js API Client

A Node.js client library for interacting with the Sesami Booking API. This client makes it easy to manage appointments, team members, services, resources, and more through the Sesami platform.

## Installation

```bash
npm install @mdt/sesami-node
```

## Features

- Complete TypeScript support with comprehensive type definitions
- Promise-based API for async operations
- Supports all major Sesami API endpoints:

  - Shops
  - Services
  - Team Members
  - Appointments
  - Reservations
  - Resources
  - Flows
  - Authentication

## Documentation & Resources

For more information about the Sesami API, refer to these official resources:

- [Sesami Dev Docs](https://sesami.dev/docs)
- [Sesami API Introduction](https://sesami.dev/docs/sesami-api/intro/)
- [Sesami API Reference (Swagger)](https://api.sesami.co/swagger)
- [Personal Access Token Guide](https://sesami.dev/docs/sesami-api/personal-access-token/)

---

## Quick Start

```typescript
import Sesami from "@jmdt/sesami-node";

// Initialize the client
const sesami = new Sesami({
  apiToken: "your-api-token",
  apiClientID: "your-client-id",
  shopID: "your-shop-id",
});

// Example: Get shop information
async function getShopInfo() {
  try {
    const shop = sesami.shops.getById("shop-id");
    const shopData = await shop.get();
    console.log(shopData);
  } catch (error) {
    console.error("Error fetching shop:", error);
  }
}
```

## Environment Variables

You can use environment variables to configure the client:

```
API_CLIENT_ID=your-client-id
API_TOKEN=your-api-token
SHOP_ID=your-shop-id
```

## Core API Components

### Shops

```typescript
// Get all shops
const shops = await sesami.shops.get({ limit: 20 });

// Get a specific shop
//SHOP ID is not the shopify shop id but the sesami shop id
const shop = sesami.shops.getById("shop-id");
const shopData = await shop.get();

// Get shop configuration
const config = await shop.config();
```

### Services

```typescript
// Get all services for a shop
const shop = sesami.shops.getById("shop-id");
const services = await shop.services.get({ limit: 20 });

// Get a specific service
const service = shop.services.getById("service-id");
const serviceData = await service.get();
```

### Team Members

```typescript
// Get all team members
const teamMembers = await shop.teamMembers.get({ limit: 20 });

// Get a specific team member
const teamMember = shop.teamMembers.getById("team-member-id");
const teamMemberData = await teamMember.get();

// Get team member availability
const availability = await teamMember.availabilities();
```

### Appointments

```typescript
// Get all appointments
const appointments = await shop.appointments.get({ limit: 20 });

// Get a specific appointment
const appointment = shop.appointments.getById("appointment-id");
const appointmentData = await appointment.get();

// Cancel an appointment
await appointment.cancel({ refundMoney: true, content: "Cancellation reason" });
```

## Error Handling

The API client provides error details when requests fail:

```typescript
try {
  const result = await shop.services.get({});
} catch (error) {
  console.error("API Error:", error);
}
```

## Development

To set up the project for development:

```bash
git clone https://github.com/yourusername/Node-Sesami.git
cd Node-Sesami
npm install
npm run dev
```

## Testing

You can run the development server to test the API:

```bash
npm run dev
```

Then visit http://localhost:3000/test to see sample API responses.

## License

MIT

---

Created by Jayden Marquardt for Sesami integration.
