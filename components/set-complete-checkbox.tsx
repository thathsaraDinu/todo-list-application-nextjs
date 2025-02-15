import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Todo } from "./home-component";
import { Loader } from "lucide-react";

export default function SetCompleteCheckbox({
  todo,
  fetchTodos,
}: {
  todo: Todo;
  fetchTodos: () => Promise<void>;
}) {
  const [isSettingComplete, setIsSettingComplete] = useState(false);

  const toggleComplete = async (todo: Todo) => {
    try {
      setIsSettingComplete(true);

      const res = await fetch(`/api/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      });

      if (!res.ok) throw new Error("Failed to update todo");
      await fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setIsSettingComplete(false);
    }
  };

  return (
    <>
      {isSettingComplete ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Checkbox
          checked={todo.completed}
          onCheckedChange={async () => await toggleComplete(todo)}
        />
      )}
    </>
  );
}
