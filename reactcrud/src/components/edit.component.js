/*import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('https://localhost:44391/api/users/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                name: response.data.name, 
                birthday: response.data.birthday,
                sex: response.data.sex,
                familyStatus: response.data.familyStatus });
          })
          .catch(function (error) {
              console.log(error);
          })
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
          method: 'PUT',                
          data: JSON.stringify({
            id: this.props.match.params.id,
            name: this.state.name,
            birthday: this.state.birthday,
            sex: this.state.sex,
            familyStatus: this.state.familyStatus
          })
        })
        this.props.history.push('/index');
      }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Update Users</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Birthday: </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.birthday}
                      onChange={this.onChangeBirthday}
                      />
                </div>
                <div className="form-group">
                    <label>Sex: </label>
                      <select className="form-control"
                      value={this.state.sex}
                      onChange={this.onChangeSex}>
                          <option value="Male"> Male</option>
                          <option value="Female"> Female</option>
                      </select>
                </div>
                <div className="form-group">
                    <label>Family Status: </label>
                    <select className="form-control"
                      value={this.state.familyStatus}
                      onChange={this.onChangeFamilyStatus}>
                          <option value="Single"> Single</option>
                          <option value="Married"> Married</option>
                      </select>
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}*/
import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component {

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
            sex: ''
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44391/api/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    birthday: response.data.birthday,
                    sex: response.data.sex,
                    familyStatus: response.data.familyStatus
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeBirthday(e) {
        this.setState({
            birthday: e.target.value
        });
    }

    onChangeSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    onChangeFamilyStatus(e) {
      this.setState({
          familyStatus: e.target.value
      });
  }

    onSubmit(e) {
        e.preventDefault();
        axios({
          url: 'https://localhost:44391/api/users/',
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',                
          data: JSON.stringify({
            id: this.props.match.params.id,
            name: this.state.name,
            birthday: this.state.birthday,
            sex: this.state.sex,
            familyStatus: this.state.familyStatus
          })
        })
        this.props.history.push('/index');
      }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
            <h3>Update Person</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Birthday: </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.birthday}
                      onChange={this.onChangeBirthday}
                      />
                </div>
                <div className="form-group">
                    <label>Sex: </label>
                      <select className="form-control"
                      value={this.state.sex}
                      onChange={this.onChangeSex}>
                          <option value="Male"> Male</option>
                          <option value="Female"> Female</option>
                      </select>
                </div>
                <div className="form-group">
                    <label>Family Status: </label>
                    <select className="form-control"
                      value={this.state.familyStatus}
                      onChange={this.onChangeFamilyStatus}>
                          <option value="Single"> Single</option>
                          <option value="Married"> Married</option>
                      </select>
                </div>                
                <div className="form-group">
                    <input type="submit" 
                      value="Update" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}
