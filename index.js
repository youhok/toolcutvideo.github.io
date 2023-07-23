const ffmpeg = require('fluent-ffmpeg')
const videoshow = require('videoshow')
const fs = require("fs-extra");
const util = require("util");
const path = require('path');




const exec = util.promisify(require("child_process").exec)
//tool cut
const Jimp = require("jimp");



const audio = "./audio";
const path_to_edited_video = "./editedVideo";
const logo = "./logo";
const rawVideo = "./rawVideo";


function getVideoFilesInDirectory() {
    const dirList = fs.readdirSync(rawVideo);
    return dirList;
}


function getAudioPath() {
    const dirList = fs.readdirSync(audio);
    return path.join(audio, dirList[0]);
}


function getLogoPath() {
    const dirList = fs.readdirSync(logo);
    return path.join(logo, dirList[0]);
}


main();
// editedVideo();
async function main() {
    const allRawVideos = getVideoFilesInDirectory();
    const audioToAdd = getAudioPath();
    const logoToAdd = getLogoPath();
    let isDone = 0;

    for (const videoName of allRawVideos) {
        await editedVideo(videoName, audioToAdd, logoToAdd);
        isDone += 1;
        console.log(`Done: ${isDone}/${allRawVideos.length}`);
    }
}


async function editedVideo(videoname, audioToAddToVideo, logoToAddToVideo) {
    const videoPath = path.join(rawVideo, videoname);
    const outputVideoPath = path.join(path_to_edited_video, videoname);

    const logoPath = path.join(logo, logoToAddToVideo);
    const audioPath = path.join(audio, audioToAddToVideo);


    try {
        // const video = await new ffmpeg(videoPath);

    } catch (err) {
        console.log(`Error editing video: ${err.message}`);
    }

}


