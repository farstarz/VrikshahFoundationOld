import React, { Component } from 'react';
import '../App.css';
import founder from "../Images/About1.jpg"
//import { Button } from 'reactstrap';

class About extends Component {
    render() {
        return (
        <div className="container Section" id="about_id">
            <h4>About</h4>
            <div className="about-item-1">

              <div className="row">
                <div className="col">
                  <p><img src={founder} alt="Founder" height="420" width="420" /></p>
                </div>
                <div className="col">
                  <h5>Message from the founder</h5>
                  <p>Sed euismod
                    invenire convenire at. Alterum patrioque
                    no duo, ex tantas abhorreant cum. At
                    congue graeco duo. Sonet graeco apeirian
                    at quo, meliore deserunt deseruisse ad
                    eam, graeco salutandi repudiandae per
                    id. Mea cu ponderum facilisis posidonium.
                    Alia primis has cu, per ut inimicus
                    abhorreant, ne mel iisque mediocritatem.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h6>Member 1</h6><p>An quo
                  numquam docendi. Cum vero iudicabit
                  quaerendum ex, reque graece fastidii
                  et vis, error explicari ad pro.
                  Omnesque lucilius his at, sit graece
                  numquam referrentur no. Cum ad magna
                  posse scribentur. Odio definitionem
                  ut his, ad duo decore verear mentitum. </p>
                </div>
                <div className="col-md-4">
                  <h6>Member 2</h6><p>Sed euismod
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
                  <h6>Member 3</h6><p>Doming essent
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
