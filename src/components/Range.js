import "./Range.css";
import React from "react";

export default function Range(){
  return (
    <>                  
    <div id="timeline" className="row text-center justify-content-center mb-5">
        <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold text-light">TimeLine</h2>
            <p className="text-light">This Timeline shows various Major events in my life.</p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-light">2003</p>
                        <p className="h6 mb-0 mb-lg-0 text-light">I was born this year.Quite Important</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-light">2011</p>
                        <p className="h6 mb-0 mb-lg-0 text-light">India won World Cup</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-light">2019</p>
                        <p className="h6 mb-0 mb-lg-0 text-light">School Topper in High School</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-light">2021</p>
                        <p className="h6 mb-0 mb-lg-0 text-light">Cleared JEE Advance</p>
                    </div>
                </div>
                <div className="timeline-step mb-0">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1 text-light">2023</p>
                        <p className="h6 mb-0 mb-lg-0 text-light">Bronze medal in Inter IIT street play competition</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </>
  );
}
