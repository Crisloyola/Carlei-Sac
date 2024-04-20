import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

export const App = () => {
  return (
    <>
    
      <Header/>

      <Hero />
      <div className="absolute top-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:14px_24px]">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[5%] translate-y-[20%] rounded-full bg-primary opacity-10 blur-[80px]"></div>
        <div className="absolute bottom-auto right-auto left-0 top-[25rem] h-[500px] w-[500px] -translate-x-[5%] translate-y-[20%] rounded-full bg-primary opacity-10 blur-[80px]"></div>
      </div> 
  
    </>
  )
}