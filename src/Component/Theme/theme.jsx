import React, { useState } from "react";
import { ThemeWrap, LightIcon, DarkIcon, ToggleContainer, Toggle } from "./themeElements";
import { FiSun } from "react-icons/fi";
import { WiMoonAltNew } from "react-icons/wi";

const Theme = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleClick = () => setDarkMode(!darkMode);

	return (
		<ThemeWrap>
			<LightIcon>
				<FiSun />
			</LightIcon>
			<ToggleContainer onClick={handleClick}>
				<Toggle />
			</ToggleContainer>
			<DarkIcon>
				<WiMoonAltNew />
			</DarkIcon>
		</ThemeWrap>
	);
};

export default Theme;
