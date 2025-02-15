# Todo List Management App

This is a Todo List Management application built with Next.js, where users can add, manage, and mark tasks as completed. It allows users to manage their tasks efficiently and keeps track of the progress in an easy-to-use interface.

## Features

- Add new tasks.
- Mark tasks as completed.
- View the list of tasks with the ability to toggle completion status.
- Built using Next.js and React.

### Features Implemented:

- **Task Completion Toggle**: Added a feature to mark tasks as completed and uncompleted. Tasks can be marked complete by checking the checkbox next to each task, and the status is saved and updated in the backend.

## Setup and Run Locally

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/thathsaraDinu/todo-list-application-nextjs
cd todo-list-application-nextjs
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add the following variables (update with your own values):

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="your-nextauth-secret"
DATABASE_URL="your-mongodb-url"
```

### 4. Run the Development Server

Start the development server by running:

```bash
npm run dev
```

Your app should now be running locally at [http://localhost:3000](http://localhost:3000).

### 5. Database Setup

Using Prisma, generate the client:

```bash
npx prisma generate
```

(Optional) Seed the database with initial data:

```bash
npx prisma db seed
```

## Additional Features

- **Task Completion**: Allows users to toggle tasks as completed by clicking a checkbox. The tasks’ completion status is stored and updated accordingly in the database.
- **User Authentication**: Users can sign in and sign up to manage their own tasks securely.

## Technologies Used

- Next.js
- React
- Prisma (for database management)
- Tailwind CSS (for styling)
- Vercel (for deployment)

## Contributing

Feel free to fork the repository, submit issues, and make pull requests. Contributions are always welcome!
