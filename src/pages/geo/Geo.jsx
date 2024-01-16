import { useEffect, useState, useMemo } from "react";
import Select from 'react-select'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import countryList from 'react-select-country-list';
import Header from "../../components/header/Header"

import { StyledDescription, StyledCountryInfo, StyledRoot, StyledNasa } from './styles'

const Geo = () => {

    const [ selectedCountry, setSelectedCountry ] = useState()
    const [ countryInfo, setCountryInfo ] = useState()
    const [ nasa, setNasa ] = useState()
    const options = useMemo(() => countryList().getData(), [])

    const fetchInfo = async (country_code) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${country_code}`)
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            console.log(data[0].capital[0], data[0].borders, data[0].continents, data[0].currencies, data[0].flags, data[0].latlng, data[0].maps, data[0].population, data[0].timezones);

            setCountryInfo({
                capital: data[0].capital[0],
                borders: data[0].borders,
                continents: data[0].continents,
                currencies: data[0].currencies,
                flags: data[0].flags, 
                latlng: data[0].latlng, 
                maps: data[0].maps, 
                population: data[0].population, 
                timezones: data[0].timezones
            })
        } catch (error) {
            console.log(error);
        }
    }

    const fetchNasa = async () => {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Az14DFXoANg2lHnyLhrGGC21vnDmBRMsuXAAXlFc')
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setNasa({title: data?.title, explanation: data?.explanation, url: data?.url })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (value) => {
        console.log(value);
        setSelectedCountry(value)
    }

    useEffect(()=> {
        const country_code = selectedCountry?.value
        fetchInfo(country_code)
        fetchNasa()
    },[selectedCountry])

console.log(selectedCountry);

    return <>
        <Header />
        <StyledRoot>
            <h1>Geography</h1>
            <h2>Write the country name you want to know more about</h2>
            <Select options={options} value={selectedCountry} onChange={handleChange} />
            {countryInfo && <> <StyledCountryInfo>
                <StyledDescription>
                    <div>
                        <p>Continents: {countryInfo?.continents[0]}</p>
                        <p>Border Cities: {countryInfo?.borders?.map(border => {return <>{border} <span></span></>})}</p>
                    </div>    
                    <div>
                        <p>Capital: {countryInfo?.capital}</p>
                        <p>Population: {countryInfo?.population}</p>
                    </div>
                    <div>
                        
                        <p>Currencies: {countryInfo?.currencies?.ALL?.name}</p>
                        <p>Timezones: {countryInfo?.timezones[0]}</p>
                    </div>
                    
                </StyledDescription>
                <img src={countryInfo?.flags?.png}/>
            </StyledCountryInfo>
            <MapContainer center={countryInfo?.latlng} zoom={5} style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={countryInfo?.latlng}>
                <Popup>
                    A marker for the location!
                </Popup>
                </Marker>
            </MapContainer> 
            </>}
            <StyledNasa>
                <h1>NASA</h1>
                <h3>{nasa?.title}</h3>
                <h4>{nasa?.explanation}</h4>
                <img src={nasa?.url} />
            </StyledNasa>
        </StyledRoot>
    </>
}

export default Geo