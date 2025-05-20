"use client"

import { UserButton } from "@clerk/nextjs"
import { ChartColumnBigIcon } from "lucide-react"
import { useRouter } from "next/navigation";


export default function UserDropdown(){
  const route = useRouter();

  return (
    <UserButton showName appearance={{
        elements: {
            userButtonOuterIdentifier:{
                color: "white"
            }
        }
    }}>
      <UserButton.MenuItems>
          <UserButton.Action 
          label="Dasboard"
          labelIcon={<ChartColumnBigIcon size={16} />}
          onClick={() => {
          route.push("/dashboard")
          }} />

      </UserButton.MenuItems>
    </UserButton>
  )
}