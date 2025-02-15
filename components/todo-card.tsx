import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import SetCompleteCheckbox from "./set-complete-checkbox";
import DeleteTodo from "./delete-todo";
import { Pencil } from "lucide-react";
import { Todo } from "./home-component";

export default function TodoCard({
  todo,
  fetchTodos,
  setSelectedTodo,
  setIsDialogOpen,
}: {
  todo: Todo;
  fetchTodos: () => Promise<void>;
  setSelectedTodo: (todo: Todo) => void;
  setIsDialogOpen: (isOpen: boolean) => void;
}) {
  return (
    <Card key={todo.id}>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SetCompleteCheckbox todo={todo} fetchTodos={fetchTodos} />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setSelectedTodo(todo);
                setIsDialogOpen(true);
              }}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <DeleteTodo deleteTodoId={todo.id} fetchTodos={fetchTodos} />
          </div>
        </CardTitle>
      </CardHeader>
      {todo.description && (
        <CardContent className="pt-0 pb-4 px-4">
          <p className="text-sm text-gray-600">{todo.description}</p>
        </CardContent>
      )}
    </Card>
  );
}
