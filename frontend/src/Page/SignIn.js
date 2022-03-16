import React from "react";
import '../App.css';
import styled from "styled-components";
import SVGimage from "../Image/hollowed-boxes.svg"


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: 
    url(${SVGimage})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #133245;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link1 = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input placeholder="password"
                        type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        // onClick={handleClick}
                    // disabled={isFetching}
                    >LOGIN
                    </Button>
                    {/* {error && <Error>Something went wrong...</Error>} */}
                    <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
                    {/* <Link to="/Register" style={{ textDecoration: "none" }}> */}
                    <Link1>CREATE A NEW ACCOUNT</Link1>
                    {/* </Link> */}
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login