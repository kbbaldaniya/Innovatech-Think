export default function Home() {
  const handleProps = () => { window.ReactNativeWebView.postMessage(JSON.stringify(data)) }
  return (
    <div>
      <button onClick={handleProps}>Click here</button>
    </div>
  )
}
