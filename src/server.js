//File name: server.js

var Contract = require("web3-eth-contract");
var { abi } = require("../build/contracts/TeslaFactory.json");

// set provider for all later instances to use
Contract.setProvider(`wss://ropsten.infura.io/ws/v3/${process.env.API_KEY}`);
// Contract.setProvider();

//contract address
var address = process.env.CONTRACT_ADDRESS;

var contract = new Contract(abi, address);

contract.events
  .NewTeslaCreated(() => {})
  .on("connected", function (subscriptionId) {
    console.log("SubID: ", subscriptionId);
  })
  .on("data", function (event) {
    console.log("Event:", event);
    console.log("Owner Wallet Address: ", event.returnValues.owner);
    //Write send email process here!
  })
  .on("changed", function (event) {
    //Do something when it is removed from the database.
  })
  .on("error", function (error, receipt) {
    console.log("Error:", error, receipt);
  });
