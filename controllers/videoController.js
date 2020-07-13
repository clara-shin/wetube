import { homeVideos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", { pageTitle: "Home", homeVideos });
};

export const search = (req, res) => {
    const {
        query: { term: SearchingBy }
    } = req;
    

    console.log(req.query.term);
    res.render("Search", { pageTitle: "Search", SearchingBy, homeVideos });
};

export const videos = (req,res) => res.render("videos", { pageTitle: "Videos"});
export const getUpload = (req,res) => {
    res.render("upload", { pageTitle: "Upload"});
}
export const postUpload = (req,res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    //To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
}

export const videoDetail = (req,res) => res.render("videoDetail", { pageTitle: "Video Detail"});
export const editVideo = (req,res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req,res) => res.render("deleteVideo", { pageTitle: "Delete Video"});