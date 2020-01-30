import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip, Typography } from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
let id = props.match.params.id;
let thisCar = cars.find(car => id == car.id)

return (
       <div classname ="car-container" key={props.match.params.id}>

    <Container>
        <Paper>
        <Typography variant='h4'>{`Name: ${thisCar.Name}`}</Typography>
        <Chip label={`Miles per gallon: ${thisCar.Miles_per_Gallon}`}></Chip>
    </Paper>
    </Container>
</div>
    )
    
    }


export default Car;