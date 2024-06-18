import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";



const app = express();

app.use(express.json());

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}));

app.use(cookieParser());

app.use("/api/auth", authRoute); 

app.use("/api/users", userRoute);

app.use("/api/posts", postRoute);

app.use("/api/test", testRoute); 

app.use("/api/chats", chatRoute); 

app.use("/api/messages", messageRoute); 

// Serve the client
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
  

  app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(8080, () => {
    console.log("Server is live");
});
