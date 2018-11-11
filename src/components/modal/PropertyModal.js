import React from 'react';
import { Button, Header, Modal, Icon, Table } from 'semantic-ui-react';

const PropertyModal = ({ visible, close, data }) => (
    <Modal open={visible} 
        style={{ 
            marginTop: '150px !important', 
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '350px'
        }}
    >
        <Modal.Header>Property Details</Modal.Header>
        <Modal.Content image scrolling>
            <Modal.Description>
                <Table celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                Prop ID:
                            </Table.Cell>
                            <Table.Cell>
                                {data.propID}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Subdivision:
                            </Table.Cell>
                            <Table.Cell>
                                {data.subdivisionCd}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Geo ID:
                            </Table.Cell>
                            <Table.Cell>
                                {data.geoID}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Reconciled Market:
                            </Table.Cell>
                            <Table.Cell>
                                {data.reconciledMarket}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button primary onClick={close}>
                OK <Icon name='chevron right' />
            </Button>
        </Modal.Actions>
    </Modal>
);

export default PropertyModal;