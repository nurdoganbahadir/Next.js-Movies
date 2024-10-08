import { FeaturedMovie } from "@/components/featured-movie";

function MovieContainer({ movie }) {
  console.log(movie);
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };
