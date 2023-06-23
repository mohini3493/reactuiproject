import React, { useEffect} from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const SettingsMyaccount = React.lazy(()=> import('../components/settings/settings-myaccount'));
const SettingsMyprogress = React.lazy(()=> import('../components/settings/settings-myprogress'));
const SettingsDevices = React.lazy(()=> import('../components/settings/settings-devices'));
const SettingsCustomercare = React.lazy(()=> import('../components/settings/settings-customer-care'));
const SettingsTransaction = React.lazy(()=> import('../components/settings/settings-transaction'));


const Settings = () => {
  useEffect(() => {
    document.title = "Settings - Wise Talkies";
  }, []);

  return (
    <div>
      <Container className='settings-container'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="my-account">
          <div sm={12}className="settings-head">
          <FontAwesomeIcon icon={faUpload} /><span>Settings / My Account</span>
          </div>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <Nav variant="pills" className="setting-icons">
                <Nav.Item>
                  <Nav.Link eventKey="my-account"><FontAwesomeIcon icon={faGear} />My Account</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="my-progress"><FontAwesomeIcon icon={faBarsProgress} />My progress</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="device"><FontAwesomeIcon icon={faLaptop} />Device</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="customer-care"><FontAwesomeIcon icon={faHeadset} />Customer care</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="transaction-history"><FontAwesomeIcon icon={faClone} />Transaction History</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} md={12} lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="my-account">
                  <SettingsMyaccount/>                
                </Tab.Pane>
                <Tab.Pane eventKey="my-progress">
                  <SettingsMyprogress/>                
                </Tab.Pane>
                <Tab.Pane eventKey="device">
                  <SettingsDevices/>    
                </Tab.Pane>
                <Tab.Pane eventKey="customer-care">
                  <SettingsCustomercare/>            
                </Tab.Pane>
                <Tab.Pane eventKey="transaction-history">
                  <SettingsTransaction/>            
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  )
}
export default Settings