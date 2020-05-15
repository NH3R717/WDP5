import React, { Component } from 'react'
import React from 'react'
import Download from '../images/download.svg'

class InputForm extends Component {
    state = {

    }

    render() {
        return (
            <form>
            <div style={styles.buttonsDiv}>
                <button style={styles.buttonSend}>Send</button>
                <button style={styles.buttonSave}>Save</button>
                <img src={Download} alt="Info" style={styles.download} />
            </div>
    
            <div style={styles.codeName}>
                <input type='text'
                    style={styles.input}
                    name="QR Code Name"
                    value={props.postTitle}
                    onChange={props.liveUpdateTitle}
                    placeholder=" Code Name"
                />
            </div>
            <div style={styles.codeText}>
    
                <textarea
                    style={styles.input}
                    name="QR Code Text"
                    rows="10" cols="30"
                    value={props.postTitle}
                    onChange={props.liveUpdateTitle}
                    placeholder=" Code Text" />
    
            </div>
    
            <div style={styles.codeSize}>
                <h1 style={styles.H2}>Code Size</h1>
                <div style={styles.inputLabel}>
                    <input type='radio'
                        for="format"
                        name="format"
                        style={styles.input}
                        value='svg'
                        onChange={props.liveUpdateTitle} />
                    <label style={styles.label}>Small</label>
                </div>
    
                <div style={styles.inputLabel}>
                    <input type='radio'
                        for="format"
                        name="format"
                        style={styles.input}
                        value='png'
                        onChange={props.liveUpdateTitle} />
                    <label style={styles.label}>Medium</label>
                </div>
                
                <div style={styles.inputLabel}>
                    <input type='radio'
                        for="format"
                        name="format"
                        style={styles.input}
                        value='jpg'
                        onChange={props.liveUpdateTitle} />
                    <label style={styles.label}>Large</label>
                </div>
    
        </form>
                )
                }
        
            }
