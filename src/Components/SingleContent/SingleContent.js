import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../Config/Config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({ id, poster, title, date, media_type, rating }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={rating}
        color={rating > 5 ? "primary" : "secondary"}
      />

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>

      <section className="subtitle">
        <span className="media_type">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="date">{date}</span>
      </section>
    </ContentModal>
  );
};

export default SingleContent;
