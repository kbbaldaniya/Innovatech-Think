import { useEffect } from "react"

export default function Home() {
  const handleProps = () => { document.ReactNativeWebView.postMessage(JSON.stringify({ label: 'react-testing' })) }
  useEffect(() => {
    document.addEventListener("message", function (data) {
      // newData.push(data.data)
      alert(data.data)
    })
  }, [])
  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
    </div>
  )
}
