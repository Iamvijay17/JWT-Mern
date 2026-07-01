import { useEffect } from "react";
import api from "../services/api";

function Home() {
  useEffect(()=>{
    api.get("/profile")
  })
  return <h1>Home Page</h1>;
}

export default Home;
