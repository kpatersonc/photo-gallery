import * as React from 'react';
import '../../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import Upload from '../photo/upload';
import { CloudinaryImage } from '../gallery/gallery';

interface NavBarState {
    isOpen: boolean;
    uploadModal: boolean;
}

/* eslint-disable react/jsx-boolean-value */
class Navigationbar extends React.Component<{}, NavBarState> {
    constructor(props: {}, state: NavBarState) {
        super(props, state);
        this.state = {
            isOpen: false,
            uploadModal: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onUploadEvent = (image: CloudinaryImage) => {
        // this.setState((prevState) => ({
        //     files: prevState.files.concat(image)
        //     }
        // ));
        console.log('woo');
    }

    toggleUploadModal = () => {
        this.setState({
            uploadModal: !this.state.uploadModal
        });
    }

    render() {
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button color="primary" onClick={this.toggleUploadModal}>Upload</Button>
                            <div className="upload-container">
                                <Upload
                                    onUploadComplete={this.onUploadEvent}
                                    className={'upload-modal'}
                                    modal={this.state.uploadModal}
                                />
                            </div>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                  </DropdownItem>
                                <DropdownItem>
                                    Option 2
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>

        );
    }
}
/* eslint-enable react/jsx-boolean-value */

export default Navigationbar; 