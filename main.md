# TokenBandit Project Structure

TokenBandit/
├── frontend/
│   ├── public/               # Static assets (images, icons, etc.)
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components for routing
│   │   ├── hooks/            # Custom React hooks
│   │   ├── styles/           # CSS and styling files
│   │   └── utils/            # Utility functions
├── backend/
│   ├── src/
│   │   ├── controllers/      # Business logic for handling requests
│   │   ├── models/           # Database models
│   │   ├── routes/           # API route definitions
│   │   ├── services/         # Services for handling external interactions
│   │   └── utils/            # Utility functions for the backend
├── contracts/
│   ├── programs/             # Smart contracts for the Solana blockchain
│   │   ├── src/
│   │   │   ├── lib.rs        # Main logic for Solana smart contracts
│   │   │   ├── constants.rs  # Program constants (e.g., SPL token mint addresses)
│   │   │   ├── state.rs      # Data structures for Solana accounts
│   │   │   ├── errors.rs     # Custom error handling
│   │   │   └── instructions/  # Program instructions (e.g., token snipe)
│   ├── Anchor.toml           # Anchor program configuration
│   ├── Cargo.toml            # Rust dependencies
│   └── migrations/           # Anchor migrations
├── database/
│   ├── migrations/           # Database migrations
│   ├── schema.sql            # Schema definition for PostgreSQL
│   └── db_config.json        # Database configuration file
├── .env                      # Environment variables
├── docker-compose.yml        # Docker configuration for services
└── README.md                 # Project documentation
