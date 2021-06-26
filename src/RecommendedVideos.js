import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedvideos">
      <h4>Recommended</h4>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Learn how to create effective tutorials || Be a expert in making tutorial videos"
          views="3.1M"
          image="/assets/download (2).jpg"
          channel="TutsByAvinash"
          channelImage="/assets/Avinash.jpeg"
          timestamp="3 days ago"
          channelUrl=""
        />
        <VideoCard
          title="Upcomin Smart Phones in 2021 || Be updated with latest tech news"
          views="5.5M"
          image="/assets/download (3).jpg"
          channel="TechVipul"
          channelImage="/assets/Vipul.jpeg"
          timestamp=" 7 months ago"
          channelUrl=""
        />
        <VideoCard
          title="What is Firebase || Firebase Auth & Firestore Part 1/4 | Firebase Tutorial For Beginners"
          views="1.3M"
          image="/assets/download.png"
          channel="LatestTech"
          channelImage="/assets/ankit.jpeg"
          timestamp="9 days ago"
          channelUrl=""
        />

        <VideoCard
          title="React.js || What is React | React Tutorial For Beginners"
          views="4.3M"
          image="/assets/download (1).jpg"
          channel="LearnSomthing"
          channelImage="/assets/Arun.jpeg"
          timestamp="23 days ago"
          channelUrl=""
        />

        <VideoCard
          title="Learn HTML CSS & Basic Fundamentals in 3 Hours | Tutorial For Beginners"
          views="2.3M"
          image="/assets/download (4).jpg"
          channel="TechByGaurav"
          channelImage="/assets/Gaurav.jpeg"
          timestamp="7 days ago"
          channelUrl=""
        />

        <VideoCard
          title="Lets Build Netflix clone with firebase Material ui || Tutorial For Beginners"
          views="2.5M"
          image="/assets/download (5).jpg"
          channel="TechByMathur"
          channelImage="/assets/Mathur.jpeg"
          timestamp="1 month ago"
          channelUrl=""
        />

        <VideoCard
          title="Learn React in 3 Hours | Tutorials for begginers | React.js"
          views="2.3M"
          image="/assets/download.jpg"
          channel="DevVipan"
          channelImage="/assets/Vipan.jpeg"
          timestamp="18 days ago"
          channelUrl=""
        />

        <VideoCard
          title="What is Firebase || Firebase Auth & Firestore Part 1/4 | Firebase Tutorial For Beginners"
          views="1.3M"
          image="/assets/download.png"
          channel="LatestTech"
          channelImage="/assets/ankit.jpeg"
          timestamp="25 days ago"
          channelUrl=""
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
