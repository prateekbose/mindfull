import { React, useState, useEffect } from 'react'
import LandingPage from './components/landing/landing'
import Page from './components/page'

function App() {

  const pages = ["meditate", "gratitude", "music", "moods"]

  const [showLanding, setLanding] = useState(false)
  const [page, setPage] = useState("meditate")

  useEffect(() => {
    if(localStorage.getItem('showLanding') === null){
      setLanding(true)
    }
    var pageLocation = window.location.pathname.split("/")[1] || "meditate"
    setPage(pageLocation)
  }, [])

  return (
    (showLanding)
      ?<LandingPage />
      :<Page pages={pages} page={page}/> 
    
  );
}

export default App;
