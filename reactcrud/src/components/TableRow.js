import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props){
    console.log('props',props);

    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){
    axios({
      url: 'https://localhost:44391/api/users/'+this.props.obj.id,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE'
    })
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.birthday}</td>
        <td>{this.props.obj.sex}</td>
        <td>{this.props.obj.familyStatus}</td>
        <td>
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;