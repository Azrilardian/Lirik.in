import styled from "styled-components";
import "../../variabel.css";
import { device } from "../Breakpoint/breakpoint";

export const SearchingSection = styled.section`
	margin: 8em 0;

	@media screen and ${device.laptop} {
		margin: 4em 0;
	}
`;

export const LeftColWrap = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	background-color: lavender;
`;

export const Tagline = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: white;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	height: 2.5em;
	border-radius: 10px;
	overflow: hidden;

	@media screen and ${device.laptop} {
		width: 85%;
	}
`;

export const Input = styled.input`
	height: 100%;
	width: 80%;
	background-color: var(--default-blue-color);
	padding: 0 1em;
	color: white;
	font-size: 0.8rem;
	border: 2px solid var(--default-blue-color);
    border-radius: 10px

	&:focus {
		outline: none;
		border: 2px solid var(--default-blue-color-2);
	}

	&::placeholder {
		color: var(--default-grey-color);
	}
`;

export const Button = styled.button`
	height: 100%;
	width: 20%;
	display: grid;
	place-items: center;
	background-color: var(--default-light-blue-color);
	border: 2px solid var(--default-light-blue-color);
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	font-size: 1.2rem;
`;

export const SmallInformation = styled.p`
	font-size: 0.7rem;
	color: var(--default-grey-color);
	margin-top: 1em;
`;

export const ImgContainer = styled.img`
	width: 70%;
	height: auto;

	@media screen and ${device.laptop} {
		width: 80%;
	}
`;
