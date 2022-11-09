function verify(password) {
    if (!password) {
      return "Password rejected";
    } else if (password.length < 8) {
      return "Password rejected";
    } else if (password.search(/[A-Z]/) < 1) {
      return "Password rejected";
    } else if (password.search(/[0-9]/) < 1) {
      return "Password rejected";
    } else {
      return "Password accepted";
    }
  }
  module.exports = verify;