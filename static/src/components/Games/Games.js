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
            Search Options
            <div className="col-12">
              <form className="form-inline ">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0 submit_search" type="submit">Search</button>
              </form>
            </div>
            <div className="search_platform col-12">
              <span>Filter by Console</span>
              {/* Filter By CheckBoxes -- Nintendo GameBoy */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">GameBoy</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Color */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">GameBoy Color</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo GameBoy Advanced */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">GameBoy Advanced</label>
              </div>
              {/* Filter By CheckBoxes -- Super Nintendo Entertainment System (SNES) */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Super Nintendo Entertainment System (SNES)</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo 64 */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Nintendo 64</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo Gamecube */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Nintendo Gamecube</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Saturn */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Sega Saturn</label>
              </div>
              {/* Filter By CheckBoxes -- Sega Dreamcast */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Sega Dreamcast</label>
              </div>
              {/* Filter By CheckBoxes -- Playstation */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Playstation</label>
              </div>
              {/* Filter By CheckBoxes -- Nintendo Gamecube */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Playstation 2</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Xbox</label>
              </div>
              {/* Filter By CheckBoxes -- Xbox 360 */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"></input>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Xbox 360</label>
              </div>
            </div>
          </div>
          <div>
            <div className="games_display col-12">
              <span>Display Games here</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
