const cors = require("cors");
const express = require("express");
const validateRole = require("./lib/role-validator");
const { getAccountCredentials } = require("./lib/credentials-client");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/secrets-box/api", async (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(401).send({
      error: `Expected role, got ${role}`,
    });
  }

  const isValidRole = validateRole(role);

  if (!isValidRole) {
    const error = await getAccountCredentials(role);
    return res.status(401).send({ ...error });
  }

  const credentials = await getAccountCredentials(role);
  res.send({ ...credentials });
});

app.listen(8080, () => {
  console.clear();
  console.log(`Server running on localhost:8080`);
});
