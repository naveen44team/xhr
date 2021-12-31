const getcountries = ()=> {
    console.log("getting countries....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.v1/all");
    xhr.send();
    xhr.responsetype = "json";
    xhr.onland = () => {
        const countries = xhr.response;
        const countryNames = countries.map((country)=> country.name.common);
        const spanishcountries = countries.filter(country => country.language && country.language.spanish) 
        const spanishcountries = countries.map((country) => country.name.common);
        console.log("full data,countries, countryNames");
        console.log("spanishcountries", spanishcountries);
    };
};

//task
const getcountries = ()=> {
    console.log("getting countries....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.v1/all");
    xhr.send();
    xhr.responsetype = "json";
    xhr.onland = () => {
        const countries = xhr.response;
        const countryNames = countries.map((country)=> country.name.common);
        //const spanishcountries = countries.filter(country => country.language && country.language.spanish) 
        //const spanishcountries = countries.map((country) => country.name.common);
        const onecrorecountries = countries.filter((country) => country.population > 1_00_00_000)
        const onecrorecountries1 = countries.filter((country) => country.population > 1_00_00_000)
        const onecrorecountries1 = countries.map((country) => {return {name: country.name.common, population: country.population}
    });
           
        console.log("full data,countries, countryNames");
        //console.log("spanishcountries", spanishcountries);
    };
};