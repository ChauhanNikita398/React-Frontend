import styled from 'styled-components';

export const Box = styled.div`
padding: 6px 4px;
padding-top: 8px;
background: #edecf0;
position:absolute;
width: 100%;


@media (max-width: 1000px) {
	padding: 6px 3px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 50px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 15px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: blue;
    font-size: 20px
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #000;
margin-bottom: 20px;
font-weight: bold;
margin-top:25px;
`;
