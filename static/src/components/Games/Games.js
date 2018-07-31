import React, {Component} from 'react';
import './Games.css';

import defaultCover from './../Images/no_image.gif';
let API_URL = process.env.REACT_APP_API_URL
console.log("potatoes", API_URL)

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games : [],
      selectedPlatform: '',
      selectedTitle: '',
      platforms: '33,22,24,19,4,21,7,8,32,23,11,12'
    }
      this._filterGames = this._filterGames.bind(this);
      this._selectPlatform = this._selectPlatform.bind(this);
      this._selectTitle = this._selectTitle.bind(this);
      this._addGame = this._addGame.bind(this);
  }

  componentDidMount() {
   let self = this;
   fetch(`${API_URL}/proxy/games/?platform_id=${this.state.platforms}&search=${this.state.selectedTitle}`)
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

  _filterGames(event) {
    event.preventDefault();

    let self = this;

    let selection;
    this.state.selectedPlatform ? selection = this.state.selectedPlatform : selection = this.state.platforms;

    fetch(`${API_URL}/proxy/games/?platform_id=${selection}&search=${this.state.selectedTitle}`)
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

  _selectPlatform(event){
    let selectedPlatform = event.target.value;
    this.setState({selectedPlatform});
  }

  _selectTitle(event) {
    let selectedTitle = event.target.value;
    this.setState({selectedTitle});
  }

  _addGame(game) {
    console.log(game)

  }


  render() {
    let games = this.state.games.map((game)=>{
      return(
        <div className='gameshell' key={game.id}>
          <a className='gameselector' href="#">
          <img className='gamecover' src={game.cover ? game.cover.url : defaultCover} alt="User Profile"/>
          <div className='gamename'>{game.name}</div> </a>
          <a href="#" className="addgametag" onClick={(event)=>{event.preventDefault(); this._addGame(game)}}>  <span className="addgame"> Add to Collection + </span> </a>
        </div>
      )
    })
    return (
      <div className='container-fluid games_shell'>
        <div className="row shell">
          <div className="col-4 search_menu">
            <div className="search_platform col-12">
              <p className= 'filter'>Filter by Console</p>
              <div className="form-check" onChange={this._selectPlatform}>
              {/* Filter By CheckBoxes -- Nintendo GameBoy */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="33"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo GameBoy Color */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="22"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy Color </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo GameBoy Advanced */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="24"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Gameboy Advanced </label>
                <br/>
                {/* Filter By CheckBoxes -- Super Nintendo Entertainment System (SNES) */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="19"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Super Nintendo Entertainment System (SNES)</label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo 64 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="4"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Nintendo 64 </label>
                <br/>
                {/* Filter By CheckBoxes -- Nintendo Gamecube */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="21"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Nintendo Gamecube </label>
                <br/>
                {/* Filter By CheckBoxes -- Playstation */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="7"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Playstation </label>
                <br/>
                {/* Filter By CheckBoxes -- Playstation 2 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="8"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Playstation 2 </label>
                <br/>
                {/* Filter By CheckBoxes -- Sega Saturn */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="32"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Sega Saturn </label>
                <br/>
                {/* Filter By CheckBoxes -- Sega Dreamcast */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="23"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Sega Dreamcast </label>
                <br/>
                {/* Filter By CheckBoxes -- Xbox */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="11"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Xbox </label>
                <br/>
                {/* Filter By CheckBoxes -- Xbox 360 */}
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="12"/>
                <label className="form-check-label" htmlFor="exampleRadios1"> Xbox 360 </label>
                <br/>
              </div>
            </div>
            <div className="searchbar col-12">
              <form className="form-inline" onSubmit={this._filterGames} >
                <input className="form-control mr-sm-2" type="search" placeholder="Search By Title..." aria-label="Search" onChange={this._selectTitle} value={this.state.selectedTitle}></input>
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
