const QuestionBlock = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-ground border-4 border-black animate-bob">
    <div className="absolute inset-0 bg-repeat" style={{backgroundImage: 'linear-gradient(45deg, #c27334 25%, transparent 25%, transparent 75%, #c27334 75%), linear-gradient(45deg, #c27334 25%, transparent 25%, transparent 75%, #c27334 75%)', backgroundSize: '8px 8px', backgroundPosition: '0 0, 4px 4px'}}></div>
    <span className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white" style={{textShadow: '3px 3px 0 #000'}}>?</span>
  </div>
);

const Cloud = ({ className }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <div className="relative bg-white w-16 h-12 rounded-full">
      <div className="absolute bg-white w-12 h-10 rounded-full -top-4 left-6"></div>
      <div className="absolute bg-white w-10 h-8 rounded-full -bottom-2 right-4"></div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Cloud className="top-[15%] left-[10%] opacity-80" />
      <Cloud className="top-[25%] right-[15%] scale-75 opacity-80" />
      <Cloud className="hidden md:block top-[40%] left-[25%] scale-50 opacity-80" />

      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white uppercase" style={{ textShadow: '4px 4px 0px black' }}>
          My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-10 text-yellow-300" style={{ textShadow: '2px 2px 0px black' }}>
          Level 1: The CSS World
        </p>

        <div className="flex items-end gap-8 md:gap-12">
            <div className="flex flex-col items-center">
                <QuestionBlock />
                <p className="mt-4 text-sm font-bold">Skills</p>
            </div>
            
            <div className="relative scale-125 md:scale-150 animate-characterIdle">
                <div className="pixel-character"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-pipe border-4 border-black flex items-center justify-center animate-pulse">
                    <div className="absolute w-full h-4 bg-pipe_highlight top-0 border-b-4 border-black"></div>
                    <span className="text-4xl">⭐</span>
                </div>
                <p className="mt-4 text-sm font-bold">Projects</p>
            </div>
        </div>
      </main>

      <footer className="w-full h-24 bg-ground border-t-8 border-black z-20">
        <div className="w-full h-full bg-repeat-x" style={{backgroundImage: 'linear-gradient(to bottom, transparent 90%, #a1602d 90%)'}}></div>
      </footer>
    </div>
  );
}
