import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ReturnPolicyComponent = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body color="secondary">
          <CardTitle tag="h2">Return & Refund Policy</CardTitle>
          <CardText>If for ANY reason you are not completely satisfied, simple call us back (within 30 days) and we will refund your money. Customer satisfaction is our top priority.</CardText>
          <Button color="success">Click to view the Return Policy</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body color="secondary">
          <CardTitle tag="h2">Fast Delivery</CardTitle>
          <CardText>We offer FREE Two-Day Delivery and also SAME DAY DELIVERY for a small fee on qualifying orders over $50 to our members in over 500 cities and towns. </CardText>
          <Button color="success">Click to select Fast Delivery</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ReturnPolicyComponent;