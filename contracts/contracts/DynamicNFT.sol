// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
// pragma solidity ^0.5.0;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract DynamicNFT is ERC721 {
    using Counters for Counters.Counter;

    uint256 private _supplyCounter = 0;

    Counters.Counter private counter;
    string private _baseURL;
    event SetBaseURI(string _baseURI);

    constructor() ERC721("DynamicNFT", "DFT") {
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURL;
    }

    function nextTokenId() public view returns (uint256) {
        return counter.current();
    }

    function setBaseURI(string memory baseURI_) public {
        _baseURL = baseURI_;
        emit SetBaseURI(baseURI_);
    }

    function mint(address to, string memory baseURI) public returns (uint256) {

        uint256 tokenId = nextTokenId();
        _safeMint(to, tokenId);
        counter.increment();
        _supplyCounter++;

        setBaseURI(baseURI);

        return tokenId;
    }

    function totalSupply() public view returns(uint256) {
        return _supplyCounter;
    }
}
