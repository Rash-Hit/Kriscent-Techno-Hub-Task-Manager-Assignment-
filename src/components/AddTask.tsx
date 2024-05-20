"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useClerk } from "@clerk/nextjs";

const AddTask = () => {
  const { user } = useClerk();
  console.log(user?.publicMetadata, "publicMetadata");
  return (
    <>
      <Card className="flex flex-col gap-3 justify-between bt-4">
        <CardHeader>
          <CardTitle>Add a Task</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Title" />
          <div className="grid w-full gap-1.5 mt-4 ">
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Enter Description Here." id="description" />
          </div>

          {user?.publicMetadata !== undefined && (
            <div className="mt-3  w-96 ">
              <DropdownMenu>
                <DropdownMenuTrigger>Assign to Employee</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Employee </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Employee</DropdownMenuItem>
                  <DropdownMenuItem>Employee </DropdownMenuItem>
                  <DropdownMenuItem>Employee </DropdownMenuItem>
                  <DropdownMenuItem>Employee </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button>Add Task </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AddTask;
