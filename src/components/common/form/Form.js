import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button, { BUTTON_TYPES } from "../Button";

const Form = ({ inputs, defaultValues, onSubmit, isLoading, buttonText }) => {
	const { control, handleSubmit } = useForm({
		defaultValues: defaultValues
	});

	return (
		<View style={styles.formContainer}>
			{inputs.map((item, index) => (
				<FormInput
					key={index}
					element={item}
					control={control}
					rules={item?.rules}
				/>
			))}
			<Button
				text={buttonText}
				onPress={handleSubmit(onSubmit)}
				style={styles.loginButton}
				textStyle={styles.buttonText}
				type={BUTTON_TYPES.PRIMARY}
				isLoading={isLoading}
			/>
		</View>
	);
};

export default Form;

Form.propTypes = {
	inputs: PropTypes.arrayOf(PropTypes.object),
	defaultValues: PropTypes.object,
	onSubmit: PropTypes.func,
	isLoading: PropTypes.bool,
	buttonText: PropTypes.string
};

const styles = StyleSheet.create({
	formContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	},
	loginButton: {
		marginTop: 32
	},
	buttonText: {
		color: "white",
		fontWeight: "bold"
	}
});
