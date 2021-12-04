import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("")
    const [street, setStreet] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const submitForm = async() =>{
        const res = await fetch('http://localhost:8080/user/signup',{ method:'POST',headers:{'Content-Type': 'application/json'}, body:JSON.stringify({first_name: firstName, last_name: lastName, birth_date: birthDate, street: street, password: password, street_number: streetNumber, city:city, country:country, email:email })}) 
        const jsonResponse = await res.json();
        
        //console.log(jsonResponse)

        alert(JSON.stringify(jsonResponse))
        //alert('Signup Successful!!')

    }
    const current = new Date().toISOString().split("T")[0]

    console.log('inside signup')
    return (
        <div className="mx-5">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '60%' },
                }}
                noValidatea
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <TextField
                            id="outlined-firstName-input"
                            label="First Name"
                            type="text"
                            value= {firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />

                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            id="outlined-lastName-input"
                            label="Last Name"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />

                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="Email"
                            value= {email}
                            onChange={e => setEmail(e.target.value)}
                        />

                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    
                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-birthDate-input"
                            label="Birth Date"
                            type="date"
                            value={birthDate}
                            max={current}
                            onChange={e => setBirthDate(e.target.value)}
                        />

                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-street-input"
                            label="Street Name"
                            type="text"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                        />

                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-streetNumber-input"
                            label="Street Number"
                            type="text"
                            value={streetNumber}
                            onChange={e => setStreetNumber(e.target.value)}
                        />

                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-city-input"
                            label="City Name"
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                    </Grid>

                    <Grid item xs={6} >
                        <TextField
                            id="outlined-country-input"
                            label="Country Name"
                            type="text"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                        />

                    </Grid>
                </Grid>
                <Button variant="contained" onClick = { submitForm} >Signup</Button>

            </Box>

        </div>
    )
}

export default Signup
