function App() {
  return (
    <>
      <div className="flex flex-col gap-4 px-8 py-4 font-medium tracking-tight">
        <div className="flex gap-4 h-16 items-center justify-between">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-extrabold">
            React KBD Shortcuts Sandbox
          </h1>
          <a href="https://github.com/unstable-studios/react-kbd-shortcuts">
            <button className="flex px-4 py-2 mr-auto text-sm md:text-lg rounded-lg shadow-lg text-zinc-800 bg-yellow-400 font-mono font-extrabold cursor-pointer hover:bg-yellow-300 transition">
              Source
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-8 mt-8">Buttons</div>
      </div>
    </>
  );
}

export default App;
