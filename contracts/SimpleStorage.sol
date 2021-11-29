// SPDX-License-Identifier: MIT
//pragma solidity >=0.4.21 <0.7.0;
pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {
  uint storedData;

  event storedDataChange(address _address); 

  function set(uint x) public {
    storedData = x;
    emit storedDataChange(msg.sender);
  }

  function get() public view returns (uint) {
    return storedData;
  }
}