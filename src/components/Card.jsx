import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ name, adresse }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="card">
        <div className="card-image">
          {name ? (
            <img src={`https://robohash.org/${name}.png`} alt={name} />
          ) : (
            <img src="" alt="" />
          )}
        </div>

        <h1 className="card-title">{name}</h1>
        <h5 className="card-text">{adresse}</h5>
      </div>
      <Skeleton className="card-skeleton" count={15} />
    </SkeletonTheme>
  );
}
export default Card;
