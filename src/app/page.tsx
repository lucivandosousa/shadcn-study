"use client"

import Header from "@/components/Header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {

  const [alertMessage, setAlertMessage] = useState("")

  const handleCancel = () => {
    setAlertMessage("Ação cancelada.")
  }

  const handleConfirm = () => {
    setAlertMessage("Ação confirmada!")
  }

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [alertMessage])

  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Shadcn</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas.
            </CardDescription>
          </CardHeader>
          <CardContent className="border-t border-slate-400 py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio repellendus velit inventore officiis. Quos alias ducimus dolorem cupiditate a maiores. Fugiat ipsa tempore excepturi voluptatem quam ea aspernatur aut nihil?
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button onClick={handleConfirm}>Confirmar</Button>
          </CardFooter>
        </Card>

        {alertMessage && (
          <div className="mt-4 w-full max-w-sm">
            <Alert>
              <AlertTitle className="mt-4 w-s">Alerta!!!</AlertTitle>
              <AlertDescription className="mt-4 w-s">{alertMessage}</AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </>
  )
}
