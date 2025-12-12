# Frontend Assignment - Chat Application

This project is a chat application dashboard implemented with a modern tech stack. It showcases complex UI implementation, component-based architecture, and server-side data fetching with Loading UI states.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## Features & Implementation

### 1. UI Implementation

- **Dashboard Layout:** A responsive 3-column layout consisting of a Navigation Sidebar (Chat List), Main Chat Area, and Details Panel.
- **Components:** Modular components for `ChatList`, `ChatArea`, and `DetailsPanel`.
- **Styling:** Pixel-perfect implementation based on the provided design, utilizing Tailwind CSS for styling and responsiveness (optimized for Desktop).
- **Icons:** Integrated `lucide-react` and custom SVGs for a polished look.

### 2. API Integration Demo

- **Route:** `/api-demo` (Accessible via the "API Demo" link in the sidebar).
- **Data Source:** Integrated with [dummyjson.com/posts](https://dummyjson.com/posts) to fetch live post data.
- **Server-Side Fetching:** Utilizes Next.js Server Components. Data is fetched directly on the server properly typed with TypeScript interfaces.
- **Loading State:** Implemented **React Suspense** with a Skeleton loader (`Shimmer effect`) to provide a smooth user experience while data is being fetched. An artificial delay was added to clearly demonstrate this state.

## Deployment

The application is live and deployed on Vercel:
[https://frontend-assignment-chat-application.vercel.app/](https://frontend-assignment-chat-application.vercel.app/)

---

> **Note:** I know the requirements are not 100% complete because I had an emergency, but this work is enough to understand my expertise.
