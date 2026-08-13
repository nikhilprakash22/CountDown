/*!
 * Copyright 2026, Staffbase SE and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
type Language = "en" | "fr" | "de" | "es" | "hi" |"zh"| "hu" | "pl" | "ptbr" | "sk";
/**
 * React Component
 */
export interface CountdownwidgetWidgetProps extends BlockAttributes {
  enddate: string;
  language: "en" | "fr" | "de" | "es" | "hi" | "zh" | "hu" | "pl" | "ptbr" | "sk";
  bg: string;
  customImage: string;
  //Days: string;
 // message: string;
  //messages: string;
  //messagess: string;
  //messagesss:string;
}
 
const calculatedifference=(startdate: number, enddate: number = Date.now())=>{
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
 // const distance = enddate - startdate;
 const distance = Math.max(0, enddate - startdate);
  const days= Math.floor(distance / (day));
  const hours = Math.floor((distance % (day)) / (hour));
  const minutes = Math.floor((distance % (hour)) / (minute));
  const seconds = Math.floor((distance % (minute)) / second);
 
  return {days, hours, minutes, seconds}
}
 
 
 
const labels: Record<
  Language,
  {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }
> = {
  en: {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
  hi: {
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
  },
  fr: {
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
  },
  de: {
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
  },
  es: {
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  },
  zh: {
days: "天",
hours: "小时",
minutes: "分钟",
seconds: "秒",
},
hu: {
days: "Nap",
hours: "Óra",
minutes: "Perc",
seconds: "Másodperc",
},
pl: {
days: "Dni",
hours: "Godziny",
minutes: "Minuty",
seconds: "Sekundy",
},
ptbr: {
days: "Dias",
hours: "Horas",
minutes: "Minutos",
seconds: "Segundos",
},
sk: {
days: "Dni",
hours: "Hodiny",
minutes: "Minúty",
seconds: "Sekundy",
},
} as const;
 
 
 
const backgrounds: Record<string, string> = {
beach:
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
mountain:
"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
city:
"https://images.unsplash.com/photo-1514565131-fce0801e5785",
none: ""
};
 
/*const backgrounds: Record<string, string> = {
beach: "red",
mountain: "green",
city: "blue"
};*/
 
 
export const CountdownwidgetWidget = ({ enddate,
  language,bg,customImage,
 message,messages,messagess,messagesss }: CountdownwidgetWidgetProps ): ReactElement  => {
console.log("ALL PROPS =", {
enddate,
language,
bg
});
//const selectedBackground =
//backgrounds[bg] || backgrounds.beach;
 
const selectedBackground =
bg === "none"
? customImage
: backgrounds[bg] || backgrounds.beach;
  const [actualdate,setactualdate] = React.useState(Date.now());
 // const targetDate = new Date(enddate).getTime();
 
 const targetDate = enddate
? new Date(enddate).getTime()
: Date.now();
 
 
 
 
const { days, hours, minutes, seconds } =
 
calculatedifference(actualdate, targetDate);
 // const {days, hours, minutes, seconds} = calculatedifference(actualdate,enddate)
  React.useEffect(()=>{
      setInterval(()=>{setactualdate(Date.now())},1000)
  },[])
 
 
  const text = labels[language] ?? labels.en;
 
/* return (
   // <div>
   <div
style={{
width: "100%",
minHeight: "650px",
backgroundImage: `url(${selectedBackground})`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat"
}}
>*/
return (
<>
<br />
<br />
<div
style={{
backgroundImage: selectedBackground
? `url(${selectedBackground})`
: "none",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed",
width: "100%",
maxWidth: "1200px",
height: "400px",
margin: "0 auto",
display: "flex",
justifyContent: "center",
alignItems: "center",
overflow: "hidden",
}}
>
<div
style={{
width: "75%",
minWidth: "0",
maxWidth: "800px",
background: "rgba(255,255,255,0.15)",
backdropFilter: "blur(12px)",
borderRadius: "25px",
boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
padding: "0px",
height: "180px",
textAlign: "center",
display: "flex",
flexDirection: "column",
justifyContent: "center",
margin: "0 auto",
alignItems: "center",}}
>
 
<div
style={{
display: "flex",
justifyContent: "center",
alignItems: "center",
gap: "20px",
width: "100%",
}}
>
  <div style={{ textAlign: "center" }}>
 
<div style={{ fontSize: "48px", color: "#1f2937" }}>
{days}
</div>
<div style={{ color: "#374151", fontSize: "16px" }}>
{text.days}
</div>
</div>
<div
style={{
fontSize: "48px",
color: "#1f2937",
display: "flex",
alignItems: "center",
justifyContent: "center",
lineHeight: 1,
marginTop: "-8px",
}}
>
:
</div><div style={{ textAlign: "center" }}>
<div style={{ fontSize: "48px", color: "#1f2937" }}>
{hours}
</div>
<div style={{ color: "#374151", fontSize: "16px" }}>
{text.hours}
</div>
</div>
<div
style={{
fontSize: "48px",
color: "#1f2937",
display: "flex",
alignItems: "center",
justifyContent: "center",
lineHeight: 1,
marginTop: "-8px",
}}
>
:
</div><div style={{ textAlign: "center" }}>
<div style={{ fontSize: "48px", color: "#1f2937" }}>
{minutes}
</div>
<div style={{ color: "#374151", fontSize: "16px" }}>
{text.minutes}
</div>
</div>
<div
style={{
fontSize: "48px",
color: "#1f2937",
display: "flex",
alignItems: "center",
justifyContent: "center",
lineHeight: 1,
marginTop: "-8px",
}}
>
:
</div><div style={{ textAlign: "center" }}>
<div style={{ fontSize: "48px", color: "#1f2937" }}>
{seconds}</div>
<div style={{ color: "#374151", fontSize: "16px" }}>
{text.seconds}
</div>
</div>
</div>
</div>
</div>
</>
);}