import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./cardBox.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Skeleton from "@material-ui/lab/Skeleton";

const CardBox = (props) => {
  const body = props.body.slice(0, 48) + "...";
  const url = `https://nextjs-blog-microcms.vercel.app/posts/${props.id}`;
  const date = new Date(props.date).toLocaleDateString();
  const aosDelay = props.order * 100;

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => (e) => {
    e.preventDefault();
    setState({ open: true, ...newState });
    navigator.clipboard.writeText(url);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Link href={`/posts/${props.id}`}>
        <Card
          data-aos="fade-up"
          data-aos-delay={aosDelay}
          data-aos-once="false"
          className={styles.card}
        >
          <CardActionArea>
            <CardMedia
              className={styles.cardImg}
              image={props.img ? props.img.url : "no_image.png"}
              title={props.title}
              width={320}
              height={180}
              quality={80}
              component="img"
            />
            <CardContent className={styles.content}>
              <h3 className={styles.title}>{props.title}</h3>
              <div className={styles.info}>
                <p className={styles.category}>{props.category}</p>
                <QueryBuilderIcon className={styles.icon} />
                <time datetime={date} className={styles.date}>
                  {date}
                </time>
              </div>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              color="primary"
              onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
            >
              シェア
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message="リンクのコピーが完了しました！"
              key={vertical + horizontal}
              autoHideDuration={2000}
            />
            <Link href={`/posts/${props.id}`}>
              <Button size="small" color="primary">
                続きを読む
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Link>
    </>
  );
};

CardBox.propTypes = {
  loading: PropTypes.bool,
};

export default CardBox;
