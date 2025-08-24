# E-Commerce Gateway

A microservices-based e-commerce API gateway built with Express Gateway, designed to route and manage requests across multiple backend services.

## 🏗️ Architecture

This project implements an API gateway pattern with the following microservices:

- **Gateway**: Main entry point using Express Gateway
- **Products Service**: Handles product catalog operations
- **Payments Service**: Manages payment processing
- **Orders Service**: Handles order management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd e-com-gateway
```

2. Install gateway dependencies:
```bash
npm install
```

3. Install service dependencies:
```bash
# Products service
cd services/products
npm install

# Payments service
cd ../payments
npm install

# Orders service
cd ../orders
npm install

# Return to root directory
cd ../..
```

### Running the Application

1. Start the API Gateway:
```bash
npm start
```

The gateway will run on:
- **API Gateway**: http://localhost:8080
- **Admin Panel**: http://localhost:9876

2. Start individual services (in separate terminals):
```bash
# Products service
cd services/products && node app.js

# Payments service
cd services/payments && node app.js

# Orders service
cd services/orders && node app.js
```

## 📁 Project Structure

```
e-com-gateway/
├── server.js                 # Gateway entry point
├── package.json              # Gateway dependencies
├── config/                   # Gateway configuration
│   ├── gateway.config.yml    # API routes and policies
│   ├── system.config.yml     # System configuration
│   └── models/               # Data models
│       ├── applications.json
│       ├── credentials.json
│       └── users.json
└── services/                 # Microservices
    ├── products/             # Product catalog service
    │   ├── app.js
    │   └── package.json
    ├── payments/             # Payment processing service
    │   ├── app.js
    │   └── package.json
    └── orders/               # Order management service
        ├── app.js
        └── package.json
```

## 🔧 Configuration

### Gateway Configuration

The main gateway configuration is located in `config/gateway.config.yml`:

- **Port**: 8080 (API), 9876 (Admin)
- **API Endpoints**: Configured for IP service routing
- **Policies**: Supports authentication, CORS, rate limiting, etc.

### Available Policies

- Basic Authentication
- CORS
- Key Authentication
- OAuth2
- Rate Limiting
- Proxy
- Logging

## 🛠️ Development

### Adding New Services

1. Create a new service directory under `services/`
2. Initialize with `package.json` and `app.js`
3. Update `gateway.config.yml` to include new service endpoints
4. Configure routing policies as needed

### Service Templates

Each service should follow this basic structure:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Add your routes here

app.listen(PORT, () => {
    console.log(`Service running on port ${PORT}`);
});
```

## 🔐 Security

- Authentication policies available (basic-auth, key-auth, oauth2)
- CORS support for cross-origin requests
- Rate limiting to prevent abuse
- Configurable security policies per endpoint

## 📈 Monitoring

- Admin panel available at http://localhost:9876
- Built-in logging policies
- Gateway metrics and health checks

## 🧪 Testing

```bash
# Test the gateway endpoint
curl http://localhost:8080/ip
```

## 📝 TODO

- [ ] Implement service business logic
- [ ] Add database connections
- [ ] Configure service-specific authentication
- [ ] Add comprehensive logging
- [ ] Implement health checks
- [ ] Add API documentation
- [ ] Set up Docker containers
- [ ] Add unit and integration tests

## 📄 License

This project is licensed under the UNLICENSED License - see the [LICENSE](LICENSE) file for details.

## 🛡️ Express Gateway

This project is built on [Express Gateway](https://www.express-gateway.io/), a microservices API gateway built on Express.js.

For more information about Express Gateway features and configuration, visit the [official documentation](https://www.express-gateway.io/docs/).
