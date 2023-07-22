import { Component } from "react";
import UserProfiles from "./components/UserProfiles";
import "./App.css";

const InitialUsersInformation = [
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "ajay",
    role: "Fronted Developer",
    id: 1,
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "ak",
    role: "Fronted Developer",
    id: 2,
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "avr",
    role: "Fronted Developer",
    id: 3,
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "rajani",
    role: "Fronted Developer",
    id: 4,
  },
];

class App extends Component {
  state = {
    changeInput: "",
    usersList: InitialUsersInformation,
  };

  onChange = (event) => {
    this.setState({ changeInput: event.target.value });
  };

  onDeleteUser = (id) => {
    const { usersList } = this.state;
    const deleteUserResult = usersList.filter((each) => each.id !== id);
    this.setState({ usersList: deleteUserResult });
  };

  render() {
    const { changeInput, usersList } = this.state;
    const searchResult = usersList.filter((each) =>
      each.name.includes(changeInput)
    );

    return (
      <div className="bg_user_container">
        <h1>users</h1>
        <input type="search" className="input_" onChange={this.onChange} />
        <ul className="unorder_list_container">
          {searchResult.map((each) => (
            <UserProfiles
              userInfo={each}
              key={each.id}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
