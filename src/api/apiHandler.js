import axios from "axios";

const service = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default {
  service,
  getMovies() {
    return service.get(
      "discover/movie?api_key=22caaca2443aa3a2d4d3e4addc9ed676&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
    );
  },
  //   getOneBeer(id) {
  //     return service.get("/" + id);
  //   },
  //   getRandomBeer() {
  //     return service.get("/random");
  //   },
  //   postNewBeer(beer) {
  //     return service.post("/new", beer);
  //   },
  //   getSearch(searchValue) {
  //     return service.get("/search?q=" + searchValue);
  //   },
};
