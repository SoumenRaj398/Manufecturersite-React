import React from 'react'

const Blogs = () => {
  return (
   <div>
       <h1 className='text-center text-3xl text-secondary font-bold mt-20'>Questions-Answers Blog</h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        
        <div className="card bg-base-100 shadow-xl">
    //
          <div className="card-body">
            <h2 className="card-title text-secondary">
              1. How will you improve the performance of a React Application?
            </h2>
            <p>
                Improving application performance is key for developers who are mindful of keeping a user's experience positive to keep them on an app an engaged. In react application, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues. For improving react application, we want to know about react pre-optimization techniques, understanding how react updates its UI,etc.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              2. What are the different ways to manage a state in a React application?
            </h2>
            <p>Based on these rules of each state, you can easily store data as per your needs wihtout worrying about creating a dynamic data mess.5 types of application state in React.
              
                    <li>Communication State</li>
                    <li>Data State</li>
                    <li>Control State</li>
                    <li>Session State</li>
                    <li>Location State</li>
              
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              3. How does prototypical inheritance work?
            </h2>
            <p>
                Everything in javascript is an object. Even when creating a class is an object via an object literal or constructior function. This is how javascript does class based programming as to other traditional object oriented programming languages where they use the keyword 'class' and 'inheritance'.
                The core idea of prototypical inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the singleton pattern.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              4. Why you do not set the state directly in React?
            </h2>
            <p>
                If you immediately call setState. Optimized components might not re-render if you do, and the rendering bugs will be tricky to track down. Instead, always create new objects and arrays when you call 'setState' which is what we did above with the spread operator.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              5.  How will you implement a search to find products by name?
            </h2>
            <p>To find the product by name of an array: 
                <li>Create an empty variable</li>
                <li>Initialize it with 1</li>
                <li>In loop traverse throug each element multiply each element to product</li>
                <li>print the with name</li>
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-secondary">
              6. What is a unit test? Why should write unit tests?
            </h2>
            <p><span className='font-bold text-secondary'>Unit test:</span>This is a type of testing which is done by software developers in which the smallest testable module of an application like functions, procedures or interfaces.</p>
            <p>
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course the product development life cycle, unit testing saves time and money and helps developers write better code, more efficently.
            </p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Blogs
