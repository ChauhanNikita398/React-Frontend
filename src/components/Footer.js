import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    } from "./FooterStyles";
import Logo from '../assets/logo2.png';

const Footer = () => {
    return (
    <Box style={{"paddingTop":"10px"}} id="id2">
	
	<Container>
		<Row>
		<Column>
			<Heading><img src={Logo} alt="Logo" 
            style={{"height":"70px", "align":'left',"width":"90x"}} ></img></Heading>
			
		</Column>
		<Column>
			<Heading>Links</Heading>
			<FooterLink href="#">Our clients</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Our benefits</FooterLink>
		</Column>
		<Column>
			<Heading>Information</Heading>
			<FooterLink href="#">Our clients</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Our benefits</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<p>+91 9711999770, +1 833-880-3355</p>
            <p>info@bytequests.com</p>
            <p>84, Block A, Sector 4, Noida,UP, 201301</p>
		</Column>
		</Row>
	</Container>
    <Container>
            <p style = {{"fontSize":"18px", "color":"grey", "textAlign":"center", "paddingTop":"10px",
			"paddingBottom":"2px"}}>
                Copyright 2020 ByteQuest Software Private Limited. All Rights Reserved</p>
    </Container>
	</Box>
    );
};

export default Footer;

