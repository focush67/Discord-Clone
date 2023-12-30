import { UserButton } from "@clerk/nextjs"
export default function Home() {
  return(
    <div className='font-bold flex flex-col'>
      <UserButton  
        afterSignOutUrl="/"
        
      />
    </div>
  )
}
