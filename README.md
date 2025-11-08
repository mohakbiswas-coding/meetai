# MeetAI: AI-Powered Meeting Application

MeetAI is an innovative application designed to make your meetings more productive and efficient using the power of Artificial Intelligence. It provides real-time transcription, summaries, and insights to help you focus on the conversation.

## ✨ Key Features

- **Real-Time Transcription:** Get a live transcript of your meetings.
- **AI-Generated Summaries:** Automatically generate concise summaries of your meetings.
- **Action Item Detection:** Identify and extract action items and decisions.
- **Speaker Identification:** Know who said what.
- **Secure Authentication:** User authentication and authorization.
- **Modern UI:** A clean and intuitive user interface built with Next.js and shadcn/ui.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** NextAuth.js (or similar)
- **Database:** (Specify your database, e.g., PostgreSQL, MySQL)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/meetai.git
    cd meetai
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Set up your environment variables. Create a `.env.local` file in the root of the project and add the necessary variables (e.g., database connection string, auth secrets).
    ```env
    DATABASE_URL="..."
    NEXTAUTH_SECRET="..."
    ```

4.  Run the database migrations:
    ```bash
    npm run db:push
    ```

5.  Start the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Folder Structure

Here's a high-level overview of the project structure:

```
.
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Shared UI components
│   ├── db/                 # Drizzle ORM schema and configuration
│   ├── lib/                # Utility functions
│   └── modules/            # Feature-based modules (e.g., auth)
├── public/                 # Static assets
└── ...
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.