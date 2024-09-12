"use client"
import React, { useRef, useState } from "react"
import { IoMdCloudUpload } from "react-icons/io"
import { Input } from "../ui/input"

import FileDetailDialog from "./FileDetailDialog"

const UploadFile = ({ cluster }: { cluster: any }) => {
  const uploadFileRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<any>([])
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false)

  const onFileSelect = (e: any) => {
    const files = e.target.files
    if (files.length > 0) {
      const newFiles = Array.from(files)
      setFiles((prevFiles: any) => [...prevFiles, ...newFiles])
      setIsFileDialogOpen(true)
    }
  }

  const onClickUpload = (e: any) => {
    uploadFileRef.current?.click()
  }
  const onDropUpload = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <div
        className="grid grid-rows-1 grid-flow-col mb-3 cursor-pointer"
        onClick={onClickUpload}
        onDrop={onDropUpload}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="pt-4 flex flex-col items-center justify-center border-dashed border rounded-xl">
          <IoMdCloudUpload size={40} />
          <span>Click to upload documents</span>
          <small>Maximum file size 50MB</small>
          <Input
            onChange={onFileSelect}
            ref={uploadFileRef}
            id="file"
            type="file"
            className="invisible h-1"
          />
        </div>
      </div>
      <FileDetailDialog
        cluster={cluster}
        files={files}
        isFileDialogOpen={isFileDialogOpen}
        setIsFileDialogOpen={setIsFileDialogOpen}
      />
    </>
  )
}

export default UploadFile
