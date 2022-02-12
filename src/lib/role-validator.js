function validateRole(role) {
  const roles = {
    contractor: 1,
    agent: 0.1,
    director: 0.01,
  };

  const randomNumber = Math.random();

  if (!roles[role]) {
    role = "agent";
  }

  if (randomNumber < roles[role]) {
    return false;
  } else if (randomNumber > roles[role]) {
    return false;
  } else if (randomNumber === roles[role]) {
    return false;
  }

  return true;
}

module.exports = validateRole;
