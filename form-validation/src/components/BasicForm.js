import useInput from "./hooks/use-input-hook";

const BasicForm = (props) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const nameValidate = (name) => {
    if (name.trim().length === 0) return false;
    return true;
  };

  const emailValidate = (email) => {
    if (email.trim().length === 0) return false;

    if (!email.match(emailFormat)) return false;

    return true;
  };

  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueInputHandler: firstNameInputHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput(nameValidate);

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueInputHandler: lastNameInputHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput(nameValidate);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueInputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput(emailValidate);

  const errorMsg = <p style={{ color: "red" }}>This field cannot be empty!</p>;

  return (
    <form>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError ? "invalid" : ""}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameInputHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && errorMsg}
        </div>
        <div className={`form-control ${lastNameHasError ? "invalid" : ""}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && errorMsg}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && errorMsg}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
