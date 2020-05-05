import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
  return <Container>
    <Col>
      <Row>
        <h1>Next.js React Bootstrap</h1>


        <div class="container">
          <br />
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center">
                  <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                  </div>

                  <div className="col">
                    <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                  </div>

                  <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>

      </Row>
    </Col>
  </Container>
}

export default Landing;