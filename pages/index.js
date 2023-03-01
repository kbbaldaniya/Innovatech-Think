import { useCallback, useEffect, useState } from "react"

export default function Home() {
  const [appData, setAppData] = useState('')
  const handleProps = () => { console.log('handleProps'), window.ReactNativeWebView.postMessage(JSON.stringify({ label: 'react-testing' })) }

  const renderAgain = useCallback(() => {
    window.addEventListener("message", (event) => {
      console.log('INRenderAgainListener', event);
      setAppData(JSON.stringify(event.data));
    })
  }, [])

  useEffect(() => {
    console.log({ appData });
  }, [appData])

  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
      <h1>{appData}</h1>
      <button onClick={renderAgain}>Render Again</button>
    </div>
  )
}
