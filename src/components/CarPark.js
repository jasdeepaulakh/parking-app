import React from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




export default class CarPark extends React.Component {

    state = {
        generalFree: 0,
        disabledFree : 0
    }




    componentDidMount() {
    console.log(this.state)
    axios.get('http://localhost:8080/freespaces/1/1')
        .then(res => {
            console.log(res.data)
            this.setState(state => ({
                ...state,
                generalFree: res.data
                }));
            console.log(this.state)
        })
    axios.get('http://localhost:8080/freespacesbytype/1/0/disabled')
        .then(res => {
            console.log(res.data)
            this.setState(state => ({
                ...state,
                disabledFree: res.data
            }));
            console.log(this.state)
        })

    }


        render() {
            const useStyles = makeStyles({
                card: {
                    minWidth: 275,
                },
                bullet: {
                    display: 'inline-block',
                    margin: '0 2px',
                    transform: 'scale(0.8)',
                },
                title: {
                    fontSize: 14,
                },
                pos: {
                    marginBottom: 12,
                },
            });

            function SimpleCard() {
                const classes = useStyles();
                const bull = <span className={classes.bullet}>•</span>;

                return (
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                be
                                {bull}
                                nev
                                {bull}o{bull}
                                lent
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )}

            return (
               <div>
                   {SimpleCard}
               </div>
            );
    }
}