const axios = require("axios");

/**
 *
 * This method will call an external API and make a second
 * validation of the role using the exact same function of
 * the role-validator.js file, if you crack the validateRole
 * function you will be able to hack the entire API.
 *
 */

async function getAccountCredentials(role) {
  try {
    const response = await axios.post(
      "https://credentials-server.vercel.app/api",
      { role }
    );

    return response.data;
  } catch (error) {
    return {
      error: "Invalid Role try again :)",
    };
  }
}

module.exports = { getAccountCredentials };
