import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeFamilyStatus = this.onChangeFamilyStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      birthday: '',
      sex:'',
      familyStatus:''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
    })  
  }
  onChangeSex(e) {
    this.setState({
      sex: e.target.value
    })
  }
  onChangeFamilyStatus(e) {
    this.setState({
      familyStatus: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    axios({
      url: 'https://localhost:44391/api/users/',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',                
      data: JSON.stringify({
        id: this.props.match.params.id,
        name: this.state.name,
        birthday: this.state.birthday,
        sex: this.state.sex,
        familyStatus: this.state.familyStatus
      })
    })  
    
    this.setState({
      name: '',
      birthday: '',
      sex: '',
      familyStatus:''
    })

    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Person</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control"
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Birthday: </label>
                    <input type="date" 
                      className="form-control"
                      onChange={this.onChangeBirthday}
                      />
                </div>
                <div className="form-group">
                    <label>Sex: </label>
                      <select className="form-control"
                      onChange={this.onChangeSex}>
                            <option value="def" selected disabled>Choose here</option>
                            <option value="Male"> Male</option>
                            <option value="Female"> Female</option>
                        </select>
                </div>
                <div className="form-group">
                    <label>Family Status: </label>
                      <select className="form-control"
                      onChange={this.onChangeFamilyStatus}>
                            <option value="def" selected disabled>Choose here</option>
                            <option value="Single"> Single</option>
                            <option value="Married"> Married</option>
                        </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}