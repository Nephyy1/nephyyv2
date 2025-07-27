export default function HomePage() {
  return (
    <div 
      className="flex flex-col min-h-screen" 
      style={{ 
        imageRendering: 'pixelated' 
      }}
    >
      <header className="absolute top-0 left-0 p-5 w-full z-10 text-white">
        <div className="flex justify-between text-2xl">
          <span>MARIO</span>
          <div className="flex items-center">
            <img src="https://www.nes-sprites.com/Images/SuperMarioBros/Coin-Icon.gif" alt="Coin" className="w-6 h-6 mr-2" />
            <span>x00</span>
          </div>
          <span>WORLD 1-1</span>
          <span>TIME</span>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 z-0">
        <img src="https://art.pixilart.com/thumb/c4f923b34293e62.png" alt="Pixel Cloud" className="absolute top-1/4 left-1/4 w-24" />
        <img src="https://art.pixilart.com/thumb/c4f923b34293e62.png" alt="Pixel Cloud" className="absolute top-1/3 right-1/4 w-32" />

        <div className="nes-container is-dark with-title is-centered">
          <p className="title">Welcome</p>
          <p>This is my personal website!</p>
        </div>

        <div className="mt-8 flex items-end space-x-12">
            <img src="https://i.gifer.com/origin/77/772855f448e89b884a01a35799e04860_w200.gif" alt="Spinning Coin" className="w-12 h-12 mb-4"/>
            <img src="https://www.pngkey.com/png/full/10-103362_super-mario-bros-mario-png.png" alt="Mario Character" className="w-24"/>
            <div className="nes-balloon from-left is-dark">
              <p>It's-a me!</p>
            </div>
        </div>
      </main>

      <footer className="w-full h-24 flex-shrink-0" style={{
        backgroundImage: `url('https://www.retrogames.cz/data/images/mario_ground.gif')`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
      }}>
      </footer>
    </div>
  );
}
