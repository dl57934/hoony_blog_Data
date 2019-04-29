import io from "socket.io-client";

const socketClient = io("http://192.168.43.183:3000");

socketClient.on("connect", () => {
  console.log("connection server");
});

socketClient.emit("first Request", { data: "first Reuqest" });

socketClient.on("first Respond", req => {
  console.log(req);
});
