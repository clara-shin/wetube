import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("Hello from home");

const handleProfile = (req,res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}
/*const middleware = (req, res, next) => {
    res.send("not happening");
}
middleware는 연결을 끊을 수도 있다.
만약 그 middleware가 next()함수 대신에 res.send()라는 함수를 동작시킨다면
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
//app.use(betweenHome);
// 미들웨어의 위치가 중요, 라우터가 반환되기 전에 읽혀져야 라우팅이 될때마다 미들웨어가 실행됨

app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);