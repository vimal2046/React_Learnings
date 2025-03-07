import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const StyledCard = (props)=> {
    return(
        <> 
        <Card sx={{ maxWidth: 300,margin:'50px',color:'#023047',backgroundColor:"#8ecae6"}}>
      <CardActionArea>
        <CardContent sx={{ textAlign: 'center',}} >
          <Typography gutterBottom variant="h3" component="div">
            <h3>{props.name}</h3>
            <p>{props.age}</p>
            <p>{props.location}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
    )
}


const UserCard = () => {
  return (
    <>
    <StyledCard 
        name = "vimal"
        age = {22}
        location = "Erode"
    />
    </>
  )
}

export default UserCard