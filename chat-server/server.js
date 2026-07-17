require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");


const {Server} = require("socket.io")

process.on("uncaughtException", (err)=>{
  console.log(err);
  process.exit(1);
});




const http = require("http");
const User = require("./models/user");
const FriendRequest = require("./models/friendRequest");

const server = http.createServer(app);



const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})


const DB = process.env.DBURI;
// console.log(process.env.DBURI);

mongoose.connect(DB,{
}).then((con)=>{
  console.log("DB connection successful")
}).catch((err)=>{
  console.log(err)
})

const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.send('This is the About Page.');
});
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

io.on("connection", async(socket)=>{
  console.log(JSON.stringify(socket.handshake.query))
  const user_id = socket.handshake.query("user_id")

  const socket_id = socket.id;

  console.log("User connected", socket_id)

  if(Boolean(user_id)){
    await User.findByIdAndUpdate(user_id, {socket_id})
  }

   socket.on("friend_request", async (data) => {
    const to = await User.findById(data.to).select("socket_id");
    const from = await User.findById(data.from).select("socket_id");

    // create a friend request
    await FriendRequest.create({
      sender: data.from,
      recipient: data.to,
    });
    // emit event request received to recipient
    io.to(to?.socket_id).emit("new_friend_request", {
      message: "New friend request received",
    });
    io.to(from?.socket_id).emit("request_sent", {
      message: "Request Sent successfully!",
    });
  });

  socket.on("accept_request", async (data) => {
    // accept friend request => add ref of each other in friends array
    console.log(data);
    const request_doc = await FriendRequest.findById(data.request_id);

    console.log(request_doc);

    const sender = await User.findById(request_doc.sender);
    const receiver = await User.findById(request_doc.recipient);

    sender.friends.push(request_doc.recipient);
    receiver.friends.push(request_doc.sender);

    await receiver.save({ new: true, validateModifiedOnly: true });
    await sender.save({ new: true, validateModifiedOnly: true });

    await FriendRequest.findByIdAndDelete(data.request_id);

    // delete this request doc
    // emit event to both of them

    // emit event request accepted to both
    io.to(sender?.socket_id).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
    io.to(receiver?.socket_id).emit("request_accepted", {
      message: "Friend Request Accepted",
    });
  });

})






process.on("unhandledRejection",(err)=>{
  console.log(err)
  server.close(()=>{
    process.exit(1)
  })
})