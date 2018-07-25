import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        // var client = new websocket.w3cwebsocket("ws://192.168.0.139:8080/failures", "echo-protocol")
        var ws = new WebSocket("ws://192.168.0.139:8080/failures");
        ws.binaryType = "arraybuffer";

        ws.onopen = function () {
            console.log("Connection opened");
        }

        ws.onmessage = function (event) {
            console.log("Message received: ", event.data);
        }

        ws.onclose = function () {
            console.log("Connection closed");
        }


        // var client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

        // client.onerror = function (error) {
        //     console.log('Connection Error. ', error);
        // };

        // client.onopen = function () {
        //     console.log('WebSocket Client Connected');

        //     // function sendNumber() {
        //     //     if (client.readyState === client.OPEN) {
        //     //         var number = Math.round(Math.random() * 0xFFFFFF);
        //     //         client.send(number.toString());
        //     //         setTimeout(sendNumber, 1000);
        //     //     }
        //     // }
        //     // sendNumber();
        // };

        // client.onclose = function (data) {
        //     console.log('echo-protocol Client Closed', data);
        // };

        // client.onmessage = function (e) {
        //     console.log("data", e)
        //     // if (typeof e.data === 'string') {
        //     //     console.log("Received: '" + e.data + "'");
        //     // }
        // };




        // var socket = io("ws://192.168.1.131:8080/")

        // socket.on("connect", function onConnect(data) {
        //     console.log("Socket is running;", data);
        // });

        // socket.on("event", function onEvent(event) {
        //     console.log("Event: ", event);
        // });

        // socket.on("disconnect", function onEvent(data) {
        //     console.log("Event: ", data);
        // });


    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
