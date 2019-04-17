import express from "express";
import routes from "../routes";
import { videos, videoDetail, editVideo, upload, deleteVideo } from "../controllers/videoConroller";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);


export default videoRouter;