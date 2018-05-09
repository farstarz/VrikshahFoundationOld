import React, { Component } from 'react';
import '../App.css';
//import { Button } from 'reactstrap';

class About extends Component {
    render() {
        return (
        <div className="container Section">
            <h4>About</h4>
            <div className="about-item-1">
              <div><h5>Message from the founder</h5>
                <p><img src="../../Images/About1.jpg" alt="Founder" height="42" width="42" /></p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h6>Paragraph 1:gjhgjh</h6><p>An quo
                  numquam docendi. Cum vero iudicabit
                  quaerendum ex, reque graece fastidii
                  et vis, error explicari ad pro.
                  Omnesque lucilius his at, sit graece
                  numquam referrentur no. Cum ad magna
                  posse scribentur. Odio definitionem
                  ut his, ad duo decore verear mentitum. </p>
                </div>
                <div className="col-md-4">
                  <h6>Paragraph 2:gjhgjh</h6><p>Sed euismod
                  invenire convenire at. Alterum patrioque
                  no duo, ex tantas abhorreant cum. At
                  congue graeco duo. Sonet graeco apeirian
                  at quo, meliore deserunt deseruisse ad
                  eam, graeco salutandi repudiandae per
                  id. Mea cu ponderum facilisis posidonium.
                  Alia primis has cu, per ut inimicus
                  abhorreant, ne mel iisque mediocritatem.</p>
                </div>
                <div className="col-md-4">
                  <h6>Paragraph 3:gjhgjh</h6><p>Doming essent
                  et eam. Ei per amet unum petentium, habeo
                  accusata at sit. Lorem nostro qualisque
                  qui an. Mei eu tamquam tibique, eu magna
                  definiebas his. Ne epicurei constituam quo.</p>
                </div>
              </div>
            </div>
        </div>
        );
    }
}

export default About;
