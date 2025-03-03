# Robo Advisor v0.1.0

Robo Advisor is an innovative, AI-powered platform designed to transform the landscape of investment research. In this initial release, we lay a robust foundation that merges advanced machine learning techniques with intuitive financial analytics. Crafted as a learning and exploratory tool, Robo Advisor empowers users to dive deep into market data and financial trends, while setting the stage for an ever-expanding ecosystem of investment research features.

## Key Features

### Smart Financial Assistant
- Interact with an advanced AI designed to guide you through detailed financial research and comprehensive stock analysis.
- The assistant adapts to your queries, offering insights and context to enhance your understanding of market dynamics.

### Interactive Visual Analytics
- Harness the power of a dynamic, generative interface that transforms real-time market metrics and key financial data into clear, actionable visualizations.
- Makes complex information more accessible.

### Extensible Data Integration
- Access a rich repository of historical and current market data curated for high-level financial analysis.
- Establishes the groundwork for a scalable system that will support an even broader range of datasets in the future.

### Modular and Future-Ready Architecture
- Built with extensibility in mind.
- Structured to incorporate new analytical tools, machine learning models, and additional asset classes as the platform evolves.

## Setup

### Clone the Repository
```bash
git clone https://github.com/virattt/robo-advisor.git
cd robo-advisor
```

### Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### Install Dependencies
```bash
pnpm install
```

### Set Up Your Environment Variables
1. Create a .env file for your API keys:
```bash
cp .env.example .env
```
2. Set the API keys in the .env file:
```dotenv
OPENAI_API_KEY=your-openai-api-key
FINANCIAL_DATASETS_API_KEY=your-financial-datasets-api-key
LANGCHAIN_API_KEY=your-langsmith-api-key
LANGCHAIN_TRACING_V2=true
LANGCHAIN_PROJECT=Robo-Advisor
```
> Important: You should not commit your .env file as it contains sensitive information that could allow unauthorized access to your accounts.

### Run the Agent
After completing the steps above, start the development server with:
```bash
pnpm dev
```
Your app template should now be running on http://localhost:3000.