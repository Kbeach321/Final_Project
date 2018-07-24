import React, {Component} from 'react';

import './Games.css';

class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid games_shell'>
        <div className="row shell">
          <div className="col-4 search_menu">
            <div className="search_platform col-12">
              <p className= 'filter'>Filter by Console</p>
              {/* Filter By CheckBoxes -- Nintendo GameBoy */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Gameboy</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Color */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboycolor" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Gameboy Color</label>              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Advanced */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">GameBoy Advanced</label>
              </div>
              {/* Filter By CheckBoxes -- Super Nintendo Entertainment System (SNES) */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Super Nintendo Entertainment System (SNES)</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo 64 */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Nintendo 64</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo Gamecube */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Gamecube</label>
              </div>
              {/* Filter By CheckBoxes -- Playstation */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Playstation</label>
              </div>
              {/* Filter By CheckBoxes -- Playstation 2 */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Playstation 2</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Saturn */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Sega Saturn</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Dreamcast */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Sega Dreamcast</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Xbox</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox 360 */}
              <div className="custom-control custom-checkbox">
                <input className="form-check-input" type="checkbox" value="gameboy" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">Xbox 360</label>
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
            <span>Display Games here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corporis nobis animi quod facere dolores laborum consequatur laudantium. Itaque in voluptatibus dolorum aliquam consectetur fugiat repellendus laborum quae voluptatum delectus!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
