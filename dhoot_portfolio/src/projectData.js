
import portfolio from "./images/projects/portfolio.png";
import flixer from "./images/projects/flixer.png";

export const projectData = [
  {
    title: "Flixer",
    description: `Flixer is a clone of Netflix's web interface. This app was created using React 
    functional components, Redux state management, axios async/await requests, and deployed on Google Firebase. 
    Firebase Authentication allows user account creation, and Firebase Firestore is the database used to store 
    customer and product records. Additional functionality includes customer subscription checkout powered by 
    the Stripe Firebase Extension and Stripe API integration. Once a user is subscribed, movie data is pulled 
    from The Movie Database (TMDB) for trending movies and movie poster images. Movie trailers are integrated 
    from YouTube if one is successfully found.`,
    technologies:
      "React, Redux, Stripe API, Firebase Authentication, Firebase Firestore, JavaScript, HTML, CSS, GitHub",
    image: flixer,
    date_created: "February 2021",
    link: "",
    github: "",
    test_user: "test@test.com",
    test_password: "abc123",
    cc: {
      number: "4242 4242 4242 4242",
      expiration: "04/24",
      cvv: "424",
      billing: "Anything",
    },
  },
 
  {
    title: "Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on 80's retro arcade games. The site is mobile and desktop responsive, with 
        additional functionality including an app-wide music player that is saved in the app state. `,
    technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify",
    image: portfolio,
    date_created: "January 2021",
    link: "",
    github: "",
  },
  
];
