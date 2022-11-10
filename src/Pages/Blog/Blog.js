import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
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
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border rounded border-base-300  bg-rose-50 lg:w-1/2 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;