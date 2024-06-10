import React from "react";
import "./Shops.css"
import image3945 from "./img/image3945.svg"
import perekrestok from "./img/perekrestok_logo_RGB1.svg"
import {Container, Grid} from "@mui/material";
export const Shops = () => {
    return (
        <div className="shops-container">
            <Container>
                <div className="buy-container">
                    <h1 className="how-buy">Где купить?</h1>
                </div>
                <Grid container spacing={3} direction="row" alignItems="center" className="shop-container">
                    <Grid xs={6} md={3} >
                        <div className="five">
                            <div className="image-container">
                                <img src={image3945} className="image-five"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} md={3} >
                        <div className="perek">
                            <div className="image-container">
                                <img src={perekrestok} className="image-five"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}