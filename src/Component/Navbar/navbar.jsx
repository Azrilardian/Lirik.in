import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Theme from "../Theme/theme";
import { Header, Nav, Logo } from "./navbarElements";

import styles from "./navbar.module.css";

const Navbar = () => (
	<Header>
		<Nav>
			<Container>
				<Row>
					<Col>
						{/* <Link to="/">Lirik.in</Link> */}
						<Logo href="index.html">Lirik.in</Logo>
					</Col>
					<Col className={styles["col-right"]}>
						<Theme></Theme>
					</Col>
				</Row>
			</Container>
		</Nav>
	</Header>
);

export default Navbar;
