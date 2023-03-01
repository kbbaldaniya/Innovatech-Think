import { useEffect } from "react"

export default function Home() {
  const handleProps = () => { console.log('handleProps'), window.ReactNativeWebView.postMessage(JSON.stringify({ label: 'react-testing' })) }

  document.addEventListener("message", function (data) {
    console.log('data', data);
    // newData.push(data.data)
    alert(data.data)
  })


  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
    </div>
  )
}
