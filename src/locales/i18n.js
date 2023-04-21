import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages:{
        en:{
            "username":'User',
            "clickme":'Click me!',
            name: 'Name',
            officialName: 'Official Name',
            currencies: 'Currencies',
            capital: 'Capital',
            region: 'Region',
            subregion: 'Subregion',
            languages: 'Languages',
            area: 'Area',
            population: 'Population',
        },
        es:{
            "username":'Usuario',
            "clickme":'¡Haz click!',
            name: 'Nombre',
            officialName: 'Nombre Oficial',
            currencies: 'Moneda',
            capital: 'Capital',
            region: 'Región',
            subregion: 'Subregión',
            languages: 'Idiomas',
            area: 'Área',
            population: 'Población',
        },
        fr:{
            "username":'Utilisateur',
            "clickme":'¡Cliquez sur!',
            name: 'Nom',
            officialName: 'Nom officiel',
            currencies: 'Devise',
            capital: 'Capitale',
            region: 'Région',
            subregion: 'Sous-région',
            languages: 'Langues',
            area: 'Superficie',
            population: 'Population',
        }
    }
})

export  default  i18n;