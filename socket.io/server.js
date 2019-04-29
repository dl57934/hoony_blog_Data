import http from "http";
import express from "express";
import io from "socket.io";

const app = express();

const httpServer = http.createServer(app).listen(3000, () => {
  console.log("포트 3000에 연결되었습니다.");
});

const socketServer = io(httpServer);
socketServer.on("connection", socket => {
  console.log("connect client by Socket.io");
  socket.on("first Request", req => {
    console.log(req);
    socket.emit("first Respond", { data: "firstRespond" });
  });
  //   //현재 연결되어있는 클라이언트 소켓에 전달
  //   //socket.emit("이벤트이름", { data: "현재 연결되어 있는 클라이언트" });

  //   // 나를 제외한 다른 클라이언트에게 전달
  //   socket.broadcast.emit("이벤트이름", { data: "나를 제외한 다른 클라이언트" });

  //   // 특정 소켓 클라이언트에게 전달
  //   socketServer
  //     .sockets()
  //     .emit("이벤트 이름", { data: "특정 소켓 클라이언트에게 전달" });
});
