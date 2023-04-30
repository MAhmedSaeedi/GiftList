const express = require("express");
const verifyProof = require("../utils/verifyProof");
// const niceList = require("../utils/niceList.json");
// const MerkleTree = require("../utils/MerkleTree");s

const port = 1225;

/**
 * Not used because this is hardcoded below
 * to keep a root of truth about the data in the server.
 */
// const merkleTree = new MerkleTree(niceList); 

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT =
  "ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa"; // merkleTree.getRoot();

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here
  const { name, proof } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);

  // TODO: prove that a name is in the list
  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});