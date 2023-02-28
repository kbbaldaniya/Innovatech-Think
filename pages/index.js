export default function Home() {
  const handleProps = () => { window.ReactNativeWebView.postMessage(JSON.stringify({label: 'react-testing'})) }
  return (
    <div>
      <h1>Native Testing...</h1>
      <button onClick={handleProps}>Click here</button>
    </div>
  )
}
