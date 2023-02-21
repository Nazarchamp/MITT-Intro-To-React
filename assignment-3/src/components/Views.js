import Gallery from "./Gallery";
import HeroBanner from "./HeroBanner";
import Section from './Section';
import Banner from "./Banner";
import Article from "./Article";
import Form from "./Form";

function Home() {
    return (
        <div>
            <HeroBanner heading="Editing Company"
                        content="Modern Movies for a Modern World"/>
            <Section title="We Edit Great Movies"
                     content="We pride ourselves in creating the best possible video editing solutions for all forms of movies. We've worked with massive movie companies limmited but not included to 21st Century Fox, A21, and Warner Brothers. Take a look at some of our movies below!"/>
            <Gallery
                urls={['https://image.tmdb.org/t/p/w500//zhLKlUaF1SEpO58ppHIAyENkwgw.jpg', 'https://image.tmdb.org/t/p/w500//odQ902qHzB4B7ltLrIzDa6hCl9U.jpg', 'https://image.tmdb.org/t/p/w500//yp8vEZflGynlEylxEesbYasc06i.jpg', 'https://image.tmdb.org/t/p/w500//wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg']}/>
        </div>
    );
}

function Blog() {
    return (
        <div>
            <Banner heading="Editing Blog" primaryContent="Newest" secondaryContent="Archive"
                    content="We also create several helpful tutorial for learning how to edit, including full length tutorials on advanced video editing techniques. Read a free article below!"/>

            <Article title="The Best Zoom Cut" date="May 3rd, 2022" paragraphs={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
                "                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
                "                reprehenderit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
                "                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
                "                reprehenderit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
                "                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
                "                reprehenderit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n" +
                "                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
                "                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n" +
                "                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
                "                reprehenderit"
            ]}/>

        </div>
    );
}

function Movies() {
    return (
        <div>
            <Banner heading="Our Projects" primaryContent="View All" secondaryContent="View Recent"
                    content="We've had the privilege of working with several great companies to help edit and produce great movies. You can view a list of the most recent movies we have worked on below!"/>
            <Gallery
                urls={['https://image.tmdb.org/t/p/w500//zhLKlUaF1SEpO58ppHIAyENkwgw.jpg', 'https://image.tmdb.org/t/p/w500//odQ902qHzB4B7ltLrIzDa6hCl9U.jpg', 'https://image.tmdb.org/t/p/w500//yp8vEZflGynlEylxEesbYasc06i.jpg', 'https://image.tmdb.org/t/p/w500//wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/stTEycfG9928HYGEISBFaG1ngjM.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/lfPfPLVspnkrkBy1F9VnLS0sds0.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/putDqnndrdRzRRy5sVPYMH5FTjI.jpg', 'https://www.themoviedb.org/t/p/w440_and_h660_face/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg']}/>

        </div>);
}

function Contact(){
    return (
        <div>
        <Banner heading="Contact Us" primaryContent="Call Us" secondaryContent="Visit Us"
                content="We work with all sizes of companies from indie to AAA. So no matter who you are, we'd love to get in touch with you to discuss how we can help your movie look even better."/>
        <Form/>
        </div>
    );
}

export {Home, Blog, Movies, Contact};