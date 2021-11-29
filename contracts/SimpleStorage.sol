// SPDX-License-Identifier: MIT
//pragma solidity >=0.4.21 <0.7.0;
pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {
  uint value;

  event storedDataChange(uint value); 

  function set(uint x) public {
    value = x;
    emit storedDataChange(value);
  }

  function get() public view returns (uint) {
    return value;
  }
}
