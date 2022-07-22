import React from "react";

import { HOME_SCREENS } from "../utils/constants";
import LibraryScreen from "../screens/LibraryScreen";

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.LIBRARY_SCREEN,
		component: () => <LibraryScreen />
	}
];
