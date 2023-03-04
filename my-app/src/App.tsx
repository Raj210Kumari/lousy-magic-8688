import React from 'react';
import './App.css';
import { GamePage } from './Page/GamePage';
import Home from './Page/Home';
import {Navbar} from './Page/Navbar';
import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
function App() {
  const [showGame, setShowGame] = React.useState<boolean>(false)
  return (
    <div className="App">
      <Navbar/>
      {!showGame?
      <Home socket={socket} />
      :
      <GamePage/>
      }
    </div>
  );
}

export default App;
