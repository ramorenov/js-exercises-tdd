function PasswordVerifier(pass) {
  let verify = [];
  let er2 = /[A-Z]/;
  let er3 = /[a-z]/;
  let er4 = /[0-9]/;

  if (typeof pass === "object") {
    verify[1] = false;
  } else {
    verify[1] = true;
    pass.length > 8 ? (verify[0] = true) : (verify[0] = false);

    er2.test(pass) ? (verify[2] = true) : (verify[2] = false);
    er3.test(pass) ? (verify[3] = true) : (verify[3] = false);
    er4.test(pass) ? (verify[4] = true) : (verify[4] = false);
  }
  let passTest;
  let test1 = verify.every(item => item === true);
  let test2 = verify.filter(item => item === true);

  if (verify[3] === false) {
    passTest = "pass fail, does not meet 4 condition";
  } else if (test1 === true) {
    passTest = "pass ok, meets the 5 conditions";
  } else if (test2.length >= 3) {
    passTest = "pass ok, meets at least 3 conditions";
  }

  return passTest;
}

module.exports = PasswordVerifier;
