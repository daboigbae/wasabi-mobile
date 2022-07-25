export const objToArray = (obj) => {
	const arrayToReturn = [];

	for (let key in obj) {
		arrayToReturn.push(obj[key]);
	}

	return arrayToReturn;
};
