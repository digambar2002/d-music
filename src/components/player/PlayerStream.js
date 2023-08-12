import React from 'react'
import '../../css/player.css'
export default function PlayerStream() {
    // const playlistId = '2fe0TJp06G9VCSMZ8a4i36';

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = document.getElementById('embed-iframe');
        const options = {
            width: '100%',
            height: '100',
            uri: 'spotify:track:4mtGAPsQCIlD4ZXdpRi0wf'
        };
        const callback = (EmbedController) => {
            document.querySelectorAll('.episode').forEach(
                episode => {
                    episode.addEventListener('click', () => {
                        EmbedController.loadUri(episode.dataset.spotifyId)
                    });
                })
        };
        IFrameAPI.createController(element, options, callback);
    };

    return (
        <div className="fixed-bottom player-nav">
            <div id="embed-iframe"></div>

        </div>
    )


}
