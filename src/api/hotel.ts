import { API_ENDPOINTS } from '../utility/constants/api';

export const getHotelList = async (options) => {
    try {
        const urlPath = API_ENDPOINTS.HOTEL_RESULTS;
        const response = await fetch(urlPath, options);
        const responseData = await response.json();
        return responseData
    } catch (error) {
        return error;
    }
};

export const getDestinationSuggestions = async (searchText) => {
    try {
        const urlPath = (`${API_ENDPOINTS.CITY_LIST}?q=${searchText}`);
        const response = await fetch(urlPath);
        const responseData = await response.json();
        return responseData
    } catch (error) {
        return error;
    }
};
