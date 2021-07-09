import "./App.css";
import React from 'react';
import ProjectComponent from "./components/Elements/ProjectComponent"
import Footer from "./components/Elements/Footer";
import Header from "./components/Elements/Header";

const App = () => {
    const listOfProjects = [
        {
            no: "1",
            title: "Opening Cards",
            dir: "opening-cards"
        },
        {
            no: "2",
            title: "Progress Steps",
            dir: "progress-steps"
        },
        {
            no: "3",
            title: "Rotating Navigation",
            dir: "rotating-navigation"
        },
        {
            no: "4  ",
            title: "Hidden Search Bar",
            dir: "hidden-search-bar"
        },
        {
            no: "5",
            title: "Blurry Loading Page",
            dir: "blurry-loading-page"
        },
        {
            no: "6",
            title: "Scroll Animation",
            dir: "scroll-animation"
        },
        {
            no: "7",
            title: "Split Landing Page",
            dir: "split-landing-page"
        },
        {
            no: "8",
            title: "Form Wave Input",
            dir: "form-wave-input"
        },
        {
            no: "9",
            title: "Sound Board",
            dir: "sound-board"
        },
        {
            no: "10",
            title: "Dad Jokes",
            dir: "dad-jokes"
        },
        {
            no: "11",
            title: "Event KeyCodes",
            dir: "event-keycodes"
        },
        {
            no: "12",
            title: "FAQ Collapse",
            dir: "faq-collapse"
        },
        {
            no: "13",
            title: "Random Choice Picker",
            dir: "random-choice-picker"
        },
        {
            no: "14",
            title: "Animated Navigation",
            dir: "animated-navigation"
        },
        {
            no: "15",
            title: "Incremented Counter",
            dir: "incremented-counter"
        },
        {
            no: "16",
            title: "Drink Water",
            dir: "drink-water"
        },
        {
            no: "17",
            title: "Movie App",
            dir: "movie-app"
        },
        {
            no: "18",
            title: "Background Slider",
            dir: "background-slider"
        },
        {
            no: "19",
            title: "Theme Clock",
            dir: "theme-clock"
        },
        {
            no: "20",
            title: "Button Ripple Effect",
            dir: "button-ripple-effect"
        },
        {
            no: "21",
            title: "Drag and Drop",
            dir: "drag-n-drop"
        },
        {
            no: "22",
            title: "Drawing App",
            dir: "drawing-app"
        },

    ]
    return (
        <div>
            <Header />
            <div className="container">
                { listOfProjects.map(project =>
                    <ProjectComponent no={project.no} title={project.title} dir={project.dir} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;