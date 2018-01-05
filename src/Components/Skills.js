import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillInput: "",
      skills: []
    };
  }
  handleChange = e => {
    console.log("Input is", e.target.value);
    this.setState({
      skillInput: e.target.value
    });
  };
  addSkill = e => {
    e.preventDefault();
    console.log("Input is to be added", this.state.skillInput);
    this.setState({
      skills: [...this.state.skills, this.state.skillInput],
      skillInput: ""
    });
  };
  removeSkill = (value) => {
    console.log("element to be deleted",value)
    this.setState({
      skills: 
        this.state.skills.filter(skill => {
          
            return skill !== value;
        })
      
    });
  };
  render() {
    console.log(this.state.skills);
    return (
      <div>
        <p>your Skills (upto 10)</p>
        <div className="skill-input">
          <input
            type="text"
            value={this.state.skillInput}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button
            disabled={this.state.skills.length < 9 ? false : true}
            onClick={e => {
              this.addSkill(e);
            }}
          >
            Add
          </button>
        </div>
        <div className="skills">
          {this.state.skills.length > 0 ? (
            this.state.skills.map((skill, key) => {
              return (
                <div className="skill" key={key}>
                  <p >{skill}
                    <button onClick={() => { this.removeSkill(skill) }}> Delete</button>
                  </p>
                 
                </div>
              );
            })
          ) : (
            <p>Please Enter a skill</p>
          )}
        </div>
        <button>Continue</button>
      </div>
    );
  }
}
export default Skills;
