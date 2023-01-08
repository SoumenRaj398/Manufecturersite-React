import React from "react";
//

const MyPortfolio = () => {
  return (
    <div className="m-16">
      <h1 className="text-center text-3xl font-bold text-secondary">
        My Portpolio
      </h1>
      <div class="mt-12 grid gap-5 mx-12 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
        <div className="card bg-base-100 shadow-xl p-8 ">
          <p>
            <span className="text-secondary font-bold">Name:</span> Soumen
            Mollick
          </p>
          <p>
            <span className="text-secondary font-bold">Adress:</span>{" "}
            Bashabo,Bangladesh
          </p>
          <p>
            <span className="text-secondary font-bold">Skill:</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>FRONT-END DESIGN </li>
            <li>LITTLE MORE BACK-END DESIGN</li>
            <li>ALSO SKILL ON GRAPHIC DESIGN</li>
          </p>
          <p>
            <span className="text-secondary font-bold">Study ON:</span>Computer
            Science and Engineering
          </p>
        </div>
        <div className="p-8 card bg-base-100 shadow-xl">
          <h1 className="text-xl font-bold text-secondary mb-3">
            What i know as a web developer?
          </h1>
          <p>
            Hopefully, i know
            HTML,CSS,BOOTSTRAP,REACT-BOOTSTRAP,TAILWIND,JAVASCRIPT,REACT. I know
            about front end design. Also know about back-end Design. but i
            continue my practicing.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <h1 className="text-xl text-secondary font-bold mb-6">
          Three live website link
        </h1>
        <a className="text-lg" href="https://warhouse-laptop-client.web.app/">
          Laptop Warehouse
        </a>
        <br />
        <a
          className="text-lg"
          href="https://sparkly-empanada-567bc8.netlify.app/"
        >
          Headphone Purchase
        </a>
        <br />
        <a
          className="text-lg"
          href="https://curious-haupia-705404.netlify.app/"
        >
          Visa Agency
        </a>
      </div>
    </div>
  );
};

export default MyPortfolio;
