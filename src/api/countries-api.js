import axios from "axios";

// stockage de l'url dans la variable "BASE_URL" pour plus de faciliter lors de sa réutilisation ou sa modification.
const BASE_URL = "https://restcountries.com/v3.1/all/";

// Classe regroupant toutes les requetes via l'API (utilisation de la librairie Axios)
export class countriesAPI {

    // récupération de toutes les données des pays
    static async fetchAllCountries() {
        // "Try/Catch => pour prévenir des éventuelles erreurs"
        try {
            const response = await axios.get(`${BASE_URL}`);
            const flags = response.data;
            return flags;
        } catch (error) {
            console.error('Erreur dans la récupération des drapeaux :', error);
            return [];
        }
    }
}

