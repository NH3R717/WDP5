import React, { Component } from 'react';
import './App.css';
import Header from './Component/StaticHeader.js'
import QRImage from './Component/ImageQRCode.js'
import SubmitSaved from './Component/ButtonSubmitSaved.js'
import CodeName from './Component/FieldCodeName.js'
import CodeData from './Component/FieldCodeData.js'
import CodeSize from './Component/FieldCodeSize.js'
import Foreground from './Component/StaticHeader.js'
import Background from './Component/StaticHeader.js'
import FileFormat from './Component/StaticHeader.js'
import ErrorCorrection from './Component/StaticHeader.js'
import MarginArea from './Component/ImageQRCode.js'
import Footer from './Component/ImageQRCode.js'


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
        <Foreground />
        <Background />
        <FileFormat />
        <ErrorCorrection />
        <MarginArea />
        <Footer />
        
        </main>
    );
  }
}
export default App;