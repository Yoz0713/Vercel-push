import {React} from "react"
import {FirstPage,SecondPage,ThirdPage,ForthPage,FifthPage,SixthPage} from "./components/first-page"

export function Home(){
       
        return(
        <section className="home">
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <ForthPage />
            <FifthPage />
            <SixthPage />
        </section>
        )
   
}