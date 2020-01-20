import React from 'react';

const BackgroundVideo=({loadingImage, videoUrl,minHeight,maxHeight,isMobile,videoHeight,marginBottom, contentToPresent})=>{

    let videoContentHeight="99%"
    if (isMobile!==undefined && isMobile){
        //mobile
        videoContentHeight="99%"
    }else{
        //desktop
        videoContentHeight="99.5%"
    }

    const styles = {

        /* Style the video: 100% width and height to cover the entire window */
        Video: {
            width: "100%",
            height: videoHeight,
            objectFit:"cover",
            backgroundImage: `url(${loadingImage})`,
            backgroundSize:"cover"
        },

        /* Add some content at the bottom of the video/page */
        Content: {
            position: "absolute",
            top: 0,
            color:"#f1f1f1",
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: "100%",
            height: videoContentHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0
        }

    }

    console.log("videoUrl",videoUrl)
    console.log("minHeight",minHeight)
    console.log("maxHeight",maxHeight)
    console.log("marginBottom",marginBottom)
    if (minHeight==undefined)minHeight="300px"
    if (maxHeight==undefined)maxHeight="800px"
    if (marginBottom==undefined)marginBottom="0px"
    console.log("styles",styles)


    return (
        <div  style={{
            position: "relative",
            minHeight: minHeight,
            maxHeight: maxHeight,
            overflow: "hidden",
            marginBottom: marginBottom
        }}>
            <video autoPlay="autoplay" loop="loop" muted style={styles.Video} >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div style={styles.Content}>
                {contentToPresent}
            </div>
        </div>
    )
}

export default (BackgroundVideo);
