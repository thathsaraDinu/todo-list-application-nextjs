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
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root of your project and add the following variables (or update with your own values):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Run the Development Server
Start the development server by running:

```bash
npm run dev
```

Your app should now be running locally at [http://localhost:3000](http://localhost:3000).

### 5. Database Setup (if applicable)
If you're using Prisma or any other database, follow the steps below to set up the database:

Run migrations to set up the database:

```bash
npx prisma migrate dev
```

Seed the database with initial data (optional):

```bash
npx prisma db seed
```

## Additional Features
- **Task Completion**: Allows users to toggle tasks as completed by clicking a checkbox. The tasks’ completion status is stored and updated accordingly in the database.
- **User Authentication**: *(Add if applicable)* Users can sign in and sign up to manage their own tasks securely.

## Deployment
To deploy this project, follow the steps below for Vercel:

1. Push the project to a GitHub repository.
2. Link the repository to Vercel.
3. Set the environment variables in Vercel (if necessary).
4. Deploy!

## Technologies Used
- Next.js
- React
- Prisma (for database management)
- Tailwind CSS (for styling)
- Vercel (for deployment)

## Contributing
Feel free to fork the repository, submit issues, and make pull requests. Contributions are always welcome!
