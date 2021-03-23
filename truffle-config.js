const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "https://sandbox.truffleteams.com/87053f4f-a2a2-461d-923d-156cc17e68a7",
      network_id: "1616541522902"
    }
  }
};
