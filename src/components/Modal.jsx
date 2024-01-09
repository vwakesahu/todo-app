import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { useState } from "react";

export function DialogDemo({
  description,
  MainButtonText,
  title,
  date,
  setTitleFuct,
  onchangeTitle,
  onchangeDate,
  setDateFunct,
  buttonText,
  buttonHandleFunct,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-2">{MainButtonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={onchangeTitle}
              value={title}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Date
            </Label>
            <Input
              id="username"
              className="col-span-3"
              onChange={onchangeDate}
              value={date}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={buttonHandleFunct}>{buttonText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
