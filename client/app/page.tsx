import Navbar from "./_components/Navbar";

async function Home() {
  return (
    <>
      <div className="w-full h-dvh">
        <Navbar />
      </div>
      <div className="w-full h-dvh">{/* <Navbar /> */}</div>
    </>
  );
}

export default Home;
