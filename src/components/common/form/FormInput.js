import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import { COLOR_PALETTE } from "../../../utils/constants";
import ErrorMessage from "../ErrorMessage";

const FormInput = ({ element, control, rules }) => (
	<Controller
		control={control}
		rules={rules}
		render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
			<>
				<TextInput
					style={styles.input}
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					placeholder={element?.name}
					placeholderTextColor={COLOR_PALETTE.white}
				/>
				{error && <ErrorMessage message={error?.message} />}
			</>
		)}
		name={element?.value}
	/>
);

FormInput.propTypes = {
	element: PropTypes.object,
	control: PropTypes.object,
	rules: PropTypes.object
};
export default FormInput;

const styles = StyleSheet.create({
	input: {
		width: "80%",
		paddingHorizontal: 16,
		height: 52,
		color: COLOR_PALETTE.white,
		borderColor: COLOR_PALETTE.lightgray,
		textAlign: "center",
		fontWeight: "300",
		padding: 8,
		borderWidth: 1,
		marginTop: 16,
		borderRadius: 4
	}
});
