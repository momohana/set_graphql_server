import React from 'react'
import Header from './component/Header';
import { Container, Row, Col } from 'reactstrap'
import SideNav from './component/SideNav';
import CompanyList from './component/CompanyList';


function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
