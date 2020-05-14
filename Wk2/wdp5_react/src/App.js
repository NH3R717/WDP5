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
import ErrorCorrection from './Component/RadioErrorCorrection.js'
import MarginArea from './Component/RadioMargin.js'
import Footer from './Component/StaticFooter.js'


class App extends Component {
  render() {
    return (
      <main className="App">

        <Header />
        <section style={styles.imageButtons} >
          <QRImage />
          <SubmitSaved />
        </section>
        <section style={styles.codeNameData}>
          <CodeName />
          <CodeData />
        </section>
        <section style={styles.sizeFormat}>
          <CodeSize />
          <FileFormat />
        </section>
        <section style={styles.codeColors}>
          <QRForeground />
          <QRBackground />
        </section>
        <section style={styles.errorMargin}>
          <ErrorCorrection />
          <MarginArea />
        </section>
        <Footer />

      </main>
    );
  }
}
export default App;

const styles = {
  imageButtons: {
    margin: '1em auto 1em auto',
  },
  codeNameData: {
    margin: '1em auto 1em auto',
  },
  sizeFormat: {
    margin: '1em auto 1em auto',
  },
  codeColors: {
    margin: '1em auto 1em auto',
  },
  errorMargin: {
    margin: '1em auto 1em auto',
  },
imageContainer: {
  margin: '1em auto 1em auto',
  paddingTop: '.38em',
  height: '195px',
  width: '195px',
  background: 'rgb(213, 213, 213)',
  borderRadius: '.6em'
  }
} 