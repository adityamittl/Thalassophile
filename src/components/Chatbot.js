import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import funfacts from "./Funfacts";

const theme = {
    background: "#F4F5F6",
    fontFamily: "Source Serif Pro",
    headerBgColor: "#C83CB9",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#4984B8",
    botFontColor: "#fff",
    userBubbleColor: "#439fca",
    userFontColor: "#fff",
    innerHeight: "80%",
    fontWeight: "800"
};

const steps = [
    {
        id: '1',
        message: "Hi, I am Sharky Bot, how are you feeling today?",
        trigger: "expressions",
    },
    {
        id: "expressions",
        options: [
            { value: "veryHappy", label: "😀", trigger: "veryHappy" },
            { value: "happy", label: "🙂", trigger: "happy" },
            { value: "normal", label: "😐", trigger: "normal" },
            { value: "sad", label: "☹️", trigger: "sad" },
            { value: "angry", label: "😡", trigger: "angry" },
        ],
    },
    {
        id: "veryHappy",
        message: "Great Me too 😍",
        trigger: "help",
    },
    {
        id: "happy",
        message:
            "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
        trigger: "help",
    },
    {
        id: "normal",
        message:
            "Ooh, Are You Confused Sir/Mam ? Don't Worry I am here to Assist You 👻",
        trigger: "help",
    },
    {
        id: "sad",
        message:
            "I am sorry to here that 😟 . Well i would suggest to read our random Fun-fact or visit Fun Zone. You will feel better.🙂",
        trigger: "help",
    },
    {
        id: "angry",
        message:
            "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies and eat a lot of healthy tasty food just like me..😝",
        trigger: "help",
    },
    {
        id: "help",
        message: "How can I help you?",
        trigger: "options",
    },
    {
        id: "options",
        options: [
            { value: "services", label: "Services", trigger: "services" },
            {
                value: "funFact",
                label: "Give a random funfact",
                trigger: "funFact",
            },
            { value: "exit", label: "Exit", trigger: "end" },
        ],
    },
    {
        id: "services",
        message: "Select one of these services",
        trigger: "selectServices",
    },
    {
        id: "selectServices",
        options: [
            { value: "Home", label: "Home", trigger: "selectedService" },
            { value: "Shark Page", label: "Shark Page", trigger: "selectedService" },
            { value: "goBack", label: "Go back", trigger: "options" },
        ],
    },
    {
        id: "selectedService",
        message: "opening {previousValue}",
        trigger: "end",
    },
    {
        id: "moreHelp",
        message: "do you meed more help?",
        trigger: "moreHelp-yes",
    },
    {
        id: "moreHelp-yes",
        options: [
            { value: "yes", label: "Yes", trigger: "help" },
            { value: "no", label: "No", trigger: "end" },
        ],
    },
    {
        id: "funFact",
        component: <FunFact />,
        asMessage: true,
        trigger: "moreHelp",
    },
    {
        id: "end",
        message: "Thank you, see you again!",
        end: true,
    },
];


function FunFact() {
    const randInt = Math.floor(Math.random() * 6);
    return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const history = useHistory();

    const handleEnd = ({ values }) => {
        switch (values[values.length - 1]) {
            case "home":
                history.push("/");
                break;
            case "Shark Page":
                history.push("/contact");
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle="Sharky Bot"
                    botAvatar="data:image/jpeg;base64,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"
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <img
                            src="data:image/jpeg;base64,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"
                            style={{ width: "70%" }}
                            alt="chatBot icon"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        height: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
