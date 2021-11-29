import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { accounts, contract } = this.state;
    // Stores a given value, 5 by default.
    const setResponse = await contract.methods
      .set(this.state.storageValue)
      .send({ from: accounts[0] });
    console.log(
      "contrat set response ",
      setResponse.events.storedDataChange.returnValues
    );
    const response = await contract.methods.get().call();
    console.log("contrat get response : " + response);
    this.setState({ storageValue: response });
  };

  handleChange = async (e) => {
    console.log(e.target.value);
    this.setState({ storageValue: e.target.value });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>

        <div>
          {
            <form onSubmit={this.handleSubmit} className="form">
              <label>
                Choose a value:
                <input
                  type="number"
                  ref={this.state.storageValue}
                  onChange={this.handleChange}
                  className="input"
                />
              </label>
              <input type="submit" value="Submit" className="button" />
            </form>
          }
        </div>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
