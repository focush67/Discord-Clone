import { ModeToggle } from "@/components/toggle-mode"
import { UserButton } from "@clerk/nextjs"
export default function Home() {
  return(
    <div className='font-bold flex justify-between'>
      <UserButton  
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
  )
}
