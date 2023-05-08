import billManagerImg from '../assets/Bill_Manager.png';
import billManagerImg1 from '../assets/Bill_Manager1.png';
import billManagerImg2 from '../assets/Bill_Manager2.png';

import galleryAppImg from '../assets/GalleryApp.png';
import galleryAppImg1 from '../assets/GalleryApp1.png';
import galleryAppImg2 from '../assets/GalleryApp2.png';

import googleDocsImg from '../assets/Google_Docs_Clone.png';
import googleDocsImg1 from '../assets/Google_Docs_Clone1.png';

import netflixImg from '../assets/Netflix.png';
import netflixImg1 from '../assets/Netflix1.png';
import netflixImg2 from '../assets/Netflix2.png';

import lekpayImg from '../assets/lekpay.png';
import lekpayImg1 from '../assets/lekpay1.png';
import lekpayImg2 from '../assets/lekpay2.png';
import lekpayImg3 from '../assets/lekpay3.png';

import feltriverImg from '../assets/Feltriver.png';
import feltriverImg1 from '../assets/Feltriver1.png';
import feltriverImg2 from '../assets/Feltriver2.png';
import feltriverImg3 from '../assets/Feltriver3.png';
import feltriverImg4 from '../assets/Feltriver4.png';

export const projectList = [
    {
        title:"Bill Manager",
        image:billManagerImg,
        img:[
            billManagerImg,
            billManagerImg1,
            billManagerImg2
        ],
        desc:"The website is built using React and Redux. It allows users to manually add, edit, and remove bills, with all changes being updated locally. Users can also filter bills based on their category using a dropdown filter. The application presents a time-series chart that visualizes the monthly billing cycle. Additionally, the application provides a feature where users can view the minimum number of bills that need to be paid. These bills should not exceed the monthly budget value. This functionality helps users ensure that they meet their financial obligations while staying within their budget.",
        demo:"https://billmanager001.netlify.app",
        git:"https://github.com/Prathikk017/billmanager"
    },
    {
        title:"PicsArt Gallery App",
        image: galleryAppImg,
        img:[
            galleryAppImg,
            galleryAppImg1,
            galleryAppImg2
        ],
        desc: "The website is an image gallery web app created using HTML, CSS, and JavaScript. It leverages the Unsplash API to fetch data and display images. Users have the ability to search for specific images, and the app presents 30 images matching the search query. When a user clicks on an image, a small modal opens, providing a preview of the image. Users can also download the image directly from the modal. This functionality allows users to easily explore and access high-quality images from the Unsplash platform.",
        demo: 'https://picsartgalleryapi.netlify.app/',
        git:"https://github.com/Prathikk017/PicsArt"
    },
    {
        title:"Text Editor",
        image: googleDocsImg,
        img:[
            googleDocsImg,
            googleDocsImg1
        ],
        desc:" The text editor has a versatile functionality. This website provides all the basic functionality in a text editor with the addition of a feature where the user can handle the documents in various platforms with the same web address. The website makes use of React.JS, Socket.IO, MongoDB, Mongoose and Quill.JS.",
        demo:"https://text-editor1905.netlify.app/documents/18c023bf-4ceb-4506-ac03-9c7eadfa0749",
        git:" https://github.com/Prathikk017/Text-Editor"
    },
    {
        title:"Netflix App",
        image: netflixImg,
        img:[
            netflixImg,
            netflixImg1,
            netflixImg2
        ],
        desc:" A clone of popular video streaming website built on React.JS and Tailwind.CSS which uses Firebase for authentication. The users can make their own playlist",
        demo:"https://netflix-clone1905.netlify.app/",
        git:" https://github.com/Prathikk017/Netflix-Clone"
    },
    {
        title:"Feltriver",
        image: feltriverImg,
        img:[
            feltriverImg,
            feltriverImg1,
            feltriverImg2,
            feltriverImg3,
            feltriverImg4
        ],
        desc:"A travel guidance website which helps the user find the best places, food, stays, fare plans and travel insurances.This provides the user a flexible and happy travel experience. Newsletters and latest offer are sent to the subscribers. This is developed using React.JS and Tailwind.CSS.",
        demo:"https://feltriver.netlify.app/",
        git:" https://github.com/Prathikk017/Feltriver"
    }
]