import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row"
import request from "./request"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}  
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
