import styled from "styled-components";

export const ThemeWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LightIcon = styled.span`
	display: grid;
	place-items: center;
	color: white;
`;

export const DarkIcon = styled.span`
	display: grid;
	place-items: center;
	color: white;
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #fff;
	background: white;
	width: 35px;
	height: 17px;
	border-radius: 50px;
	cursor: pointer;
	margin: 0 0.4em;
`;

export const Toggle = styled.span`
	display: inline-block;
	background-color: var(--default-blue-color);
	width: 17px;
	height: 17px;
	border-radius: 50%;
`;
