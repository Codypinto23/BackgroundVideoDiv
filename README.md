# BackgroundVideoDiv
A Div that plays a video (and loading image) behind some content you want to present

## Params

* loadingImage: Image to display while video loads
* videoUrl: Video to display
* minHeight: Min Height of total content display
* maxHeight: Max Height of total content display
* videoHeight: Height of the video to be displayed
* isMobile: boolean, adjusts height of grey overlay for video
* contentToPresent: Provide html you wish to display on top of video here


## Sample

In the area you want to play a video, drop in the Background Video container:

```
<BackgroundVideo
            loadingImage={"https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?cs=srgb&dl=red-pagoda-temple-3380967.jpg&fm=jpg"}
            videoUrl={"https://www.w3schools.com/tags/movie.mp4"}
            minHeight={"220px"}
            maxHeight={"1600px"}
            videoHeight={"40vh"}
            isMobile={true}
            contentToPresent={<div style={{
                                               height: "100%",
                                               width: "100%",
                                               minHeight: "220px",
                                               maxHeight: "1600px",
                                               margin: "auto",
                                               position: "relative",
                                          }}>
                               <div style={{padding: "142px 24px 24px 24px"}}>
                                             <h1 style={{
                                                       marginTop: "24px",
                                                       fontWeight: "800",
                                                       color: "#ffffff",
                                                       fontSize: "34px",
                                                       fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto",
                                                       lineHeight: "36px",
                                                       letterSpacing: "-1px"
                                                       }}>Content I care about here
                                                   </h1>
                                               </div>
                                           </div>
```
