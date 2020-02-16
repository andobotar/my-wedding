import React from 'react'

import classes from './OurService.module.scss';
import chairs from 'assets/images/chairs.jpg';

export default function OurService() {
    return (
        <div className={classes.container}>
            <div className="orangeBoxRight" />
            <div className={classes.middleBox}>
                <h3 className="title">SZOLGÁLTATÁSAINK</h3>
                <div className={classes.serviceContainer}>
                    <div className={classes.service}>
                        <img className={classes.img} src={chairs} alt="székek" />
                        <h6 className="sub-title">Helyszín</h6>
                        <p className={classes.serviceText}>
                            Az ország egész területén, az általad kiválasztott időpontban
                        </p>
                    </div>
                    <div className={classes.service}>
                        <img
                            className={classes.img}
                            src="https://i2.wp.com/dynamikentertainment.com/wp-content/uploads/2019/07/krys-amon-ttv1pX6tk7o-unsplash-1.jpg?fit=1024%2C683&ssl=1"
                            alt="dj pult"
                        />
                        <h6 className="sub-title">Szolgáltatókeresés</h6>
                        <p className={classes.serviceText}>
                            Találd meg a neked legmegfelelőbb esküvői szolgáltatókat néhány kattintással
                        </p>
                    </div>
                    <div className={classes.service}>
                        <img
                            className={classes.img}
                            src="https://www.cssdesignawards.com/articleimages/chart590.jpg"
                            alt="grafikonok"
                        />
                        <h6 className="sub-title">Project Manager</h6>
                        <p className={classes.serviceText}>
                            Légy a saját esküvőd prject managere alkalmazásunk segítségével, ahol könnyen nyomon
                            követheted, hogy hogy áll a nagy nap szervezettsége
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
