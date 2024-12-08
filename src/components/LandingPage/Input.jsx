import PropTypes from "prop-types";

const Input = ({
  inputType,
  inputPlaceholder,
  name,
  value,
  onChange,
  ...rest
}) => (
  <input
    type={inputType}
    placeholder={inputPlaceholder}
    name={name}
    value={value}
    onChange={onChange}
    {...rest}
    className="w-full placeholder:text-white mt-2 placeholder:font-light placeholder:text-lg placeholder:capitalize px-3 bg-purple-dozewell py-5 rounded-lg h-[55px] outline-none border-none text-gray-light-dozewell items-center justify-center"
  />
);

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
