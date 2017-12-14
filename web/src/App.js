import React, { Component } from "react";
import "./App.css";
import { getBreeds, newBreed, deleteBreed, updateBreed } from "./api/breeds";
import Breed from "./components/Breed";
import Header from "./components/Header";
import NewBreed from "./components/NewBreed";
import ShowBreed from "./components/ShowBreed";
import EditBreed from "./components/EditBreed";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class App extends Component {
  state = {
    error: null,
    breeds: null,
    createSuccess: false,
    deleteSuccess: false,
    updateSuccess: false
  };

  deleteConfirm = id => {
    confirmAlert({
      title: "Confirm to delete", // Title dialog
      message: "Are you sure?", // Message dialog
      confirmLabel: "Confirm", // Text button confirm
      cancelLabel: "Cancel", // Text button cancel
      onConfirm: () => this.onDelete(id), // Action after Confirm
      onCancel: () => null // Action after Cancel
    });
  };

  onCreatBreed = data => {
    newBreed(data)
      .then(res => {
        this.load();
        this.setState({ createSuccess: true });
        this.reset();
      })
      .catch(error => {
        this.setState({ error });
        setTimeout(() => {
          this.setState({ error: null });
        }, 1500);
      });
  };

  onUpdateBreed = (id, data) => {
    updateBreed(id, data).then(res => {
      this.load();
      this.setState({ updateSuccess: true });
      this.reset();
    });
  };

  onDelete = id => {
    deleteBreed(id).then(res => {
      this.load();
      this.setState({ deleteSuccess: true });
      this.reset();
    });
  };

  reset = () => {
    this.setState({ createSuccess: false });
    this.setState({ deleteSuccess: false });
    this.setState({ updateSuccess: false });
  };

  render() {
    const {
      breeds,
      createSuccess,
      deleteSuccess,
      updateSuccess,
      error
    } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          {error && (
            <h2 style={{ color: "red" }}>{error.response.data.error}</h2>
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return breeds && <Breed breeds={breeds} />;
              }}
            />
            <Route
              exact
              path="/breeds/new"
              render={() => {
                return (
                  <NewBreed
                    onSubmit={this.onCreatBreed}
                    createSuccess={createSuccess}
                    error={error}
                  />
                );
              }}
            />

            <Route
              exact
              path="/breeds/:id"
              render={({ match }) =>
                breeds && (
                  <ShowBreed
                    match={match}
                    breeds={breeds}
                    deleteSuccess={deleteSuccess}
                    deleteConfirm={this.deleteConfirm}
                  />
                )
              }
            />

            <Route
              exact
              path="/breeds/:id/edit"
              render={({ match }) => {
                return (
                  breeds && (
                    <EditBreed
                      breeds={breeds}
                      id={match.params.id}
                      updateSuccess={updateSuccess}
                      onSubmit={this.onUpdateBreed}
                    />
                  )
                );
              }}
            />
            <Route
              render={({ location }) => (
                <h2>Page not found: {location.pathname}</h2>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }

  load = () => {
    getBreeds().then(breeds => {
      this.setState({ breeds });
    });
  };

  // When this App first appears on screen
  componentDidMount() {
    this.load();
  }
}

export default App;
