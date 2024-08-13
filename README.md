# Notes App Backend - Ahmadhi

This is a simple CRUD (Create, Read, Update, Delete) notes application built using Bun, GraphQL, and Apollo Server.

## Technologies Used

- [Bun](https://bun.sh/) - A modern JavaScript runtime like Node or Deno.
- [GraphQL](https://graphql.org/) - A query language for your API.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - A GraphQL server to execute queries and mutations.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- [Node.js](https://nodejs.org/) for development purposes.

### Development

1. **Clone the Repository**

```bash
git clone git@github.com:Roixys/be-notes-graphql.git
cd be-notes-graphql
```

2. Create `.env` file in **root directory** with following items:

```dotenv
DB_USER="postgres.ezqeohhpglgcrgzdjzsm"
DB_HOST="aws-0-ap-southeast-1.pooler.supabase.com"
DB_NAME="postgres"
DB_PASSWORD="lwoOpisZ2KCvOryV"
DB_PORT="6543"
```

**NOTE that**, this env comes from a PostgreSQL database that I have deployed on [Supabase](https://supabase.com/). The database should remain up for the next 7 days.

3. **Install Dependencies**

```bash
bun install
```

4. **Run development server**

```shell
bun --bun start
```

The server will run on port 4000.

This project was created using `bun init` in bun v1.1.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
