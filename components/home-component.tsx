"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCallback, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import TodoCard from "./todo-card";

export interface Todo {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchTodos = useCallback(async () => {
    try {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    try {
      setIsSubmitting(true);
      const res = await fetch(
        `/api/todos/${selectedTodo ? selectedTodo.id : ""}`,
        {
          method: selectedTodo ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            ...(selectedTodo && { id: selectedTodo.id }),
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to save todo");

      await fetchTodos();
      setIsDialogOpen(false);
      setSelectedTodo(null);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error saving todo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleComplete = async (todo: Todo) => {
    try {
      const res = await fetch(`/api/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      });

      if (!res.ok) throw new Error("Failed to update todo");
      await fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end items-center mb-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setSelectedTodo(null)}>
                <Plus className="mr-2 h-4 w-4" /> Add Todo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {selectedTodo ? "Edit Todo" : "Add New Todo"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={selectedTodo?.title}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={selectedTodo?.description || ""}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Saving..."
                    : selectedTodo
                    ? "Update"
                    : "Create"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : todos?.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                No todos yet. Click &quot;Add Todo&quot; to create one.
              </CardContent>
            </Card>
          ) : (
            todos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                fetchTodos={fetchTodos}
                setSelectedTodo={setSelectedTodo}
                setIsDialogOpen={setIsDialogOpen}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
