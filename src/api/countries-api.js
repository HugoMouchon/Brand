import axios from "axios";

// stockage de l'url dans la variable "BASE_URL" pour plus de faciliter lors de sa réutilisation ou sa modification.
const BASE_URL = "https://restcountries.com/v3.1/all/";
const BASE_LANG = "https://restcountries.com/v3.1/lang/";

// Classe regroupant toutes les requetes via l'API (utilisation de la librairie Axios)
export class countriesAPI {

    // récupération de toutes les données des pays
    static async fetchAllCountries() {
        // "Try/Catch => pour prévenir des éventuelles erreurs"
        try {
            const response = await axios.get(`${BASE_URL}`);
            const countries = response.data;
            return countries;
        } catch (error) {
            console.error('Erreur dans la récupération de la liste des pays :', error);
            return [];
        }
    }

    // récupération de lla liste des pays parlant la langue notifié par l'utilisateur
    static async fetchCountriesLanguagesByLang(lang) {
        // "Try/Catch => pour prévenir des éventuelles erreurs"
        try {
            const response = await axios.get(`${BASE_LANG}${lang}`);
            const languages = response.data;
            return languages;
        } catch (error) {
            console.error('Erreur dans la récupération de la liste des pays qui parle cette langue :', error);
            return [];
        }
    }
}

