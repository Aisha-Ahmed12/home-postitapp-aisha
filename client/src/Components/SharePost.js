import {
  Butto,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
const SharePosts = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thouts..."
            type="textarea"
          />
          <Button>PostIT</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
