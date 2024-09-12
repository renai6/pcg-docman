import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="container p-0 m-0 columns-2 min-h-screen">
      <div className="flex flex-col justify-center min-h-screen text-center bg-orange-500 rounded-tr-xl rounded-br-xl">
        <h1 className="text-white font-bold text-xl">PCG DOCMAN</h1>
      </div>
      <div className="flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-center text-zinc-500 text-xl font-semibold mb-5">
          Welcome!
        </h1>
        <form action="" className="flex flex-col w-72 ">
          <Input type="email" placeholder="Email" className="mb-3" />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className="mb-3"
          />

          <Button type="submit" className="bg-orange-600">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
