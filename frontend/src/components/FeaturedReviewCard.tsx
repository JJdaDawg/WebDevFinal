import FeaturedReviewImage from "../assets/beatles.png";
import { Link } from "react-router-dom";
const FeaturedReviewCard = () => {
  return (
    <>
      <Link to="browse-reviews">
        <div className="flex flex-col items-start gap-5 p-5 rounded-2xl">
          <span className="font-medium text-left block">Featured Review</span>
          <div className="flex flex-row items-center gap-5 rounded-2xl">
            <div>
              <img
                className="size-64 shadow-xl rounded-md"
                alt=""
                src={FeaturedReviewImage}
              />
            </div>
            <div className="flex flex-col items-center md:items-start whitespace-nowrap">
              <span className="font-medium text-sky-500">
                Review by user xxxx
              </span>
              <span className="font-medium text-gray-500 dark:text-gray-400">
                50 Likes ⭐⭐⭐ Rating
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default FeaturedReviewCard;
