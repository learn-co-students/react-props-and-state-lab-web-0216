const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleAdoption = this.handleAdoption.bind(this);

  }

  handleAdoption(){
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    let adoptionButton =  <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
      if(this.props.isAdopted) {
        adoptionButton =  <button className="ui disabled button">Already adopted</button>
      }
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} Gender: { this.props.pet.gender === "male" ? "♂" : "♀" }</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">  
          {adoptionButton}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
