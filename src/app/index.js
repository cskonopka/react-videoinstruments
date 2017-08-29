import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Grid, Row, Col, Clearfix, Image, Tab, Tabs, PageHeader } from "react-bootstrap"
 
class App extends React.Component {
    constructor() {
        super();
        this.age = 27;
    }

    onSayHello() {
        alert("Hello!");
    }


    render() {
        var imgStyle = {
            display: "block",
            align: "middle",
            maxWidth: "auto",
            height: "140px",
            marginLeft: "auto",
            marginRight: "auto"// 'ms' is the only lowercase vendor prefix
        };
        var typeStyle = {
            textAlign: "center"
        };
        var centerCol = {
            float: "none",
            margin: "0 auto"
        }

        return (
            <div className="container">
    <PageHeader>Video Instruments</PageHeader>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Video Synths & Visualizers">
            <br/>
                <Row>
                    <Col sm={6} md={3}>
                    <Image style={imgStyle} src="./assets/lzx.jpg" responsive /> <br/> <p style={typeStyle}>LZX Industries Expedition Series [Analog]</p>
                    </Col>
                    <Col sm={6} md={3} >
                    <Image style={imgStyle} src="./assets/dj.jpg" responsive /> <br/> <p style={typeStyle}>Dave Jones Design MVIP [Digital]</p>
                    </Col>                    
                    <Col sm={6} md={3} >
                    <Image style={imgStyle} src="./assets/bso.jpg" responsive /> <br/> <p style={typeStyle}>brownshoesonly [Analog]</p>
                    </Col>  
                    <Col sm={6} md={3}>
                    <Image style={imgStyle} src="./assets/3trins.jpg" responsive /> <br/> <p style={typeStyle}>Gijs Giekses 3trinsRGB+1c [Analog]</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={6} md={3}>
                    <Image style={imgStyle} src="./assets/schelemixer.jpg" responsive /> <br/> <p style={typeStyle}>Gijs Giekses Schele-Mixer [Digital]</p>
                    </Col>
                    <Col sm={6} md={3} >
                    <Image style={imgStyle} src="./assets/oscillatoscope1.jpg" responsive /> <br/> <p style={typeStyle}>Gijs Giekses Oscillatoscope1 [Digital]</p>
                    </Col>                    
                    <Col sm={6} md={3} >
                    <Image style={imgStyle} src="./assets/oscillatoscope2a.jpg" responsive /> <br/> <p style={typeStyle}>Gijs Giekses Oscillatoscope2 [Digital]</p>
                    </Col>  
                    <Col sm={6} md={3}>
                    <Image style={imgStyle} src="./assets/gvs1.jpg" responsive /> <br/> <p style={typeStyle}>Gijs Giekses GVS1 [Digital]</p>
                    </Col>
                </Row>
                <br/>                
                <Row>
                    <Col sm={6} md={3}>
                        <Image style={imgStyle} src="./assets/cg.jpg" responsive /> <br/> <p style={typeStyle}>Critter & Guitari Video Scope [Digital]</p>
                    </Col>                
                    <Col sm={6} md={3}>
                    <Image style={imgStyle} src="./assets/etc.jpg" responsive /> <br/> <p style={typeStyle}>Critter & Guitari ETC [Digital]</p>
                    </Col>
                </Row>

        </Tab>
<Tab eventKey={2} title="Modified Devices">
    <br/>
    <Row>
        <Col xs={3} md={3}>
        <Image style={imgStyle} src="./assets/tach.jpg" responsive />
        <br/>
        <p style={typeStyle}>Tachyons+ Psychenizer [Analog]</p>
        </Col>
        <Col xs={3} md={3}>
        <Image style={imgStyle} src="./assets/bpmc.jpg" responsive />
        <br/>
        <p style={typeStyle}>BPMC Premium Cable [Analog]</p>
        </Col>
    </Row>
</Tab>
<Tab eventKey={3} title="Software Applications">
    <br/>
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/sg.jpg" responsive />
        <br/>
        <p style={typeStyle}>Signal Culture</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/lumen.jpg" responsive />
        <br/>
        <p style={typeStyle}>Paracosm Lumen</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/vsynth.png" responsive />
        <br/>
        <p style={typeStyle}>Vsynth</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/c74.png" responsive />
        <br/>
        <p style={typeStyle}>Cycling74 (Max/Jitter)</p>
        </Col>
    </Row>
    <br/>
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/resolume.png" responsive />
        <br/>
        <p style={typeStyle}>Resolume Arena 4</p>
        </Col>    
        <Col md={3}>
        <Image style={imgStyle} src="./assets/c4d.jpg" responsive />
        <br/>
        <p style={typeStyle}>Cinema 4d</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/td.png" responsive />
        <br/>
        <p style={typeStyle}>Touch Designer</p>
        </Col>

    </Row>
</Tab>
<Tab eventKey={4} title="Video Mixers">
    <br/>
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/mx70.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic MX-70</p>
        </Col>    
        <Col md={3}>
        <Image style={imgStyle} src="./assets/mx50.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic MX-50</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/mx20.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic MX-20</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/mx12.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic MX-12</p>
        </Col>        

    </Row>
    <br/>    
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/v4.jpg" responsive />
        <br/>
        <p style={typeStyle}>Edirol/Roland V4</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/v8.jpg" responsive />
        <br/>
        <p style={typeStyle}>Roland V8</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/ave3.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic AVE-3</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/ave5.jpg" responsive />
        <br/>
        <p style={typeStyle}>Panasonic AVE-5</p>
        </Col>
    </Row>    
</Tab>
<Tab eventKey={5} title="Video Captures">
    <br/>
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/matroxmini.jpg" responsive />
        <br/>
        <p style={typeStyle}>Matrox Mini MXO2</p>
        </Col>    
        <Col md={3}>
        <Image style={imgStyle} src="./assets/imillet.jpg" responsive />
        <br/>
        <p style={typeStyle}>iMillet HDMI Video Capture</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/bmdeck.jpg" responsive />
        <br/>
        <p style={typeStyle}>Blackmagic Decklink Series</p>
        </Col>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/bmuse.jpg" responsive />
        <br/>
        <p style={typeStyle}>Blackmagic Ultrastudio Express</p>
        </Col>        
    </Row>   
</Tab>
<Tab eventKey={6} title="Converters">
    <br/>
    <Row>
        <Col md={3}>
        <Image style={imgStyle} src="./assets/deci.jpg" responsive />
        <br/>
        <p style={typeStyle}>Decimator MD-HX</p>
        </Col>    
        <Col md={3}>
        <Image style={imgStyle} src="./assets/orei.jpg" responsive />
        <br/>
        <p style={typeStyle}>Orei RCA/S-Video to NTSC 4K HDMI </p>
        </Col>
    </Row>   
</Tab>
        
    </Tabs>

</div>

        );
    }
}

render(<App />, window.document.getElementById('app'));