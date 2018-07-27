import React, {Component} from 'react';
import './Games.css';


class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games : []
    }

    // this._getSearchResults = this._getSearchResults.bind(this);
  }

  componentDidMount() {
   let self = this;

   fetch(`http://localhost:8000/proxy/games/`)
   .then(function(response){
     if(!response.ok){
       throw Error(response.statusText);
     }
     console.log(response)
     return response.json()
   })
   .then(function(responseJSON){
     console.log('response', responseJSON)
     self.setState({games: responseJSON});
   })
   .catch(function(error){
     console.log('Looks like there was a problem: \n', error);
   });
  }

  render() {
    console.log('games', this.state.games)
    let games = this.state.games.map(function(game){
      return(
        <div className='gameshell' key={game.id}>
          <a className='gameselector' href="#">
          <img className='gamecover' src={game.cover.url} alt="User Profile"/>
          <div className='gamename'>{game.name}</div> </a>
          <a href="#" className="addgametag">  <span className="addgame"> Add to Collection + </span> </a>
        </div>
      )
    })
    console.log('state', this.state.games);
    return (
      <div className='container-fluid games_shell'>
        <div className="row shell">
          <div className="col-4 search_menu">
            <div className="search_platform col-12">
              <p className= 'filter'>Filter by Console</p>
              <div className="form-check">
              {/* Filter By CheckBoxes -- Nintendo GameBoy */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo GameBoy Color */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy Color </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo GameBoy Advanced */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy Advanced </label>
                <br/>
                {/* Filter By CheckBoxes -- Super Nintendo Entertainment System (SNES) */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Super Nintendo Entertainment System (SNES)</label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo 64 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Nintendo 64 </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo Gamecube */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Nintendo Gamecube </label>
                <br/>
                {/* Filter By CheckBoxes -- Playstation */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Playstation </label>
                <br/>
                {/* Filter By CheckBoxes -- Playstation 2 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Playstation 2 </label>
                <br/>
                {/* Filter By CheckBoxes -- Sega Saturn */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Sega Saturn </label>
                <br/>
                {/* Filter By CheckBoxes -- Sega Dreamcast */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Sega Dreamcast </label>
                <br/>
                {/* Filter By CheckBoxes -- Xbox */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Xbox </label>
                <br/>
                {/* Filter By CheckBoxes -- Xbox 360 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Xbox 360 </label>
                <br/>
              </div>
            </div>
            <div className="searchbar col-12">
              <form className="form-inline ">
                <input className="form-control mr-sm-2" type="search" placeholder="Search By Title..." aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0 submit_search" type="submit">Search</button>
              </form>
            </div>
          </div>
          <div className="games_display col col-md-8">
            <h1 className="find_games"> Find/Add Games </h1>
            {games}
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
