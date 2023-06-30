import React from "react";
import PropTypes from "prop-types";
import styles from '../styles/Home.module.css'

const YoutubeEmbed = ({ embedId }) => (
    <iframe
    className={styles.videoresponsive}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;