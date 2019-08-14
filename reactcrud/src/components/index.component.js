import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {users: []};
      this._isMounted = false;
  }

  componentDidMount() {
      axios.get('https://localhost:44391/api/users/')
          .then(response => {
              this.setState({users: response.data});
          })
          .catch(function (error) {
              console.log(error);
          })
  }

  componentDidUpdate() {
    this._isMounted = true;
      axios.get('https://localhost:44391/api/users/')
      .then(response => {
        if (this._isMounted) {
          this.setState({users: response.data})
        };
      })
      .catch(function (error) {
          console.log(error);
      })   
  }

  componentWillUnmount() {
        this._isMounted = false;
  }

  tabRow() {
      return this.state.users.map(function(object, i) {
          return <TableRow obj={object} key={i} />;
      });
  }

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Sex</th>
                            <th>Family Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}