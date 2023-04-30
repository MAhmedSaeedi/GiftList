const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

const merkleTree = new MerkleTree(niceList);
const merkleProof = merkleTree.getProof(10);

const NAME_TO_PROVE = "Shelly Toy"; // is in the list

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: NAME_TO_PROVE,
    proof: merkleProof,
  });

  console.log({ gift });
}

main();