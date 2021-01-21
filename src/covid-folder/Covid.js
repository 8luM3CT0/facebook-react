import React, {useState,useEffect} from 'react'
import './Covid.css'
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core'
import Graph from './Graph'
import Infobox from './Infobox'
import Map from './Map'
import Table from './Table'
import {sortData, prettyPrintStat} from './utils'
import 'leaflet/dist/leaflet.css'

function Covid() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({lat: 39.8283, lng: 98.5795});
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState('cases');

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19-all')
        .then((response) => response.json())
        .then((data) => {
            setCountryInfo(data);
        });
    },[]);

    useEffect(() => {
        const getCountriesData = async() => {
            await fetch('https://disease.sh/v3/covid-19/countries')
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                })) ;

                const sortedData = sortData(data);
                setTableData(sortedData);
                setMapCountries(data);
                setCountries(countries);
            });
        };
        getCountriesData();
    },[]);

    const onCountryChange = async(event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
        const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCountry(countryCode);
            setCountryInfo(data);
            setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
            setMapZoom(4);
        });
    };
    console.log('COUNTRY INFO ==>', countryInfo);

    return (
        <div className="covid">
            <div className="covid__left">
                <div className="covid__header">
                    <h1>COVID-19 Info & Tracking</h1>
                    <FormControl className="covid__dropdown">
                        <Select variant="outlined" onChange={onCountryChange} value={country}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="covid__stats">
                <Infobox
						onClick={(e) => setCasesType('cases')}
						title="Coronavirus Cases"
						isRed
						active={casesType === 'cases'}
						cases={prettyPrintStat(countryInfo.todayCases)}
						total={prettyPrintStat(countryInfo.cases)}
					/>
					<Infobox
						onClick={(e) => setCasesType('recovered')}
						title="Recovered"
						active={casesType === 'recovered'}
						cases={prettyPrintStat(countryInfo.todayRecovered)}
						total={prettyPrintStat(countryInfo.recovered)}
					/>
					<Infobox
						onClick={(e) => setCasesType('deaths')}
						title="Deaths"
						isGray
						active={casesType === 'deaths'}
						cases={prettyPrintStat(countryInfo.todayDeaths)}
						total={prettyPrintStat(countryInfo.deaths)}
					/>
                </div>
                <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
            </div>
            <Card className="covid__right">
                    <CardContent>
                        <h3>Live cases by country</h3>
                        <Table countries={tableData} />
                        <h3 className="covid__graphTitle">Worldwide new {casesType}</h3>
                        <Graph className="covid__graph" casesType={casesType}/>
                    </CardContent>
            </Card>
            
        </div>
    )
}

export default Covid
