// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract TeslaFactory {
    Tesla[] public deployedTeslas;
    event NewTeslaCreated(address owner);

    function createNewTesla() public {
        Tesla newTesla = new Tesla(msg.sender);
        deployedTeslas.push(newTesla);
        emit NewTeslaCreated(msg.sender);
    }

}

contract Tesla {
    address public manager;
    constructor(address owner) {
        manager = owner;
    }
}