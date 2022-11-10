import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (

        <div className='my-20'>
            <Helmet>
                <title>Gamingable || Blog</title>
                <meta name="Gamingable" content="Website" ></meta>
            </Helmet>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>NoSQL databases are mostly non-rational or distributed database where SQL databases are mostly rational Database</p>
                    <p>For SQL database we need to predetermine the data structure and we cannot put data with different structure in the SQL database. Where in NoSQL we can put many different structured data in the database means we do not have to predetermine the structure before starting the work.</p>
                    <p>For scaling we can just keep adding more server to a NoSQL database to handle more traffic, on the other hand SQL database can be scaled bt adding more processor, RAm or SSD to the existing server.</p>
                    <p>NoSQL databases stores data in key-value pairs and other formats on the other hand the SQL databases are table based meaning all the data are stored in tables.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JWT stands for JSON Web Token. It is used mainly to authorize users to get access to part of the server data.</p>
                    <p>When a new client logs in or signup with login and password the client a authenticate request to the server. The server creates a token for the client and sends the token back to the client. The client stores the token in either local storage or as a HTTP cookie it is better to store the data as a HTTP cookie. The next time the client sends a request for data. it sends a Authorization: Bearer token. The server verify th  JWT token then if it is the proper token the server sends the data or it sends and error.</p>
                </div>

            </div>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>javascript is a programming language that can write complex programs that run on the browser. NodeJs is a opensource Javascript runtime environment that let's user run javascript code without a need of a browser.</p>
                    <p>Javascript can run on any browser with any script engine in it. where NodeJS has a V8 engine that runs javascript in it.</p>
                    <p>Javascript is mostly used for frontend development and NodeJS is used for backend development</p>
                    <p>Javascript can only run on browser but NodeJS can run in any computer without the help of a browser.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>When NodeJS receives multiple request at a same time the NodeJS uses EventQueue to handle those request. When a request is made NodeJS completes that task in a eventloop while the other task stays in the EventQueue. After that task is complete NodeJS takes the next task from the EventQueue and handles that request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;