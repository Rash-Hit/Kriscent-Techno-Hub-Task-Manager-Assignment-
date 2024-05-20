"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Task = () => {
  return (
    <Card className="flex flex-col gap-3 justify-between bt-4 w-96 p-2">
      <div>
        <Input
          type="text"
          value={"123"}
          onChange={() => {}}
          readOnly={false}
          className={`outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
        />

        <Textarea
          className={"mt-2 "}
          placeholder="Enter Description Here."
          id="description"
        />
      </div>
      <div className="flex gap-1 ml-auto">
        <Button onClick={() => {}} className="rounded px-2 w-14 py-1">
          Update
        </Button>
      </div>
    </Card>
  );
};

export default Task;
