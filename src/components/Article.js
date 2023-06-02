import React from "react";

function Article({ title, date = "January 1, 1970", minutes, preview }) {
    const renderCoffeeCups = (minutes) => {
        const cupsCount = Math.ceil(minutes / 5);
        const coffeeCups = Array.from({ length: cupsCount }, (_, index) => (
            <span key={index}>☕️</span>
        ));
        return coffeeCups;
    };

    const renderBentoBoxes = (minutes) => {
        const boxesCount = Math.ceil(minutes / 10);
        const bentoBoxes = Array.from({ length: boxesCount }, (_, index) => (
            <span key={index}>🍱</span>
        ));
        return bentoBoxes;
    };

    const renderReadTime = () => {
        if (minutes < 30) {
            return (
                <small className="small-margin">
                    {renderCoffeeCups(minutes)} {minutes} min read
                </small>
            );
        } else {
            return (
                <small className="small-margin">
                    {renderBentoBoxes(minutes)} {minutes} min read
                </small>
            );
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {renderReadTime()}
            <p>{preview}</p>
        </article>
    );
}

export default Article;
