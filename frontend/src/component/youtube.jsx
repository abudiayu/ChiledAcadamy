import React, { useState, useEffect } from "react";

const Youtube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        setYouTubeVideos(data.items || []);
      })
      .catch((err) => console.error("YouTube API Error:", err));
  }, []);

  return (
    <div className="videos-container">
      <h2 className="videos-title">Latest Videos</h2>

      <div className="videos-grid">
        {youTubeVideos.map((video, i) => {
          const vidId = video.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

          return (
            <div key={i} className="video-card">
              <a href={vidLink} target="_blank" rel="noopener noreferrer">
                <img
                  className="video-thumb"
                  src={video.snippet.thumbnails.high.url}
                  alt="Video Thumbnail"
                />
              </a>

              <div className="video-info">
                <a
                  className="video-title"
                  href={vidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.snippet.title}
                </a>
                <p className="video-desc">{video.snippet.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Youtube;
