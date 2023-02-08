import React from "react";
import "./Container.css";
const Container = () => {
  return (
    <section className="review">
      <div className="headerh">
        Q No: 1
        <div className="ccj">
          View in:-
          <select name="element">
            <option value="button">English</option>
            <option value="text">Hindi</option>
          </select>
        </div>
      </div>
      <div className="insturction">
        <div className="question-insturction">
          <p className="qu">
            <b>Question Insturction</b>
          </p>
          <hr />
          <p className="ffff">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            sapiente explicabo? Unde earum eveniet tenetur eius asperiores sit,
            dolorum voluptates aut praesentium ducimus. Eligendi, nemo ex quae
            excepturi sunt dolorem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quos tempore nulla qui. Ea saepe repellendus quos
            quisquam consequatur odio ullam optio mollitia praesentium, fuga
            cupiditate, voluptatibus amet nobis hic iusto pariatur placeat
            voluptatum omnis laboriosam deserunt. Facere veritatis quae quod.
          </p>
        </div>
        <hr />
        <div className="question-answer">
          <p className="qu">
            <b>Question</b>
          </p>
          <hr />
          <p className="ffff">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, et
            nihil! Ipsum nulla sit voluptates explicabo iure eum quis delectus
            voluptatum maiores eaque doloribus dolore ducimus, nam perferendis
            minus laudantium commodi! Quas esse ab eos cumque eveniet, odit
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit odit tempora alias nam incidunt nihil doloremque,
            possimus aperiam vitae commodi unde optio ab repellendus. Quibusdam
            repudiandae repellendus sed officia. Aliquid minima voluptate ab
            porro placeat soluta unde non consequuntur corporis. culpa?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Container;
