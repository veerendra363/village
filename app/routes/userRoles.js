const {userRoles} = require('../../models'); // Assuming you have a UserRoles model

async function getAllRoles() {
  try {
    const roles = await userRoles.findAll({ raw: true });
    return roles;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
}

// Usage example
getAllRoles()
  .then((roles) => {
    console.log(roles);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
