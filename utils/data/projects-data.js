import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Mini Google File System',
        description: "A distributed file system where we can upload, add and retrieve files. The file system consists of master server and chunkservers and can be accessed by multiple clients. A file is broken down into multiple chunks and stored in different chunkservers.",
        tools: ['Java', 'Spring Boot', 'Distributed Sytems', 'Socket Programming'],
        role: 'Backend Developer',
        code: 'https://github.com/nikunjagarwal321/gfs',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Mini Search Engine',
        description: "Mini Search Engine which can search the web and display the relevant results for the given search term. The web pages are crawled and inverted index is created and stored which is used to fetch the results while searching.",
        tools: ['Java', 'Spring Boot', 'AWS', 'MongoDB', 'SQL', 'Microservices'],
        role: 'Backend Developer',
        code: 'https://github.com/nikunjagarwal321/search-engine',
        code: '',
        demo: '',
        image: travel,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },