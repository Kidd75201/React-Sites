import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import MyButton from "../utilis/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div>
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade onReveal={() => this.percentage()}>
              <div className="discount_percentage">
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
            </Fade>
            <Slide right>
              <div className="discount_description">
                <h3>Purchase tickets</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  voluptas nobis ipsa accusamus nesciunt dolorem nihil quod
                  minima, ipsum laudantium?
                </p>
                <MyButton
                  text="Purchase tickets"
                  bck="#ffa800"
                  color="#ffffff"
                  link="http://google.com"
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    );
  }
}

export default Discount;
