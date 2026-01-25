import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import { MovieType } from "@/types/MovieType";

interface MovieListProps {
  data: MovieType[];
  title: string;
}

export default function MovieList({ data, title }: MovieListProps) {
  if (isEmpty(data)) return;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2 sm:gap-6">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
