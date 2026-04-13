import FeaturedAlbumCard from "../components/FeaturedAlbumCard";
import FeaturedReviewCard from "../components/FeaturedReviewCard";

const Home = () => {
  return (
    <>
      <div id="home">
        <header className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white flex flex-col items-start gap-5 p-5">
              <div className="bg-slate-600 text-white p-4 rounded-xl w-full">
                <FeaturedAlbumCard />
              </div>
              <div className="bg-slate-600 text-white p-4 rounded-xl w-full">
                <FeaturedReviewCard />
              </div>
            </h1>
          </div>
        </header>
      </div>
    </>
  );
};
export default Home;
