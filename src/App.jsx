
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";
import Loading from "./components/Loading";


const fetchIssues = async()=>{
  const result = await fetch('/data.json')
  return result.json()
}


function App() {

 const facePromise = fetchIssues()

   return (
     <div>
       <Navbar />
       <Suspense fallback = {<Loading/>}>
         <IssuesManagement facePromise={facePromise} />
       </Suspense>

       <Footer />
     </div>
   );
}

export default App
