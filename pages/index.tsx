import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TimerContainer } from "../components/TimerContainer";

const Home: NextPage = () => {
const [newTime, setNewTime] = useState<number>(1)
const [days, setDays] = useState<number>(0);
const [hours, setHours] = useState<number>(0);
const [minutes, setMinutes] = useState<number>(0);
const [seconds, setSeconds] = useState<number>(0);
const [message, setMessage] = useState<string>("");


const timeToDays = newTime * 60 * 60 * 24 * 1000;

let countDownDate = new Date().getTime() + timeToDays;


useEffect(() => {


  var updateTime = setInterval(() => {
    var now = new Date().getTime();

    var difference = countDownDate - now;

    var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);


    if (difference <= 0) {
      clearInterval(updateTime);
      setMessage("The Conf. Has Started");
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  })

  return () => {
    clearInterval(updateTime);
  }

}, [newTime]);



  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Conf. Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header message={message? message: "NEXT.js Conf."}/>
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <Footer/>
    </div>
  );
};

export default Home;
