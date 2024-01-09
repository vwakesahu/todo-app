// src/app/api-todo/ExternalTodoList.js
import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
const ExternalTodoList = ({ todos }) => {
  
  //   const handleClick = (id) => {
  //     router.push(`/api-todo/${id}`);
  //   };

  if (!todos) {
    return (
      <div className="h-screen w-screen flex items-center justify-center md:pb-32 pb-16">
        <Lottie animationData={Loading} />
      </div>
    );
  }

  return (
    <div className="md:px-12 pt-4">
      {/* <ul>
        {todos.map((todo) => (
          <Link href={`/api-todo/${todo.id}`}>
            <li key={todo.id}>{todo.title}</li>
          </Link>
        ))}
      </ul> */}

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>User Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell>{todo.userId}</TableCell>
              <TableCell>
                <Link href={`/api-todo/${todo.id}`}>{todo.title}</Link>
              </TableCell>
              <TableCell className="text-right">
                {todo.completed === false ? (
                  <Badge
                    className={
                      "bg-red-500 text-background hover:text-foreground"
                    }
                  >
                    {todo.completed.toString()}
                  </Badge>
                ) : (
                  <Badge
                    className={
                      "bg-green-500 text-background hover:text-foreground"
                    }
                  >
                    {todo.completed.toString()}
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExternalTodoList;
