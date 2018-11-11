// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SmartDataTable from 'react-smart-data-table';

import PropertyModal from '../modal/PropertyModal';
import * as actions from '../state/actions/PropertiesActions';

// COMPONENT

class HomePage extends Component {
    state = {
        modalVisible: false,
        propertyDetail: {},
    }

    componentDidMount() {
        this.props.fetchProperties();
    }

    componentDidUpdate() {
       
    }

    async showDetails(propId) {
        const url = `http://dev.trueprodigyapi.com/appraisaldemo/propertytest/${propId}`;
        try {
            const { data } = await axios.get(url);
            const propertyDetail = data.results && {
                propID: data.results[0].propID,
                subdivisionCd: data.results[0].subdivisionCd,
                geoID: data.results[0].geoID,
                reconciledMarket: data.results[0].reconciledMarket
            };
            this.setState({ propertyDetail, modalVisible: true });
        } catch (err) {
            this.setState({ loadError: err.message });
        }
    }

    renderStatus() {
        const { fetching, failed } = this.props;
        const status = fetching ? 'Data Loading...' : 
            (failed ? 'Failed to load data...' : '');
        console.log(status)
        return <div>
            <p>{status}</p>
        </div>;
    }

    render() {
        return (
            <main>
                <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
                    <h1 className="display-6 text-center">Property Listing</h1>
                    <hr className="my-4" />
                    <div className="text-center">
                        
                        <SmartDataTable
                            data={this.props.properties}
                            name='properties-table'
                            className='ui compact selectable table'
                            sortable
                            perPage={25}
                            withLinks
                            headers={{
                                propId: {
                                    text: 'Prop ID',
                                    invisible: false,
                                    sortable: true,
                                    filterable: true,
                                    transform: (value, index, row) => {
                                        return (
                                            <div onClick={() => this.showDetails(value)}>
                                                <p style={{
                                                    color: 'blue',
                                                    textDecoration: 'underline',
                                                    cursor: 'pointer'
                                                }}>{value}</p>
                                            </div>
                                        );
                                    }
                                },
                                ownerName: {
                                    text: 'Owner Name',
                                    invisible: false,
                                    sortable: true,
                                    filterable: true,
                                },
                                dba: {
                                    text: 'DBA',
                                    invisible: false,
                                    sortable: true,
                                    filterable: true,
                                },
                                legalDescription: {
                                    text: 'Legal Description',
                                    invisible: false,
                                    sortable: true,
                                    filterable: true,
                                },
                                situsStreet: {
                                    text: 'Situs Street',
                                    invisible: false,
                                    sortable: true,
                                    filterable: true,
                                },
                            }}
                            emptyTable={this.renderStatus()}
                        />
                          
                    </div>
                </div>
                <PropertyModal
                    visible={this.state.modalVisible} 
                    close={() => this.setState({ modalVisible: false })} 
                    data={this.state.propertyDetail}
                />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    properties: state.properties.properties,
    fetching: state.properties.fetching,
    failed: state.properties.failed,
});

export default connect(mapStateToProps, actions)(HomePage);
