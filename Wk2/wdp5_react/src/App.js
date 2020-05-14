import React, { Component } from 'react';
import './App.css';
import Header from './Component/StaticHeader.js'
import QRImage from './Component/ImageQRCode.js'
import SubmitSaved from './Component/ButtonSubmitSaved.js'
import CodeName from './Component/FieldCodeName.js'
import CodeData from './Component/FieldCodeData.js'
import CodeSize from './Component/FieldCodeSize.js'
import QRForeground from './Component/ButtonForeground.js'
import QRBackground from './Component/ButtonBackground.js'
import FileFormat from './Component/RadioFileFormat.js'
import ErrorCorrection from './Component/RadioMargin.js'
import MarginArea from './Component/RadioMargin.js'
import Footer from './Component/StaticFooter.js'


class App extends Component {
  render() {
    return (
      <main className="App">

        <Header />
        <QRImage />
        <SubmitSaved />
        <CodeName />
        <CodeData />
        <CodeSize />
        <QRForeground />
        <QRBackground />
        <FileFormat />
        {/* <ErrorCorrection /> */}
        <MarginArea />
        <Footer />
        
        </main>
    );
  }
}
export default App;