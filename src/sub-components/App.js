import React from "react";
import Footer from "./Footer";
import Invite from "./Invite";
import Jumbotron from "./Jumbotron";
import TimeLine from "./Timeline";

const App=()=>{
    return (<div>
        <Jumbotron 
            title="Ishan & Urvashi" 
            desc="We Are Getting Married!" 
            date={new Date("2023-05-11").setHours(0,0,0,0)}/>
        <Invite 
            greetings="Hello!" 
            dateplace="11 May, 2023 Una, Himachal Pradesh" 
            msg="We invited you to celebrate our wedding"
            bride={{Name:'Urvashi Vashisht',Message:""}}
            groom={{Name:'Ishan Sharma',Message:"All along, i thought i was lost, but now i know that was just the feeling of heart searching for you."}}/>
        <TimeLine
            title="Our Story!"
            message="Together Forever"
            desc="Time passes but memories are forever."
            timeline={[
                    {image:'J51A2354.jpg',title:'Fist Meet',date:'September 28, 2022',desc:''},
                    {image:'FirstDate.jpeg',title:'First Date',date:'October 21, 2022',desc:''},
                    {image:'BG-Img.jpeg',title:'Engagement',date:'December 11, 2022',desc:''},
                    {image:'3B1A82E4-1C9D-461D-94A1-B1BC1505CB42.jpeg',title:'Second Date',date:'December 18, 2022',desc:''}
                ]}/>
        <Footer/>
    </div>)
}

export default App;