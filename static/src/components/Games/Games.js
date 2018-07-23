import React, {Component} from 'react';

import './Games.css';

class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <container className='games_shell'>
        <div class="row shell">
          <div class="col-3 search_menu">
            Search Options
            <div class="col-12">
              Search Bar [TBD]
            </div>
            <div className="search_platform col-12">
              <span>Filter by Console</span>
              {/* Filter By CheckBoxes -- Nintendo GameBoy */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">GameBoy</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Color */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">GameBoy Color</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Advanced */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">GameBoy Advanced</label>
              </div>
              {/* Filter By CheckBoxes -- Super Nintendo Entertainment System (SNES) */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Super Nintendo Entertainment System (SNES)</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo 64 */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Nintendo 64</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo Gamecube */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Nintendo Gamecube</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Saturn */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Sega Saturn</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Dreamcast */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Sega Dreamcast</label>
              </div>
              {/* Filter By CheckBoxes -- Playstation */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Playstation</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo Gamecube */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Playstation 2</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Xbox</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox 360 */}
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"></input>
                <label class="custom-control-label" for="defaultUnchecked">Xbox 360</label>
              </div>
            </div>
          </div>
          <div>
            <div className="games_display col-12">
              <span>Display Games here</span>
            </div>
          </div>
        </div>
      </container>
    );
  }
}

export default Games;
