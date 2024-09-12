import React from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

import { create } from "../../server-actions/cluster/create"

const FileDetailDialog = ({
  isFileDialogOpen,
  setIsFileDialogOpen,
  files,
  cluster,
}: {
  isFileDialogOpen: any
  setIsFileDialogOpen: any
  files: any
  cluster: any
}) => {
  return (
    <Dialog
      open={isFileDialogOpen}
      onOpenChange={() => setIsFileDialogOpen(false)}
    >
      <DialogContent className="bg-zinc-900 border-none">
        <DialogHeader className="">
          <DialogTitle>Document Details</DialogTitle>
          <DialogDescription>
            Add information to your document
          </DialogDescription>
        </DialogHeader>
        <form action={create} className="grid gap-4 py-4 bg-zinc-900">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="clusterName" className="text-right">
              Cluster Name
            </Label>
            <Input
              id="clusterName"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="Name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              defaultValue="@peduarte"
              className="col-span-3"
              placeholder="Description"
            />
          </div>
          <div>
            <ul>
              {files.map((file: any, index: number) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
          <DialogFooter>
            <Button type="submit">Save File</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FileDetailDialog
