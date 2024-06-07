export default function LeaderBoard() {
    return (
        <div className="shadow bg-white p-3 rounded-lg">
            <h2 className={'font-semibold flex items-center text-sm justify-start antialiased'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128">
                    <rect width="128" height="128" fill="none" />
                    <ellipse cx="40.46" cy="16.65" fill="#f19534" rx="5.38" ry="5.88" transform="rotate(-10.527 40.461 16.646)" />
                    <ellipse cx="87.13" cy="16.72" fill="#f19534" rx="5.88" ry="5.81" transform="rotate(-79.473 87.125 16.72)" />
                    <path fill="#ffca28" d="M38.87 18.15c-.29-2.98 1.34-3.56 1.66-3.79c.84-.61.89-1.28.46-1.77c-.52-.6-1.6-.26-1.95-.12c-1.56.64-3.04 2.99-1.94 6.06c.1.28.5 1.06 1.27.78c.59-.22.52-.89.5-1.16m45.75-.54c.66-2.74 2.39-2.73 2.96-2.84c1.24-.23 1.56-.64 1.47-1.29c-.16-1.19-1.54-1.21-2.41-1.03c-1.31.28-3.68 1.29-3.78 4.65c-.01.28 0 1.38.84 1.47c.75.08.88-.78.92-.96" />
                    <path fill="#f19534" d="m36.41 32.2l2.69 7.3H88l3.6-6.93c-4.08-4.14-3.56-11.85-3.56-11.85l-3.46-1.39s-4.63 10.5-21.67 10.5s-19.82-10.5-19.82-10.5l-3.88 1.39c-.01 0 1.63 7.17-2.8 11.48" />
                    <path fill="#312d2d" d="M104.66 103.23c-1.45-2.86.4-5.77 3.57-9.37c5.03-5.72 11.25-21.77-.61-34.76c-6.17-6.76-73.4-15.53-87.3 0c-11.63 13-5.71 29.04-.68 34.76c3.17 3.6 5.02 6.51 3.57 9.37c-1.41 2.78-5.62 3.18-5.62 3.18s.97 2.84 3.31 4.37c2.16 1.42 4.82 1.75 6.66 1.8c0 0 7.18 9.71 25.94 9.71h20.88c18.76 0 25.94-9.71 25.94-9.71c1.84-.05 4.49-.38 6.66-1.8c2.34-1.53 3.31-4.37 3.31-4.37s-4.22-.41-5.63-3.18" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone0" cx="45.73" cy="58.792" r="28.219" gradientTransform="matrix(.1261 -1.0693 -.7703 -.1249 74.883 136.107)" gradientUnits="userSpaceOnUse">
                        <stop offset=".708" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone0)" d="M20.32 59.09c-11.49 12.66-5.84 28.79-.95 34.45c.67.78 3.51 3.79 4.16 6.2c0 0 21.92-39.98 21.07-41.32c-1.04-1.65-3.48-7.12-5.24-7.12c-1.89 0-8.33 1.52-13.03 3.68c-3.65 1.67-6.01 4.11-6.01 4.11" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone1" cx="45.173" cy="-1.388" r="25.975" gradientTransform="matrix(-1 0 0 .5298 92.112 107.024)" gradientUnits="userSpaceOnUse">
                        <stop offset=".728" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone1)" d="M63.97 122.29V111.4l-33.35-2.85l-3.03 4.02s7.18 9.71 25.94 9.71z" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone2" cx="14.623" cy="44.66" r="8.077" gradientTransform="matrix(.9057 .4571 .3144 -.7247 -7.263 127.418)" gradientUnits="userSpaceOnUse">
                        <stop offset=".663" stop-color="#454140" />
                        <stop offset="1" stop-color="#454140" stop-opacity="0" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone2)" d="M27.67 107.39c5-8.18-6.08-11.23-6.08-11.23l-.01.01c1.93 2.58 2.8 4.84 1.67 7.06c-1.41 2.78-5.62 3.18-5.62 3.18s5.72 5.49 10.04.98" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone3" cx="42.118" cy="116.704" r="28.219" gradientTransform="matrix(-.1261 -1.0693 .7703 -.1249 7.992 139.476)" gradientUnits="userSpaceOnUse">
                        <stop offset=".708" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone3)" d="M107.62 59.09c11.49 12.66 5.84 28.79.95 34.45c-.67.78-3.51 3.79-4.16 6.2c0 0-21.92-39.98-21.07-41.32c1.04-1.65 3.48-7.12 5.24-7.12c3.36 0 19.04 7.79 19.04 7.79" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone4" cx="93.573" cy="-1.388" r="25.975" gradientTransform="matrix(1 0 0 .5298 -12.573 107.024)" gradientUnits="userSpaceOnUse">
                        <stop offset=".728" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone4)" d="M63.97 122.29V111.4l33.35-2.85l3.03 4.02s-7.18 9.71-25.94 9.71z" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone5" cx="-29.218" cy="17.007" r="8.077" gradientTransform="matrix(-.9057 .4571 -.3144 -.7247 86.802 127.418)" gradientUnits="userSpaceOnUse">
                        <stop offset=".663" stop-color="#454140" />
                        <stop offset="1" stop-color="#454140" stop-opacity="0" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone5)" d="M100.27 107.39c-5-8.18 6.08-11.23 6.08-11.23l.01.01c-1.93 2.58-2.8 4.84-1.67 7.06c1.41 2.78 5.62 3.18 5.62 3.18s-5.72 5.49-10.04.98" />
                    <path fill="#edc391" d="M95.89 70.51H32.11c-6.88 0-12.5 5.99-12.5 13.32c0 7.32 5.63 13.32 12.5 13.32h63.78c6.88 0 12.5-5.99 12.5-13.32s-5.63-13.32-12.5-13.32" />
                    <path fill="#f9ddbd" d="M64 24.58c-20.31 0-39.12 21.72-39.12 52.97C24.89 108.63 44.26 124 64 124s39.11-15.37 39.11-46.45c.01-31.26-18.8-52.97-39.11-52.97" />
                    <path fill="#dba689" d="M68.9 91.08c-.12-.05-.25-.08-.38-.1h-8.26c-.13.02-.25.05-.38.1c-.75.3-1.16 1.08-.81 1.9c.35.83 2 3.14 5.31 3.14s4.95-2.32 5.31-3.14c.37-.83-.04-1.6-.79-1.9" />
                    <path fill="#444" d="M74.23 100.42c-3.72 2.21-15.9 2.21-19.62 0c-2.13-1.27-4.32.67-3.43 2.61c.87 1.91 7.52 6.33 13.27 6.33s12.31-4.42 13.18-6.33c.88-1.94-1.27-3.88-3.4-2.61" />
                    <g fill="#312d2d">
                        <ellipse cx="45.07" cy="80.26" rx="5.67" ry="5.87" />
                        <ellipse cx="82.93" cy="80.26" rx="5.67" ry="5.87" />
                    </g>
                    <path fill="#454140" d="M53.5 69.71c-1.08-1.43-3.58-3.51-8.43-3.51s-7.35 2.08-8.43 3.51c-.48.63-.36 1.36-.03 1.8c.31.41 1.21.79 2.21.45s2.96-1.35 6.24-1.38c3.28.02 5.23 1.04 6.24 1.38c1 .34 1.91-.04 2.21-.45c.34-.44.46-1.17-.01-1.8m37.85 0c-1.08-1.43-3.58-3.51-8.43-3.51s-7.35 2.08-8.43 3.51c-.48.63-.36 1.36-.03 1.8c.31.41 1.21.79 2.21.45s2.96-1.35 6.24-1.38c3.28.02 5.23 1.04 6.24 1.38c1 .34 1.91-.04 2.21-.45c.35-.44.47-1.17-.01-1.8" />
                    <path fill="#312d2d" d="M83.68 18.5c-15.44-4.89-24.82.57-28.65 2.14c-4.22 1.86-11.6 3.94-15.66 1.64c-3.18-1.81-3.12-5.19-3.12-5.19s-9.95 3.79-6.55 14.35c.32.75.55 1.7.68 2.82c.4 3.37-11.16 6.52-8.51 23.38l5.51.92c-2.31 4.23-3.52 14.33-3.52 14.33c-.54 9.34 1.21 15.1 2.13 17.43c.16.4.74.37.84-.05c1.15-4.63 5.09-20.77 4.7-23.58c0 0 13.24-2.63 25.87-11.92c16.5-14.22 25.59-1.15 25.59-1.15s13.7-.6 16.22 14.08c1.24 5.72 2.09 14.88 2.8 21.29c.05.45.66.55.85.13c1.11-2.54 3.32-7.59 3.86-12.73c.08-.81-1.99-10-4.32-19.95l4.32 1.93c0-29.23-17.33-38.07-23.04-39.87" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone6" cx="50.054" cy="117.023" r="10.903" gradientTransform="matrix(.8813 .4726 .5603 -1.045 -64.791 115.179)" gradientUnits="userSpaceOnUse">
                        <stop offset=".58" stop-color="#454140" />
                        <stop offset="1" stop-color="#454140" stop-opacity="0" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone6)" d="M56.18 20.27c-1.28.62-11.74 4.89-16.81 2c-3.12-1.77-3.12-5.01-3.12-5.17c-1.44 1.83-5.78 14.91 6.92 15.79c5.48.37 8.85-4.4 10.85-8.44c.71-1.47 1.85-3.61 2.16-4.18" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone7" cx="158.321" cy="84.226" r="41.073" gradientTransform="matrix(-.9378 -.3944 -.2182 .5285 239.406 56.761)" gradientUnits="userSpaceOnUse">
                        <stop offset=".699" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone7)" d="M82.09 18.02c8.54 2.31 17.43 8.6 22.1 22.84c.41 1.7-7.1 7.23-37.45-10.84c-11.29-6.72-8.2-10.93-6.88-11.4c5.16-1.87 12.66-3.19 22.23-.6" />
                    <radialGradient id="notoPersonWithCrownLightSkinTone8" cx="40.511" cy="104.661" r="10.89" gradientTransform="matrix(1 0 0 -1.2233 0 155.392)" gradientUnits="userSpaceOnUse">
                        <stop offset=".702" stop-color="#454140" stop-opacity="0" />
                        <stop offset="1" stop-color="#454140" />
                    </radialGradient>
                    <path fill="url(#notoPersonWithCrownLightSkinTone8)" d="M36.21 17.1c-.02.01-.04.02-.07.03h-.01c-1.09.46-9.62 4.41-6.43 14.3c0 0 .58 1.62.69 2.93l8.39-1.46c-8.21-6.38-2.54-15.81-2.54-15.81s-.02 0-.03.01" />
                    <path fill="#ffca28" d="M112.16 14.11c-2.63-.5-5.23 1.68-5.81 4.88c-.32 1.74.04 3.41.85 4.67c-2.89 2.13-12.09 7.87-23.76 4.84c-11.67-3.04-15.18-8.9-16.34-13.97a5.877 5.877 0 0 0-3.09-10.88a5.877 5.877 0 0 0-3.09 10.88c-1.15 4.99-4.59 10.58-16.34 13.97c-11.61 3.35-20.87-2.62-23.77-4.82c.81-1.25 1.17-2.94.85-4.68c-.58-3.2-3.18-5.38-5.81-4.88c-2.63.5-4.3 3.5-3.72 6.69c.45 2.48 2.12 4.35 4.08 4.82l4.78 28.35c-.36.11-1.55.65-1.06 3.21l.39 1.91c1.2-.1 21.05-1.82 43.69-1.82S106.49 59 107.7 59.1l.39-1.91c.48-2.56-.7-3.1-1.06-3.21l4.78-28.35c1.96-.48 3.63-2.34 4.08-4.82c.57-3.2-1.1-6.2-3.73-6.7" />
                    <ellipse cx="64" cy="39.5" fill="#ff6f00" rx="5.99" ry="7.42" />
                    <path fill="#ffab00" d="M64 33.91c.24.27.42 1.18-.21 1.88c-1.07 1.17-2.49 2.18-2.93 2.44c-.44.27-.85.07-.99-.04c-.65-.54-.4-1.75.02-2.49c.9-1.62 2.8-3.27 4.11-1.79" />
                    <path fill="#e65100" d="M63.56 42.27c-.67.34-3.04 1.16-2.16 2.59c.46.75 2.28 1.58 4.49.45c3.48-1.78 3.54-6.8 2.87-7.17c-.69-.38-1.28.49-1.71 1.36c-.76 1.48-2.03 2.03-3.49 2.77" />
                    <path fill="#ff6f00" d="M103.82 44.07c.53-3.22 2.04-5.7 3.95-5.36c2.59.46 3.5 3.36 2.96 6.58c-.53 3.22-2.28 5.44-4.89 5.07c-1.64-.23-2.55-3.07-2.02-6.29" />
                    <path fill="#ffab00" d="M108.5 40.49c.24.16.5.49.36 1.32c-.14.83-1.69 2.33-1.97 2.63c-.28.3-.53.27-.65.21c-.61-.27-.68-1.26-.51-1.92c.34-1.43 1.45-3.1 2.77-2.24" />
                    <path fill="#ff6f00" d="M24.18 43.45c-.53-3.22-2.04-5.7-3.95-5.36c-2.59.46-3.5 3.36-2.96 6.58c.53 3.22 2.28 5.44 4.89 5.07c1.64-.23 2.55-3.07 2.02-6.29" />
                    <path fill="#ffab00" d="M19.3 40.09c.92-.5 1.74.21 1.33 1.14c-.62 1.42-.7 2.22-.76 2.77c-.05.56-.23.74-.55.8c-.53.09-.89-.5-1-1.18c-.22-1.46.04-3.02.98-3.53" />
                    <ellipse cx="40.47" cy="41.25" fill="#c62828" rx="3.94" ry="4.54" transform="rotate(-14.241 40.463 41.248)" />
                    <path fill="#f44336" d="M39.87 38.02c.27.1.6.36.67 1.21c.07.85-.92 2.62-1.12 2.97c-.2.36-.62.45-.75.43c-.67-.13-.97-1.08-.97-1.77c0-1.48.68-3.38 2.17-2.84" />
                    <ellipse cx="87.53" cy="41.25" fill="#c62828" rx="4.54" ry="3.94" transform="rotate(-75.759 87.532 41.25)" />
                    <path fill="#f44336" d="M87.85 38.28c.24.16.49.51.34 1.34c-.15.84-1.73 2.32-2.02 2.61s-.53.26-.66.2c-.61-.29-.66-1.29-.48-1.95c.38-1.43 1.52-3.1 2.82-2.2" />
                    <path fill="#fff59d" d="M61.64 10.76c.36-3.3 2.65-3.42 3.07-3.5c1.04-.21 1.26-.7 1.04-1.5c-.23-.86-1.41-.8-1.79-.79c-1.76.06-4.6 1.87-4.1 5.71c.16 1.23 1.66 1.19 1.78.08m-38.5 43.27c3.62-.54 6.35-.51 8.52-.67c1.78-.13 2.58.41 2.69.9c.19.92-.62 1.17-1.89 1.27c-2.79.2-5.73.3-8.74.5c-1.14.08-1.86-.21-1.85-.84c0-.49.33-1.02 1.27-1.16m-4.22-33.1c-.7-3.01-2.9-3.54-3.24-3.8c-.49-.37-.78-.89-.5-1.48s1.02-.58 1.38-.49c1.9.5 3.64 2.34 3.76 5.74c.02.72-1.15 1.11-1.4.03m2.72 8.47c-.8-.52-2.32-1.97-1.19-2.62c1.31-.75 2.17 1.14 7.2 3.03c2.07.78 5.34 1.47 8.22 1.54c1.46.04 1.4.99-.21 1.29c-1.41.27-8.43.44-14.02-3.24m87.44-8.47c.7-3.01 2.9-3.54 3.24-3.8c.49-.37.78-.89.5-1.48s-1.02-.58-1.38-.49c-1.9.5-3.64 2.34-3.76 5.74c-.02.72 1.15 1.11 1.4.03m-2.72 8.47c.8-.52 2.32-1.97 1.19-2.62c-1.31-.75-2.17 1.14-7.2 3.03c-2.07.78-5.34 1.47-8.22 1.54c-1.46.04-1.4.99.21 1.29c1.41.27 8.43.44 14.02-3.24" />
                    <path fill="#e2a610" d="M64 55.3c-23.82 0-43.87 1.87-44.08 1.89l.39 1.91c.2-.02 19.96-1.8 43.69-1.8s43.48 1.78 43.69 1.8l.39-1.91c-.21-.02-20.26-1.89-44.08-1.89" />
                    <path fill="#f19534" d="M64 50.33c-29.48 0-43.21 1.69-43.35 1.71l.33 1.94c.14-.02 13.68-1.65 43.02-1.65s42.88 1.63 43.02 1.65l.33-1.94c-.14-.02-13.87-1.71-43.35-1.71" />
                </svg>
                Top Users
            </h2>

            {
                //konten user
            }

            <div className="space-y-3 mt-4">
                {
                    [1, 2, 3].map((index: number) => {
                        return (
                            <div className={'flex cursor-pointer hover:border-gray-200 border border-transparent bg-gray-200/20 px-3 py-1.5 rounded items-center justify-start gap-2'}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                                        <rect width="32" height="32" fill="none" />
                                        <g fill="none">
                                            <g filter="url(#f0idc)">
                                                <path fill="#4686ec" d="m14.035 3.552l4.264 7.284l-6.016 1.71C8.128 11.173 5.681 8.53 4.205 5.814c-.622-1.146-.617-3.25 1.856-3.25h6.248a2 2 0 0 1 1.726.989" />
                                                <path fill="url(#f0id8)" d="m14.035 3.552l4.264 7.284l-6.016 1.71C8.128 11.173 5.681 8.53 4.205 5.814c-.622-1.146-.617-3.25 1.856-3.25h6.248a2 2 0 0 1 1.726.989" />
                                                <path fill="url(#f0id0)" d="m14.035 3.552l4.264 7.284l-6.016 1.71C8.128 11.173 5.681 8.53 4.205 5.814c-.622-1.146-.617-3.25 1.856-3.25h6.248a2 2 0 0 1 1.726.989" />
                                            </g>
                                            <g filter="url(#f0idd)">
                                                <path fill="#4686ec" d="m17.812 3.552l-4.264 7.284l6.016 1.71c4.155-1.374 6.602-4.017 8.078-6.733c.622-1.146.617-3.25-1.856-3.25h-6.248a2 2 0 0 0-1.726.989" />
                                                <path fill="url(#f0id9)" d="m17.812 3.552l-4.264 7.284l6.016 1.71c4.155-1.374 6.602-4.017 8.078-6.733c.622-1.146.617-3.25-1.856-3.25h-6.248a2 2 0 0 0-1.726.989" />
                                                <path fill="url(#f0id1)" d="m17.812 3.552l-4.264 7.284l6.016 1.71c4.155-1.374 6.602-4.017 8.078-6.733c.622-1.146.617-3.25-1.856-3.25h-6.248a2 2 0 0 0-1.726.989" />
                                            </g>
                                            <path fill="url(#f0id2)" d="m17.812 3.552l-4.264 7.284l6.016 1.71c4.155-1.374 6.602-4.017 8.078-6.733c.622-1.146.617-3.25-1.856-3.25h-6.248a2 2 0 0 0-1.726.989" />
                                            <circle cx="16.047" cy="20.132" r="10.048" fill="url(#f0id3)" />
                                            <circle cx="16.047" cy="20.132" r="10.048" fill="url(#f0id4)" />
                                            <circle cx="16.047" cy="20.132" r="8.688" fill="url(#f0id5)" />
                                            <circle cx="16.047" cy="20.132" r="7.585" fill="url(#f0id6)" />
                                            <circle cx="16.047" cy="20.132" r="7.585" fill="url(#f0ida)" />
                                            <circle cx="16.047" cy="20.132" r="7.585" fill="url(#f0idb)" />
                                            <g filter="url(#f0ide)">
                                                <path fill="#6f3955" d="M17.22 16.8a.8.8 0 0 0-.8-.8h-1.94a.4.4 0 0 0-.4.4v1.177c0 .22.178.4.4.4h.443a.25.25 0 0 1 .25.25V24a.5.5 0 0 0 .5.5h1.047a.5.5 0 0 0 .5-.5z" />
                                            </g>
                                            <path fill="url(#f0id7)" d="M17.22 16.8a.8.8 0 0 0-.8-.8h-1.94a.4.4 0 0 0-.4.4v1.177c0 .22.178.4.4.4h.443a.25.25 0 0 1 .25.25V24a.5.5 0 0 0 .5.5h1.047a.5.5 0 0 0 .5-.5z" />
                                            <defs>
                                                <linearGradient id="f0id0" x1="6.582" x2="8.377" y1="2.023" y2="6.493" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#3d89ec" />
                                                    <stop offset="1" stop-color="#3d89ec" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="f0id1" x1="25.265" x2="23.47" y1="2.023" y2="6.493" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#3d89ec" />
                                                    <stop offset="1" stop-color="#3d89ec" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="f0id2" x1="15.749" x2="16.086" y1="7.063" y2="7.25" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#1a6dd8" />
                                                    <stop offset="1" stop-color="#1a6dd8" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="f0id3" x1="21.418" x2="14.413" y1="16.57" y2="23.434" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#f4c654" />
                                                    <stop offset="1" stop-color="#dc9729" />
                                                </linearGradient>
                                                <linearGradient id="f0id4" x1="12.536" x2="14.802" y1="30.668" y2="17.527" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#fa8547" />
                                                    <stop offset="1" stop-color="#fa8547" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="f0id5" x1="23.963" x2="16.047" y1="18.613" y2="18.613" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#f9a842" />
                                                    <stop offset="1" stop-color="#faa742" />
                                                    <stop offset="1" stop-color="#faa742" />
                                                </linearGradient>
                                                <linearGradient id="f0id6" x1="12.541" x2="23.855" y1="19.17" y2="19.17" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#faa945" />
                                                    <stop offset="1" stop-color="#ec9936" />
                                                </linearGradient>
                                                <linearGradient id="f0id7" x1="16.423" x2="16.423" y1="24.5" y2="23.683" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#693b2e" />
                                                    <stop offset="1" stop-color="#693b2e" stop-opacity="0" />
                                                </linearGradient>
                                                <radialGradient id="f0id8" cx="0" cy="0" r="1" gradientTransform="rotate(-123.321 9.745 2.387)scale(4.60352 17.1923)" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#3669d9" />
                                                    <stop offset="1" stop-color="#3669d9" stop-opacity="0" />
                                                </radialGradient>
                                                <radialGradient id="f0id9" cx="0" cy="0" r="1" gradientTransform="rotate(-57.265 20.217 -11.245)scale(3.0487 6.68733)" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#3669d9" />
                                                    <stop offset="1" stop-color="#3669d9" stop-opacity="0" />
                                                </radialGradient>
                                                <radialGradient id="f0ida" cx="0" cy="0" r="1" gradientTransform="matrix(-10.5257 0 0 -8.96905 18.988 20.132)" gradientUnits="userSpaceOnUse">
                                                    <stop offset=".893" stop-color="#f7b44d" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#f7b44d" />
                                                </radialGradient>
                                                <radialGradient id="f0idb" cx="0" cy="0" r="1" gradientTransform="matrix(10.128 0 0 8.88135 14.078 20.132)" gradientUnits="userSpaceOnUse">
                                                    <stop offset=".879" stop-color="#d2801f" stop-opacity="0" />
                                                    <stop offset=".983" stop-color="#d2801f" />
                                                </radialGradient>
                                                <filter id="f0idc" width="14.889" height="10.434" x="3.61" y="2.362" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx="-.2" dy="-.2" />
                                                    <feGaussianBlur stdDeviation=".2" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0" />
                                                    <feBlend in2="shape" result="effect1_innerShadow_18_1526" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx=".2" dy=".2" />
                                                    <feGaussianBlur stdDeviation=".2" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0" />
                                                    <feBlend in2="effect1_innerShadow_18_1526" result="effect2_innerShadow_18_1526" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx="-.25" dy=".25" />
                                                    <feGaussianBlur stdDeviation=".25" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0" />
                                                    <feBlend in2="effect2_innerShadow_18_1526" result="effect3_innerShadow_18_1526" />
                                                </filter>
                                                <filter id="f0idd" width="14.889" height="10.434" x="13.298" y="2.362" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx="-.2" dy="-.2" />
                                                    <feGaussianBlur stdDeviation=".2" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0" />
                                                    <feBlend in2="shape" result="effect1_innerShadow_18_1526" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx=".2" dy=".2" />
                                                    <feGaussianBlur stdDeviation=".2" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.317647 0 0 0 0 0.458824 0 0 0 0 0.886275 0 0 0 1 0" />
                                                    <feBlend in2="effect1_innerShadow_18_1526" result="effect2_innerShadow_18_1526" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx="-.25" dy=".25" />
                                                    <feGaussianBlur stdDeviation=".25" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.372549 0 0 0 0 0.607843 0 0 0 0 0.960784 0 0 0 1 0" />
                                                    <feBlend in2="effect2_innerShadow_18_1526" result="effect3_innerShadow_18_1526" />
                                                </filter>
                                                <filter id="f0ide" width="3.641" height="9" x="13.779" y="15.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx="-.3" dy=".3" />
                                                    <feGaussianBlur stdDeviation=".3" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.392157 0 0 0 0 0.164706 0 0 0 0 0.254902 0 0 0 1 0" />
                                                    <feBlend in2="shape" result="effect1_innerShadow_18_1526" />
                                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                    <feOffset dx=".2" dy="-.2" />
                                                    <feGaussianBlur stdDeviation=".2" />
                                                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                                    <feColorMatrix values="0 0 0 0 0.501961 0 0 0 0 0.333333 0 0 0 0 0.360784 0 0 0 1 0" />
                                                    <feBlend in2="effect1_innerShadow_18_1526" result="effect2_innerShadow_18_1526" />
                                                </filter>
                                            </defs>
                                        </g>
                                    </svg>
                                </div>
                                <div className="flex w-full justify-between items-center">
                                    <div className={'flex items-center gap-3'}>
                                        <img className={'rounded-full ring-2 ring-gray-300'} width={30} height={30} src="https://qph.cf2.quoracdn.net/main-qimg-5cfd8a4c16d4d847550ac64acad7faf0-lq" alt="" />
                                        <div className={'flex flex-col'}>
                                            <span className={'text-sm font-bold text-gray-700'}>Dadan Hidayt</span>
                                            <div className={'space-x-1 text-gray-600'}>
                                                <span className={'text-xs leading-none -tracking-wide'}>{(12900).toLocaleString('id-ID')} Post</span>
                                                <span>&bull;</span>
                                                <span className={'text-xs leading-none -tracking-wide'}>{(12900).toLocaleString('id-ID')} Like</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}