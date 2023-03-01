import { useEffect, useState } from "react"

export default function Home() {
  const [appData, setAppData] = useState({})
  const handleProps = () => { console.log('handleProps'), window.ReactNativeWebView.postMessage(JSON.stringify({ label: 'react-testing' })) }

  useEffect(() => {
    console.log('UseEffect');
    window.addEventListener("message", (event) => {
      setAppData(JSON.stringify(event));
    })
  }, [])

  useEffect(() => {
    console.log("appData", appData);
  },[appData])


  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
      <h1>{appData}</h1>
    </div>
  )
}
