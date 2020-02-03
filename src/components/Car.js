import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip, Typography } from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
let id = props.match.params.id;
let thisCar = cars.find(car => id == car.id)

return (
    <div classname ="bodytest">
       <div classname ="car-container" key={props.match.params.id}>

    <Container>
        <Paper elevation={3} >
        <Typography variant='h4'>{`Name: ${thisCar.Name}`}</Typography>
        <Chip label={`Miles per gallon: ${thisCar.Miles_per_Gallon}`}></Chip>
        <Chip label={`Cylinders: ${thisCar.Cylinders}`}></Chip>
        <Chip label={`Displacement: ${thisCar.Displacement}`}></Chip>
        <Chip label={`Horsepower: ${thisCar.Horsepower}`}></Chip>
        <Chip label={`Weight (lbs): ${thisCar.Weight_in_lbs}`}></Chip>
        <Chip label={`Acceleration: ${thisCar.Acceleration}`}></Chip>
        <Chip label={`Year: ${thisCar.Year}`}></Chip>
        <Chip label={`Country of Origin: ${thisCar.Origin}`}></Chip>
    </Paper>
    </Container>
</div>
</div>
    )
    
    }


export default Car;