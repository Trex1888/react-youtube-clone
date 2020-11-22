import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="http://rovimusic.rovicorp.com/image.jpg?c=k-D9Tj9imPPFAdJCbBAxxpenm3SILRn6rs9FvHXYhO8=&f=6"
        channel="Andy Web 💻"
        verified
        subs="920K"
        noOfVideos={333}
        description="A deep dive into programming with Javascript. More specifically React using functional components. Did you know that React is a Javascript libray, and is maintained by Facebook?"
      />
      <hr />
      <VideoRow
        views="500K"
        subs="920K"
        description="Learn the fundamentals of React."
        timestamp="2 hours ago"
        channel="Andy Web"
        title="🚀 DENVER 2017🚀"
        image="https://phish.com/wp-content/uploads/2017/08/LivePhishColoradoWebcast-1.jpg"
      />
      <VideoRow
        views="780K"
        subs="920K"
        description="Deep dive into React functional components."
        timestamp="4 hours ago"
        channel="Andy Web"
        title="🚀 SPAC 2019🚀"
        image="https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/phish-spac-2019-setlist-skinny-1200x634.jpg"
      />
      <VideoRow
        views="1.6M"
        subs="920K"
        description="Explore CSS and Bootstrap 5 for React."
        timestamp="6 hours ago"
        channel="Andy Web"
        title="🚀 FENWAY PARK 2019🚀"
        image="https://www.jambase.com/wp-content/uploads/2019/06/phish-charlotte.jpg"
      />
      <VideoRow
        views="2M"
        subs="920K"
        description="React hooks are examined in this video."
        timestamp="12 hours ago"
        channel="Andy Web"
        title="🚀 THE SIMPSONS 2000 🚀"
        image="https://i.ytimg.com/vi/XJWgwhSksXU/maxresdefault.jpg"
      />
      <VideoRow
        views="2.2M"
        subs="920K"
        description="Learn about the MERN stack."
        timestamp="2 days ago"
        channel="Andy Web"
        title="🚀 ALPINE VALLEY 2019 🚀"
        image="https://2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/phish-fenway-trey-1200x675.jpg"
      />
      <VideoRow
        views="2.5M"
        subs="920K"
        description="Learn how to publish your React apps."
        timestamp="3 weeks ago"
        channel="Andy Web"
        title="🚀 SUMMER TOUR 1994 🚀"
        image="https://i0.wp.com/liveforlivemusic.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-04-at-4.29.42-PM.png?resize=740%2C390&ssl=1"
      />
    </div>
  );
}

export default SearchPage;
