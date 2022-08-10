import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button, { BUTTON_TYPES } from "../Button";

const Form = ({ inputs, defaultValues, onSubmit, isLoading, buttonText }) => {
	const { control, handleSubmit } = useForm({
		defaultValues: defaultValues
	});

	return (
		<View className="justify-center items-center w-full">
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
				style={"mt-5"}
				textStyle={"text-white font-bold"}
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
