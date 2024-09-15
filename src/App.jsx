
const App =  () => {

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-zinc-600">
      <h1 className="font-bold text-3xl mb-2 text-xl">Boiler plate set </h1>
      <h2>{import.meta.env.VITE_API_KEY}</h2>
    </div>
  )
}

export default App;