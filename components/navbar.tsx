"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogTitle, // This is required for closing the dialog programmatically
} from "./ui/dialog";
import { useState } from "react";

export default function Navbar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setIsSubmitting(true);
      await signOut();
      router.push("/auth/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <nav className=" p-4 bg-slate-200 text-foreground">
      <div className="container mx-auto flex justify-between items-center px-20">
        <h1 className="text-xl font-bold">Todo App</h1>
        <div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant={"destructive"}>Sign Out</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign Out</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Are you sure you want to sign out?
              </DialogDescription>
              <DialogFooter>
                <Button
                  onClick={async () => {
                    await handleSignOut();
                  }}
                  variant={"destructive"}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing Out..." : "Sign Out"}
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
