import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/all/";

// Classe regroupant toutes les requetes via l'API (utilisation de la librairie Axios)
export class countriesAPI {

    // récupération de tous les pays
    static async fetchAllCountries() {
        // "Try/Catch => pour prévenir des éventuelles erreurs"
        try {
            const response = await axios.get(`${BASE_URL}`);
            const countries = response.data.flags;
            return countries;
        } catch (error) {
            console.error('Erreur dans la récupération des données des pays par leur langues :', error);
            return [];
        }
    }
}