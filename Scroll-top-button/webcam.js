const d = document,
n = navigator;
let localStream;

export default function webCam(id, stop){
    const $video = d.getElementById(id);
    console.log("This is working");
    console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia){
        // n.mediaDevices
        // .getUserMedia({video: true, audio: false })
        // .then(stream=>{
        //     console.log(stream);
        //     $video.srcObject = stream;
        //     $video.play();
        // })
        // .catch(err => {
        //     $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`);
        //     console.log(`Ops, parece que ocurrio un error: ${err}`);
        // });

        navigator.mediaDevices.getUserMedia({audio:true,video:true})
        .then(stream => {
            localStream = stream.getTracks();
            $video.srcObject = stream;
        })
        .catch((err) =>{
            console.log(err);
        });

        d.addEventListener("click", e=>{
        
            if(e.target.matches(stop)){
                localStream.forEach((track) => {
                    track.stop();
                });
    
            }
        });

    }


}
