import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header'
import SideNav from './components/SideNav'
import CompanyList from './components/CompanyList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <div className="App">
      <Header />
      <ApolloProvider client={client}>
        <Container>
          <Row>
            <Col xs={12} sm={4}>
              <SideNav />
            </Col>
            <Col xs={12} sm={8}>
              <CompanyList />
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </div>
  );
}

export default App;
