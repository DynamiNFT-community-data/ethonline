// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
// pragma solidity ^0.5.0;

// Import this file to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@tableland/evm/contracts/ITablelandTables.sol";


contract DynamicNFT is ERC721, Ownable {
    using Counters for Counters.Counter;

    uint256 private _supplyCounter = 0;

    string private _baseURIString = "https://testnet.tableland.network/query?s=";

    Counters.Counter private counter;
    string private _baseURL;
    event SetBaseURI(string _baseURI);

    ITablelandTables private _tableland;
    string private _metadataTable;
    uint256 private _metadataTableId;
    string private _tablePrefix = "tribeviz";

    constructor(address registry) ERC721("DynamicNFT", "DFT") {
        /* 
        * The Tableland address on your current chain
        */
        _tableland = ITablelandTables(registry);

        /*
        * Stores the unique ID for the newly created table.
        */
        _metadataTableId = _tableland.createTable(
            address(this),
            string.concat(
            "CREATE TABLE ",
                        _tablePrefix,
                        "_",
            Strings.toString(block.chainid),
            " (id int, external_link text, x int, y int);"
            )
        );

        /*
        * Stores the full tablename for the new table. 
        * {prefix}_{chainid}_{tableid}
        */
        _metadataTable = string.concat(
            _tablePrefix,
                    "_",
            Strings.toString(block.chainid),
            "_",
            Strings.toString(_metadataTableId)
        );
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

    function metadataURI() public view returns (string memory) {
        string memory base = _baseURI();
        return string.concat(
            base, 
            "SELECT%20*%20FROM%20",
            _metadataTable
        );
    }

    function mint(address to) public returns (uint256) {

        uint256 tokenId = nextTokenId();

        // data from this is used to contruct the dynamic nft
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            string.concat(
                "INSERT INTO ",
                _metadataTable,
                " (id, discord_members, twitter_members, nft_sales, discord_active, twitter_active, community_reach) VALUES (",
                Strings.toString(tokenId),
                ", 0, 0, 0, 0, 0, 0)"
            )
        );

        _safeMint(to, tokenId);
        counter.increment();
        _supplyCounter++;

        // setBaseURI(baseURI);

        return tokenId;
    }

    function updateScore(
        uint256 tokenId,
        uint256 discord_members,
        uint256 twitter_members,
        uint256 nft_sales,
        uint256 discord_active,
        uint256 twitter_active,
        uint256 community_reach
    ) public {
        // Check token ownership
        require(this.ownerOf(tokenId) == msg.sender, "Invalid owner");

        // Update the row in tableland
        _tableland.runSQL(
            address(this),
            _metadataTableId,
            string.concat(
            "UPDATE ",
            _metadataTable,
            " SET discord_members = ",
            Strings.toString(discord_members),
            ", twitter_members = ",
            Strings.toString(twitter_members),
            ", nft_sales = ",
            Strings.toString(nft_sales),
            ", discord_active = ",
            Strings.toString(discord_active),
            ", twitter_active = ",
            Strings.toString(twitter_active),
            ", community_reach = ",
            Strings.toString(community_reach),
            " WHERE id = ",
            Strings.toString(tokenId),
            ";"
            )
        );
    }

    function totalSupply() public view returns(uint256) {
        return _supplyCounter;
    }
}
