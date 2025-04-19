
# Amazon Price & Quality Comparator

This project is a full-stack web application that scrapes Amazon for listings of a product and compares them based on price, rating, and number of reviews, helping users find the best deal and quality available.

> Disclaimer: This tool uses web scraping, which may violate Amazon’s Terms of Service. Please use it responsibly.

## Project Description

The goal of this app is to provide users with a side-by-side comparison of similar product listings on Amazon. Instead of manually checking every listing, the tool fetches all the relevant data automatically and displays it sorted by price, allowing users to pick the best choice based on price, quality (rating), and popularity (number of reviews).

## Tech Stack

| Layer         | Tech                        | Use Case |
|---------------|-----------------------------|----------|
| Frontend      | React.js                    | Building a dynamic and responsive user interface |
| Backend       | Node.js + Express.js        | Setting up a REST API server to handle search requests |
| Web Scraping  | Puppeteer                   | Headless browser used to scrape data from Amazon's website |
| Tooling       | Concurrently                | Runs backend and frontend servers together in dev mode |
| CORS Middleware | cors (npm package)        | Enables cross-origin requests from frontend to backend |

## How It Works

### Step 1: User Search

- User enters a search term in the input field (e.g., "noise cancelling headphones").

### Step 2: Backend Scraping

- The frontend sends the query to the backend (/api/search?q=...).
- Puppeteer launches a headless Chrome browser and goes to Amazon’s search results page.
- It collects data from all visible listings including:
  - Title
  - Price
  - Rating
  - Number of Reviews
  - Product URL

### Step 3: Sorting Logic

- Scraped results are sorted by price (ascending).
- The response is sent back to the frontend.

### Step 4: Display Results

- The frontend displays results using React components (ProductCard).
- Each card shows:
  - Product title
  - Price
  - Rating
  - Number of reviews
  - Link to view on Amazon

## Installation & Run Locally

```
# 1. Clone the repo
git clone https://github.com/your-username/amazon-scraper-app.git
cd amazon-scraper-app

# 2. Install backend dependencies
npm install

# 3. Install frontend dependencies
cd frontend && npm install

# 4. Start both servers
cd .. && npm run dev
```

Access the app at: http://localhost:3000

## Use Cases

- Shoppers: Compare prices and quality before buying.
- Product Analysts: Analyze product popularity and pricing.
- Learning Tool: Practice full-stack development and web scraping.

## Future Improvements

- Filter by rating, price range
- Pagination support
- Add proxy rotation to prevent scraping blocks
- Deploy to Vercel and Render

## Disclaimer

This project is for educational/demo purposes only. Scraping websites may be against their Terms of Service. This tool is not affiliated with or endorsed by Amazon in any way.

## Author

Ayushmaan Singh
