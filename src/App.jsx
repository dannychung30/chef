import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react"

export default function App() {

    // let [isImportant, setIsImportant] = useState("Yes");

    // function handleClick() {
    //     setIsImportant("Definitely");
    // }

    return (
        <>
            <Header />
            <Main />
        </>
    )
  }
  