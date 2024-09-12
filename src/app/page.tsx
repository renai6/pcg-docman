import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  FaFileAlt,
  FaFileWord,
  FaEdit,
  FaTrash,
  FaShareAlt,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import UploadFile from "@/components/Files/UploadFile"

const cluster = [
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 2,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 3,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
  {
    name: "PCG Paper 1",
    dateCreated: "2024-06-09",
    description: "This is a test paper uploaded",
    createdBy: "John Doe",
    filesCount: 1,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-md">Docman</h1>
        <div className="flex flex-col items-end">
          <h1 className="text-sm">John Doe</h1>
          <p className="text-zinc-500 text-xs">Super Admin</p>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-xl text-yellow-600">Dashboard</h1>
        <small className="text-xs text-zinc-500">
          Documnets and attachements uploaded
        </small>
      </div>

      <UploadFile cluster={cluster} />

      <div className="grid grid-cols-2">
        <div className="pr-4">
          <div className="my-4">
            <h1 className="text-md text-yellow-600">Files</h1>
            <small className="text-xs text-zinc-500">
              Files added to the system
            </small>
          </div>
          <div className="h-[50vh] overflow-auto">
            {cluster.map((group, index) => (
              <Card
                key={index}
                className="bg-zinc-900 p-3 border-none text-white mb-2 flex items-center gap-6"
              >
                <FaFileWord size={20} />
                <div>
                  <p className="text-md font-bold text-yellow-600">
                    {group.name}
                  </p>
                  <p className="text-xs text-zinc-500">{group.description}</p>
                </div>
                <div className="flex gap-6 flex-1 justify-end items-center">
                  <p className="text-xs">{group.dateCreated}</p>
                  <p className="text-xs">{group.createdBy}</p>
                  <div className="flex gap-3">
                    <Button variant="default" size="sm">
                      <FaEdit />
                    </Button>
                    <Button variant="default" size="sm">
                      <FaShareAlt />
                    </Button>
                    <Button variant="destructive" size="sm">
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="h-72 overflow-auto pr-4">
          <div className="my-4">
            <h1 className="text-md text-yellow-600">Usage</h1>
            <small className="text-xs text-zinc-500">Storage usage</small>
          </div>
          <Card className="bg-zinc-900 py-3 px-6 border-none text-white mb-2 flex gap-5 items-center rounded-full">
            <FaFileWord size={20} />
            <div>
              <p className="text-md font-bold text-yellow-600">Documents</p>
              <p className="text-xs text-zinc-500">Word Documents</p>
            </div>
            <div className="flex gap-6 flex-1 justify-end items-center">
              <p className="text-xs">3 Files</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
