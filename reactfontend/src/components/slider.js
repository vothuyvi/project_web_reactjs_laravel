import React from "react";
import ReactDOM from "react-dom";
import "../styles/header.css";
import SwiftSlider from 'react-swift-slider'
const Slider = () => {
    const data =  [
        {'id':'1','src':'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/295129132_2520919021383645_5500596688735417102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xrVQg4m-h1EAX_Qo357&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBWJkvVAH_sh7l3lxspmG6MPOj_VkbrXriq8xw_XOl0Sw&oe=64051740'},
        {'id':'2','src':'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/287514357_2483316665143881_6916839569090397977_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aBm9AbBKEYsAX9kU5Dc&tn=uORN0_ZBympKoO4n&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBB4IRTVco16WNb_0GYTYLwd_Fuu_D6rrIK3ifK2njrEQ&oe=6403E3A5'},
        {'id':'3','src':'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/327994667_740586874345209_7293779388020867067_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zvluYQGYOpYAX9U7Pvc&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDsAblNmCYkHBCasxQlFeqj3zPAlVQZilU4qVKNr4828A&oe=6404EC07'},
        {'id':'4','src':'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/270746000_2346869478788601_6776971715277389965_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AJP4sKSeiTcAX-gMmDW&tn=uORN0_ZBympKoO4n&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCKlt4-X4ZRRiUOs5UpB_OScOnZB3afIt0AjihtWf5O4g&oe=64057EF2'},
        {'id':'5','src':'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/245682093_2274376549371228_2479734490214463584_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yrQ_BWT1-CcAX9vZF1s&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCzxYTgKzIIUsC92x8cCAb7zpMULhGBLJmijGW3bE9joQ&oe=6404F6A7'}
      ];
  return (
    <div> <SwiftSlider data={data}height={700} showDots={false}/></div>
  );
};

export default Slider;
