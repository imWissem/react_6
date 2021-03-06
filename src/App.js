import {useState} from 'react'
import Header from "./Components/Header"
import Movies from "./Components/Movies"
import AddMovie from './Components/AddMovie'
function App() {
  const [ratingSearch, setRatingSearch] = useState(1);
  const [nameSearch, setNameSearch] = useState('');
  const [showAddMv, setShowAddMv] = useState(false)
  const [Movie, setMovie]= useState(
    [
      {
        Id: 1,
        Name: 'Over The Moon',
        Pic: 'https://th.bing.com/th/id/OIP.LFoLqzkcDbjK02GI0wCOIgHaJN?w=124&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2020',
        Type: 'Animation',
        Rating: 4,
        Description:'In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.', 
        Trailer: 'https://www.imdb.com/video/vi430686489?playlistId=tt7488208&ref_=tt_ov_vi', 
      },
      {
        Id: 2,
        Name: 'The Suicide Squad',
        Pic: 'https://th.bing.com/th/id/OIF.U8SybaNBAmmOIDTTCLkaKg?w=115&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Action',
        Rating: 5,
        Description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.", 
        Trailer: 'https://www.imdb.com/video/vi1024573465?playlistId=tt6334354&ref_=tt_ov_vi'
      },
      {
        Id: 3,
        Name: 'Loki',
        Pic: 'https://th.bing.com/th/id/OIP.QGbAX401hhlW3OZiorPZDwHaHa?w=157&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Fantasy',
        Rating: 3,
        Description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.', 
        Trailer: 'https://www.imdb.com/video/vi74498073?playlistId=tt9140554&ref_=tt_ov_vi'
      },
      {
        Id: 4,
        Name: 'What if ?',
        Pic: 'https://th.bing.com/th?id=OIF.wn4ME80DfRCxZhmwNY%2fuAw&w=115&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Animation',
        Rating: 2,
        Description:'Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.', 
        Trailer: 'https://www.imdb.com/video/vi1164820505?playlistId=tt10168312&ref_=tt_ov_vi'
      },
      {
        Id: 5,
        Name: 'Jurassic Park',
        Pic: 'https://th.bing.com/th/id/OIP.O0w5yuma7vJlt4eJLIsgIwHaLH?w=123&h=185&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '1993',
        Type: 'Adventure',
        Rating: 5,
        Description: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 
        Trailer: 'https://www.imdb.com/video/vi177055257?playlistId=tt0107290&ref_=tt_ov_vi'
      },
      {
        Id: 6,
        Name:'Black Widow',
        Pic: 'https://th.bing.com/th/id/OIP.0wxmdLQ5v_x-MEwuwpL47AHaKe?w=182&h=257&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Action',
        Rating: 3,
        Description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 
        Trailer: 'https://www.imdb.com/video/vi645185561?playlistId=tt3480822&ref_=tt_ov_vi'
      },
    ])

  const addMovie = (Movies) => {
    const id = Math.floor(Math.random()*10000)+1
    const newMovie = {id,...Movies}
    setMovie([...Movie,newMovie]) 
  }

  return (
    <div className="App">
      <Header 
      setNameSearch={setNameSearch}
      ratingSearch={ratingSearch}
      setRatingSearch={setRatingSearch}
    
      onAdd={() => setShowAddMv(!showAddMv)} showAdd={showAddMv}/>
      {showAddMv && <AddMovie onAdd={addMovie}/>}
      <Movies 
        Movie={Movie}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
    </div>
  );
}

export default App;
