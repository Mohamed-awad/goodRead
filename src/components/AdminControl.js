import React , {Component} from 'react';
import '../Styles/AdminPanel.css';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    Table,
    TabPane
} from "reactstrap";
import classnames from 'classnames';
import Admin_Modal from "./AddCategoryForm";
import AddCategoryForm from "./AddCategoryForm";
import AddBookForm from "./AddBookForm";
import AddAuthorForm from "./AddAuthorForm";

class AdminControl extends Component {

    constructor(props) {
        super(props);
        this.state={
            activeTab: '1',
            modalIsOpen: false
        };
        this.handle_modal = this.handle_modal.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }




    render() {
        return (
            <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-12 AdminPanelControls">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Categories
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Books
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Authors
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">

                                    <AddCategoryForm cancel="cancel" title="Add Category"/>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    {/*<button className='btn btn-info offset-lg-10  offset-md-10  offset-sm-10  offset-xs-10 add_category'> Add Book +</button>*/}
                                    <AddBookForm cancel="cancel" title="Add Book"/>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <AddAuthorForm first="First name" second="Second name" cancel="cancel" title="Add Author"/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog"
                                 aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
        );
    }
}
export default AdminControl;