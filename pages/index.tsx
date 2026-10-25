import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <main className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      <h1 className="relative z-10 text-7xl md:text-9xl font-black tracking-tighter text-white animate-bounce drop-shadow-[0_0_60px_rgba(255,255,255,0.3)]">
        Hello World
      </h1>
      <footer className="absolute bottom-8 z-10 text-xs tracking-[0.3em] text-white/40 uppercase">
        0XM4NGLI
      </footer>
    </main>
    </>
  );
}
