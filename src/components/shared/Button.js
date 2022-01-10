import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
  version: "primary",
};
Button.propTypes = {
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
};

export default Button;
