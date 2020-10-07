import React from "react";
import QuoteData from "../quoteGenerator/Quote.json";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Quotes from Call of Chtulhu
        </Typography>
        <Typography variant="h5" component="h2">
          Kuh{bull}thoo{bull}loo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Proper noun
        </Typography>
        <Typography variant="body2" component="p">
          <div>
            {QuoteData.map((quoteDetail, index) => (
              <p>Quote: {quoteDetail.quote}</p>
            ))}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Summon Another</Button>
      </CardActions>
    </Card>
  );
}
