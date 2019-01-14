import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <table className="ui celled padded table">
          <thead>
            <tr>
              <th className="single line">Evidence Rating</th>
              <th>Effect</th>
              <th>Efficacy</th>
              <th>Consensus</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h2 className="ui center aligned header">A</h2>
              </td>
              <td className="single line">Power Output</td>
              <td>
                <div
                  className="ui star rating"
                  data-rating="3"
                  data-max-rating="3"
                />
              </td>
              <td className="right aligned">
                80% <br/>
                <span href="#">18 studies</span>
              </td>
              <td>
                Creatine supplementation is the reference compound for
                increasing muscular creatine levels; there is variability in
                this increase, however, with some nonresponders.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Landing;
