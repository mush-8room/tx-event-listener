const Web3 = require("web3");
const web3 = new Web3(`wss://ropsten.infura.io/ws/v3/${process.env.API_KEY}`);
const { abi } = require("../build/contracts/TeslaFactory.json");
//contract address
var address = process.env.CONTRACT_ADDRESS;
var myContract = new web3.eth.Contract(abi, address);

let options = {
  fromBlock: 0,
  address: [address], //Only get events from specific addresses
  topics: [
    "0x3fbcf1c6c8202fe84628d117fcbcb923f84d3831a36f8c451e009d0304b902c7",
  ], //What topics to subscribe to
};

let subscription = web3.eth.subscribe("logs", options, (err, event) => {
  if (!err) console.log("error occur: ", event);
});

subscription.on("data", (event) => console.log("event : ", event));
subscription.on("changed", (changed) => console.log("changed : ", changed));
subscription.on("error", (err) => {
  throw err;
});
subscription.on("connected", (nr) => console.log("subscribe id : ", nr));
