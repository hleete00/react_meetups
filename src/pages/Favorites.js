import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const FavoritesCtx = useContext(FavoritesContext);

  let content;

  if (FavoritesCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet.</p>;
  } else {
    content = <MeetupList meetups={FavoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
