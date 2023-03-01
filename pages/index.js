import { useEffect, useLayoutEffect, useState } from "react"

export default function Home() {
  const handleProps = () => { console.log('handleProps'), window.ReactNativeWebView.postMessage(JSON.stringify({ label: 'react-testing' })) }

  useEffect(() => {
    console.log('UseEffect');
    window.addEventListener("message", (event) => {
      console.log('data', event.data);
    })
  }, [])


  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
    </div>
  )
}
