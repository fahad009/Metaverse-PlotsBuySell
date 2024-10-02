import axios from "axios";
import config from '../config/constants.json'

const baseUrl = config.baseUrl;

//Stadim APis
export const getStadiumSections = () => {
    return axios.get(baseUrl + 'stadium');
}
export const getUserSeats = (userAddress) => {
    return axios.get(baseUrl + `stadium?user=${userAddress}`);
}
export const getSeatsOfSection = (sectionId) => {
    return axios.get(baseUrl + `stadium/${sectionId}`);
}
export const getSeatDetails = (seatNo) => {
    return axios.get(baseUrl + `stadium/seat/${seatNo}`);
}
//Green Pavilion Apis
export const getPavilionPlots = () => {
    return axios.get(baseUrl + 'pavilion');
}
export const getUserPavilionPlots = (userAddress) => {
    return axios.get(baseUrl + `pavilion?user=${userAddress}`);
}
export const getPavilionPlotDetail = (plotId) => {
    return axios.get(baseUrl + `pavilion/${plotId}`);
}
// Palla Plaza Apis
export const getPlazaPlots = () => {
    return axios.get(baseUrl + 'plaza');
}
export const getUserPlazaPlots = (userAddress) => {
    return axios.get(baseUrl + `plaza?user=${userAddress}`);
}
export const getPlazaPlotDetail = (plotId) => {
    return axios.get(baseUrl + `plaza/${plotId}`);
}