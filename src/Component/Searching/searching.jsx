import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { SearchingSection, Tagline, InputContainer, Input, Button, SmallInformation, ImgContainer } from "./searchingElement";
import imageSearch from "../../Assets/img/search-img.svg";
import styles from "./searching.module.css";
import { BsSearch } from "react-icons/bs";

const Searching = () => {
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("");

	return (
		<SearchingSection>
			<Container>
				<Row xs="1" sm="1" md="2">
					<Col className={styles["col-right"]}>
						<Tagline>Mau nyanyi lagu apa ?</Tagline>
						<InputContainer>
							<Input placeholder="Sheila On 7"></Input>
							<Button>
								<BsSearch />
							</Button>
						</InputContainer>
						<SmallInformation>Cari lagu berasarkan nama penyanyi, lirik, atau album.</SmallInformation>
					</Col>
					<Col className={styles["col-left"]}>
						<ImgContainer src={imageSearch} alt="search-picture"></ImgContainer>
					</Col>
				</Row>
			</Container>
		</SearchingSection>
	);
};

export default Searching;
