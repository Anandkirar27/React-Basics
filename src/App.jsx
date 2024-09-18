
const App =  () => {

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-zinc-600">
      <h1 className="font-bold text-3xl mb-2 text-xl">Boiler plate set </h1>
      <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
      <h2>{import.meta.env.VITE_API_KEY}</h2>
    </div>
  )
}

export default App;