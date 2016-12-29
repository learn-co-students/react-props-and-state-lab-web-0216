const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
  }

  handleSelectChange(event){
    this.props.onChangeType(event.target.value)
  }

  handleFindPetsClick(){
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
