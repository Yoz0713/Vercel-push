import {React} from "react"

import {FirstPage,SecondPage,ThirdPage,ForthPage,FifthPage} from "./components/index"

export function About(){
  
    return(
        <section className="about">
            <FirstPage/>
            <SecondPage/>
            <ThirdPage />
            <ForthPage/>
            <FifthPage/>
 
        </section>
        )
    }