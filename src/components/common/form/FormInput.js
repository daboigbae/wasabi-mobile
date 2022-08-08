import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import { Controller } from "react-hook-form";
import { COLOR_PALETTE } from "../../../utils/constants";
import ErrorMessage from "../ErrorMessage";

const FormInput = ({ element, control, rules }) => {
	const renderInput = ({
		field: { onChange, onBlur, value },
		fieldState: { error }
	}) => (
		<>
			<TextInput
				secureTextEntry={element?.name === "Password" ? true : false}
				autoCapitalize={element?.name === "Email" ? "none" : "sentences"}
				keyboardType={
					element?.name === "Phone Number" ? "number-pad" : "default"
				}
				className="w-[80%] px-4 h-[52px] text-white border-2 border-gray-300 text-center font-light p-4 mt-4 rounded-md"
				onBlur={onBlur}
				onChangeText={onChange}
				value={value}
				placeholder={element?.name}
				placeholderTextColor={COLOR_PALETTE.white}
			/>
			{error && <ErrorMessage message={error?.message} />}
		</>
	);
	return (
		<Controller
			control={control}
			rules={rules}
			render={renderInput}
			name={element?.value}
		/>
	);
};

FormInput.propTypes = {
	element: PropTypes.object,
	control: PropTypes.object,
	rules: PropTypes.object
};
export default FormInput;
