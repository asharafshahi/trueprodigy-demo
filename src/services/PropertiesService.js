import axios from 'axios';

const API_URL = 'http://dev.trueprodigyapi.com';
const PROPERTIES_ENDPOINT = '/appraisaldemo/propertytest/search';

export const fetchProperties = async () => {
    try {
        const { data } = await axios.get(`${API_URL}${PROPERTIES_ENDPOINT}`);
        const filteredData = data.results.map(property => ({
            propId: property.propID,
            ownerName: property.ownerName,
            dbaName: property.dbaName,
            legalDescription: property.legalDescription,
            situsStreet: property.situsStreet
        }));
        return filteredData;
    } catch (err) {
        throw new Error(err.response.statusText);
    }
};