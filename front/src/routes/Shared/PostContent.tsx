import {
  CheckCircle2,
  MoreHorizontal,
  Share2Icon,
} from 'lucide-preact';

import { cn } from '../../utils';

export default function PostContent() {
    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="bg-white rounded-lg overflow-hidden relative flex border-l-4 -tracking-wide border-l-green-500 flex-col items-start justify-start p-3  gap-0">
                <h4 className={'font-semibold text-medium'}>Selamat ulang tahun, Dadan Hidayat</h4>
                <p className={'text-sm'}>
                    Semoga di umur 40 tahun ini kamu panjang umur
                </p>
                <div className={'absolute right-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                        <rect width="128" height="128" fill="none" />
                        <path fill="#fbb75a" d="M19.65 84.13s-1.83 3.38-1.97 5.49c-.14 2.11 1.27 19.29 4.36 23.09s12.53 13.8 40.4 14.08c27.87.28 42.09-12.39 43.64-14.92c1.55-2.53 3.52-14.36 3.66-23.65S60.33 85.4 60.33 85.4z" />
                        <path fill="#f2a05b" d="M61.88 106.65c24.78.7 47.72-14.5 47.72-14.5l-.7 7.6s-18.86 14.5-46.6 13.8s-43.78-13.8-43.78-13.8l-.7-6.62s22.39 12.9 44.06 13.52" />
                        <radialGradient id="notoBirthdayCake0" cx="65.314" cy="62.727" r="45.785" gradientTransform="matrix(-.0195 .9998 -2.1765 -.0425 203.115 .09)" gradientUnits="userSpaceOnUse">
                            <stop offset=".445" stop-color="#feeac9" />
                            <stop offset=".565" stop-color="#fee7c2" />
                            <stop offset=".741" stop-color="#fedeae" />
                            <stop offset=".952" stop-color="#ffcf8d" />
                            <stop offset="1" stop-color="#ffcb85" />
                        </radialGradient>
                        <path fill="url(#notoBirthdayCake0)" d="M64.98 47.52c-10.56.05-42.37 2.53-45.61 16.05s-2.82 26.19-2.25 27.31c.56 1.13 1.82-.82 4.79.28c3.8 1.41 3.52 11.68 10.42 13.51s7.04-7.6 14.92-7.04c7.88.56 4.22 11.13 14.64 11.26c10.7.14 6.73-10.46 14.22-11.4c7.41-.94 3.52 10.56 13.8 9.01S99 90.32 104.26 88.77c3.99-1.17 3.65 2.75 5.54 2.58c1.55-.14.94-21.59-.47-26.37s-14.65-17.6-44.35-17.46" />
                        <path fill="#fdffff" d="M32.95 77.72c-7.49-3.16-9.91-6.15-11.12-7.67c-.84-1.06-2.11-1.48-2.82-.63c-.7.84-.35 1.76.42 2.67c.77.92 4.22 6.19 13.09 9.08c7.8 2.54 12.95 2.89 14.92 2.96c2.19.08 3.1-2.67.21-3.03c-3.31-.41-6.53.07-14.7-3.38m22.5 4.39c-1.92-.05-2.63 1.03-2.63 1.88c0 1.03.89 1.6 2.44 1.69c1.55.09 2.44-.94 2.44-1.64c.01-.71-.42-1.89-2.25-1.93" />
                        <path fill="#fce9ca" d="M25.14 88.78c-.88.86-.51 1.86-.09 2.38c.69.85 1.93.99 2.57.49c.73-.56.64-1.6.18-2.29c-.59-.9-1.79-1.44-2.66-.58m2.46 3.7c-1.21.68-.67 2.19-.02 3.43c1.39 2.64 1.83 4.79 3.43 5.85c1.62 1.07 3.62.33 3.43-.78c-.3-1.77-1.39-.43-2.33-2.67c-.39-.93-1.19-2.42-2.12-4.43c-.54-1.18-1.17-2.09-2.39-1.4m28.18 7.13c-1.19.85-.47 3 1.03 4.69c1.5 1.69 3.61 3.05 5.91 2.44c1.78-.47 1.64-2.44.42-3s-2.67-.23-3.99-1.97c-.64-.85-1.54-3.47-3.37-2.16m28.26-1.85c-1.18.87-.07 2.68.66 3.93s3.14 3.65 4.55 2.23c1.03-1.04-.91-2.3-1.82-3.66c-.68-1.03-1.82-3.67-3.39-2.5m-2.03-3.26c-.78.57-.66 1.47-.38 1.97c.38.66 1.6.94 2.3.33c.68-.59.28-1.55-.09-2.02s-1.31-.66-1.83-.28" />
                        <path fill="#ee5b4a" d="M86.4 39.57s-7.73 10.66-7.24 12.78c.38 1.67 2.18 3.46 6.03 3.72s6.26-1.53 6.81-3.23c.74-2.26-1.67-9.46-2.54-10.89c-1.23-2.03-2.34-2.32-3.06-2.38m15.98 9.62l-8.31 11.64s.25 2.55 2.75 3.65c2.61 1.14 7.94 1.21 9.47-1.02c1.74-2.53.99-6.88.11-9.51c-.68-2.06-2.12-4.98-4.02-4.76M88.31 62.34l-8.04 12.35s-.09 3.06 3.54 3.91c2.88.67 8.17.7 10.14-.99c1.97-1.69 1.81-5.09.11-8.66c-1.86-3.88-4.62-7.53-5.75-6.61m-20.02 3.03L57.76 78.11s-.21 2.46 2.39 3.66c3.34 1.55 8.48 1.47 11.09.07c2.29-1.23 2.64-5.13 1.81-7.57c-.68-1.99-1.62-3.68-1.97-4.6c-.35-.91-1.53-3.74-2.79-4.3m-22.67-4.3l-8.97 14.01s.28 3.27 3.7 3.94c2.95.58 7.81.92 9.5-1.2s1.76-7.5.14-11.3c-1.62-3.79-3.03-4.95-4.37-5.45M32 47.86l-1.2-.43l-8 12.64s-.23 2.23 1.63 3.42c1.76 1.13 7.36 1.69 10.38.21c3.03-1.48 2.81-6.44.7-10.7c-1.95-3.95-3.51-5.14-3.51-5.14m14.68-9.33l-7.77 13.41s.34 1.74 3.02 2.5c2.63.75 6.07.61 7.83-.75c1.77-1.36 2.24-4.35 1.43-7.82c-.55-2.37-2.68-6.66-4.51-7.34" />
                        <path fill="#fd6f42" d="M39.01 65.96c-1.67 3.6-4.01 8.94-1.34 10.7c2.67 1.76 6.62-1.06 8.02-6.34s1.62-7.92.28-9.05c-1.33-1.11-4.78-.02-6.96 4.69m-9.06-18.94c-1.9.12-4.08 3.06-5.17 5.95s-2.36 6.48-1.9 7.64s3.59 2.57 4.93.11c1.34-2.46 1.07-5.75 1.37-7.43c.53-2.96 2.82-5.42 2.82-5.42s-.78-.93-2.05-.85m15.06-9.07c-1.36.08-2.65.65-3.81 4.45c-.63 2.08-2.41 4.49-2.58 6.76c-.17 2.28.34 2.87.34 2.87s3.26.63 4.53-1.91c1.22-2.43.84-4.91 1.25-6.06c.41-1.16 2.28-5.37 2.28-5.37s-.82-.8-2.01-.74" />
                        <path fill="#ff6e45" d="M86.07 39.5c-1.43-.07-3.52 1.7-4.85 4.86c-1.34 3.16-2.15 6.59-2.09 7.6s5.34 1.13 7.2-1.92c1.17-1.92 1.11-7.07.98-8.31c-.12-1.25.25-2.16-1.24-2.23m15.87 9.65c-1.23.2-4.13.91-6.47 5.96c-1.46 3.15-1.9 6.18-.84 6.62s3.95.88 5.27-.77c1.32-1.65 2.78-6.14 3.11-8.38c.32-2.22.54-3.69-1.07-3.43M80.57 75.54c1.58 1.44 4.59.08 5.67-1.2c1.65-1.97 3.03-6.09 3.1-8.97c.05-2.09.53-3.27-1.3-3.17c-.63.04-2.36.35-4.36 3.31c-1.59 2.34-2.5 4.19-3.03 6.48c-.45 1.9-.54 3.13-.08 3.55M66.21 64.66c-1.02-.04-2.96.56-4.96 3.87c-2.01 3.31-4.29 8.66-3.31 10.31c.99 1.65 3.41 1.83 5.88.81c2.46-1.02 4.15-4.58 4.29-6.02c.14-1.44 1.09-7.6.28-8.2c-.81-.59-1.3-.73-2.18-.77" />
                        <radialGradient id="notoBirthdayCake1" cx="64.791" cy="26.285" r="39.024" gradientTransform="matrix(1 0 0 .6157 0 10.1)" gradientUnits="userSpaceOnUse">
                            <stop offset=".034" stop-color="#ffe265" stop-opacity="0.7" />
                            <stop offset=".112" stop-color="#ffe575" stop-opacity="0.643" />
                            <stop offset=".417" stop-color="#fff0b0" stop-opacity="0.422" />
                            <stop offset=".677" stop-color="#fff8db" stop-opacity="0.234" />
                            <stop offset=".88" stop-color="#fffdf5" stop-opacity="0.087" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                        </radialGradient>
                        <path fill="url(#notoBirthdayCake1)" d="M104.3 26.03c0 13.93-22.26 26.28-39.61 26.28s-39.42-13.1-39.42-27.03S47.03.26 64.37.26S104.3 12.1 104.3 26.03" />
                        <path fill="#fea8a8" d="M72.79 31.12c.35-.49 6.94.06 7.53.21c.28.07.21 25.2-.14 25.41c-.3.18-1.48 1.27-3.73 1.27s-3.52-.77-3.94-1.06c-.42-.28-.07-25.34.28-25.83" />
                        <path fill="#ec7fae" d="M60.69 37.32c-.27.23-.35 24.5-.14 24.71c.21.21 1.62 1.48 4.36 1.41c2.75-.07 4.01-1.06 4.22-1.27c.21-.21.14-24.85-.07-24.99c-.21-.15-7.95-.22-8.37.14" />
                        <path fill="#93c7ee" d="M48.86 32.11c-.34.2-.35 24.85-.21 25.06c.14.21 2.18.92 4.08.92s3.73-.42 3.94-.63c.21-.21.07-25.06-.14-25.34s-7.32-.22-7.67-.01" />
                        <radialGradient id="notoBirthdayCake2" cx="64.909" cy="35.978" r="19.428" gradientUnits="userSpaceOnUse">
                            <stop offset=".17" stop-color="#ff9616" />
                            <stop offset=".654" stop-color="#ffd429" />
                        </radialGradient>
                        <path fill="url(#notoBirthdayCake2)" d="M64.98 15c.42 0 .99 3.31 1.76 5.21s3.66 6.62 2.53 10.7c-1.23 4.47-8.2 5.34-9.71-.49c-1.06-4.08 2.53-8.31 3.45-10.21c.63-1.31 1.68-5.21 1.97-5.21" />
                        <radialGradient id="notoBirthdayCake3" cx="77.212" cy="30.827" r="19.044" gradientUnits="userSpaceOnUse">
                            <stop offset=".17" stop-color="#ff9616" />
                            <stop offset=".654" stop-color="#ffd429" />
                        </radialGradient>
                        <path fill="url(#notoBirthdayCake3)" d="M76.31 9.86s-1.04 4.74-2.32 6.76c-1.83 2.89-2.99 6.84-1.55 10.07c1.83 4.08 9.16 3.87 9.29-3.1c.07-3.66-1.53-5.6-2.67-7.67c-.78-1.41-2.26-5.92-2.75-6.06" />
                        <radialGradient id="notoBirthdayCake4" cx="52.822" cy="30.822" r="18.853" gradientUnits="userSpaceOnUse">
                            <stop offset=".17" stop-color="#ff9616" />
                            <stop offset=".654" stop-color="#ffd429" />
                        </radialGradient>
                        <path fill="url(#notoBirthdayCake4)" d="M53.01 10.64s-1.9 4.72-3.1 6.48s-3.33 5.91-2.11 9.22c1.48 4.01 8.03 4.49 9.29-.77c.84-3.52-.99-6.19-2.25-9.08c-.79-1.82-1.83-5.85-1.83-5.85" />
                    </svg>
                </div>
                {/*                 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                    <rect width="512" height="512" fill="none" />
                    <circle cx="329.11" cy="37.955" r="29.185" fill="#ffcf53" />
                    <path fill="#c2f4ff" d="M188.825 132.463c0 10.73-8.699 19.537-19.429 19.537H91.298c-8.189 0-14.827-6.746-14.827-14.935s6.638-14.935 14.827-14.935c1.235 0 2.429.168 3.576.452a15.392 15.392 0 0 1-.408-3.471c0-8.497 6.888-15.386 15.386-15.386c3.225 0 6.216.996 8.689 2.692c2.885-11.122 12.99-19.334 25.014-19.334c14.272 0 25.842 11.57 25.842 25.842c10.73.001 19.428 8.808 19.428 19.538m236.278-45.222c-1.851 0-3.648.229-5.368.654c.384-1.674.594-3.414.594-5.204c0-12.807-10.382-23.19-23.19-23.19c-4.861 0-9.37 1.498-13.097 4.054c-4.35-16.761-19.579-29.137-37.701-29.137c-21.511 0-38.949 17.438-38.949 38.949c-16.173 0-29.284 13.143-29.284 29.316s13.111 29.316 29.284 29.316h117.712c12.342 0 22.347-10.038 22.347-22.38c-.001-12.34-10.006-22.378-22.348-22.378" />
                    <path fill="#76dfff" d="M456.268 302.959c0-33.165-26.885-59.959-60.05-59.959H240.087c-33.165 0-60.05 26.835-60.05 60s26.885 60 60.05 60h53.362c-29.085 0-37.439 22-38.699 50h-33.295c-25.285 0-45.782 20.715-45.782 46s20.497 46 45.782 46h99.679c12.736 0 24.253-5.137 32.552-13.531c12.455-9.43 28.646-10.469 58.943-10.469h34.714c32.544 0 58.925-26.461 58.925-59.005c0-83.677-50-65.197-50-119.036" />
                    <path fill="#f9e7c0" d="M294.098 373.867c0 33.165-7.531 60.05-40.696 60.05H121.109c-33.165 0-60.05-26.885-60.05-60.05c0-33.165 26.885-60.05 60.05-60.05h132.293c33.165 0 40.696 26.886 40.696 60.05" />
                    <path fill="#f9e7c0" d="M350.18 326.659a7.639 7.639 0 0 0-1.525-1.239l-.967-.601a59.979 59.979 0 0 0-3.731-2.414c-9.645-6.463-25.489-19.012-28.666-35.652c-.635-24.738-20.868-44.753-45.753-44.753h-99.679c-17.453 0-32.621 10-40.345 24H56.258c-28.441 0-51.496 23.193-51.496 51.634c0 74.567 34.691 38.901 34.691 126.351c0 33.165 26.885 60.015 60.05 60.015h60.72c2.536 1 5.14 1 7.801 1h99.679c25.285 0 45.782-20.556 45.782-45.84c0-11.579 19.874-24.349 31.483-34.214c17.024-10.6 28.361-29.457 28.361-50.987c-.001-19.248-9.067-36.336-23.149-47.3" />
                    <ellipse cx="194.161" cy="356.367" fill="#e5d4b1" rx="123.992" ry="31.333" />
                    <path fill="#ff473e" d="M318.606 203.349L78.931 366.162c-4.106 2.789-9.878.426-10.576-4.488c-19.171-135.02 131.519-237.416 249.977-169.809c4.311 2.46 4.38 8.695.274 11.484" />
                    <path fill="#597b91" d="M250.406 356s-.087-.424-.272-.69L143.862 202.809c-.483-.693-1.437-.819-2.129-.335c-.693.483-.863 1.275-.381 1.968L247.015 356z" />
                    <path fill="#fd8c97" d="M144.394 198.939s2.023.524 5.408 1.548c3.246 1.121 7.994 2.646 13.493 4.613c5.407 2.032 11.488 4.56 17.83 7.39c6.198 2.93 12.896 5.995 19.076 9.421c3.1 1.706 6.383 3.284 9.284 5.068c2.904 1.782 5.89 3.447 8.549 5.218c5.296 3.558 10.091 6.982 13.75 10.231C239.275 248.805 243 254.75 243 254.75l-88.249 59.974s-3.412-4.676-6.796-13.914c-1.778-4.559-3.327-10.243-4.828-16.445c-.74-3.108-1.265-6.486-1.93-9.828c-.668-3.34-1.01-6.966-1.535-10.465c-1.07-6.984-1.622-14.33-2.221-21.159c-.454-6.93-.718-13.51-.748-19.286c.062-5.84.278-10.822.352-14.255c.213-3.53.424-5.609.424-5.609z" />
                    <path fill="#00b1ff" d="M454.55 446.306a22.614 22.614 0 0 1-20.716 13.565c-8.5 0-16.233-4.774-20.093-12.272c-3.859 7.498-11.592 12.272-20.093 12.272a22.617 22.617 0 0 1-20.716-13.565a.681.681 0 0 1 1.247-.545a21.256 21.256 0 0 0 19.47 12.751a21.255 21.255 0 0 0 19.47-12.751c.015-.033.041-.056.06-.086c.026-.042.049-.084.084-.12c.041-.041.089-.068.138-.097c.024-.015.042-.037.069-.048c.003-.002.007-.001.01-.002c.054-.023.111-.029.169-.037c.031-.004.062-.017.093-.017s.062.013.093.017c.058.008.115.015.168.037c.004.002.007.001.011.002c.028.012.046.035.071.05c.047.029.095.055.135.095c.035.036.058.079.084.121c.019.03.045.052.06.085a21.256 21.256 0 0 0 19.47 12.751a21.255 21.255 0 0 0 19.47-12.751a.678.678 0 0 1 .896-.351c.343.151.5.552.35.896m17.155-80.506a.655.655 0 0 0-.863.338a20.483 20.483 0 0 1-18.761 12.285a20.48 20.48 0 0 1-18.76-12.285c-.014-.033-.04-.055-.059-.084c-.025-.039-.046-.08-.08-.114c-.036-.036-.079-.059-.122-.086c-.027-.017-.047-.041-.077-.054c-.004-.002-.009-.001-.013-.003c-.047-.02-.098-.024-.149-.032c-.034-.005-.067-.018-.101-.018s-.068.013-.102.019c-.05.008-.1.012-.147.032l-.014.003c-.032.014-.054.04-.083.058c-.04.025-.081.047-.115.081c-.035.035-.057.077-.083.117c-.018.028-.043.05-.057.081a20.48 20.48 0 0 1-18.76 12.285a.656.656 0 0 0 0 1.31c8.191 0 15.642-4.6 19.36-11.824a21.782 21.782 0 0 0 19.36 11.824a21.796 21.796 0 0 0 19.962-13.07a.653.653 0 0 0-.336-.863m-38.315-75.679a21.256 21.256 0 0 1-19.47-12.75c-.014-.033-.041-.056-.06-.085c-.026-.042-.049-.085-.084-.12c-.039-.039-.087-.065-.134-.094c-.026-.016-.045-.039-.073-.051c-.004-.002-.008-.001-.011-.002c-.057-.024-.117-.031-.179-.039c-.027-.003-.053-.015-.08-.015c-.042 0-.083.015-.126.023c-.046.009-.092.012-.135.03l-.015.003c-.034.015-.058.042-.088.062c-.041.026-.083.048-.117.082c-.037.037-.061.081-.088.125c-.018.029-.044.05-.057.082a21.257 21.257 0 0 1-19.47 12.75a21.256 21.256 0 0 1-19.47-12.75c-.014-.033-.041-.056-.06-.085c-.026-.042-.049-.085-.084-.12c-.039-.039-.087-.065-.134-.094c-.026-.016-.045-.039-.073-.051c-.004-.002-.008-.001-.011-.002c-.057-.024-.119-.031-.181-.039c-.026-.003-.052-.014-.078-.014c-.041 0-.082.015-.124.023c-.047.009-.094.012-.138.03c-.005.002-.01.001-.014.003c-.033.015-.056.041-.086.06c-.042.026-.085.049-.12.084c-.036.036-.06.081-.087.123c-.018.029-.044.051-.058.083a21.257 21.257 0 0 1-19.47 12.75a.68.68 0 0 0 0 1.36c8.5 0 16.233-4.774 20.093-12.271c3.859 7.497 11.592 12.271 20.093 12.271c8.5 0 16.233-4.774 20.093-12.271c3.859 7.497 11.592 12.271 20.093 12.271c.376 0 .68-.305.68-.68s-.301-.682-.677-.682" />
                </svg> */}
            </div>
            {[1, 2, 3, 4, 5].map(function () {
                return <div className={'flex py-3  flex-col bg-white gap-y-3  rounded shadow-md'}>

                    <div className="px-3 relative">
                        <div className="flex justify-between items-center">
                            <div className="flex text-sm items-center gap-1">
                                <img width={35} height={35} className={'overflow-hidden rounded-md'} src="https://qph.cf2.quoracdn.net/main-qimg-5cfd8a4c16d4d847550ac64acad7faf0-lq" alt="" />
                                <div className="space-y-0">
                                    <div className={'flex gap-1 items-center'}>
                                        <span className={'font-semibold flex items-center justify-start gap-1 line-clamp-1'}>Dadan Hidayat<CheckCircle2 color='black' size={15} /> </span>
                                        <span className={''}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <rect width="24" height="24" fill="none" />
                                                <path fill="currentColor" d="m10 17l5-5l-5-5z" />
                                            </svg>
                                        </span>
                                        <span className={'font-semibold underline'}>NIGA indonesia</span>
                                    </div>
                                    <time datetime="" className={'text-xs block'}>Baru Saja</time>
                                </div>
                            </div>
                            <div className={'group'}>
                                <button className={cn('group-hover:bg-gray-50 transition-all rounded-full')}>
                                    <MoreHorizontal />
                                </button>
                                <div className="absolute scale-0 group-hover:scale-100 transition-all top-7 shadow max-w-xs bg-white rounded-lg right-2">
                                    <div className="p-4">
                                        <ul className={cn('flex items-start text-gray-800 justify-start flex-col gap-0')}>
                                            <li className={'w-full block'}>
                                                <a href="" className={'flex items-start justify-start hover:bg-gray-50 transition-all p-2 rounded-lg gap-3'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                                        <rect width="24" height="24" fill="none" />
                                                        <path fill="currentColor" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                                                    </svg>
                                                    <div>
                                                        <h3 className={'text-sm font-semibold'}>Save Post</h3>
                                                        <p className={'text-xs'}>Tambahkan Post Ke Daftar Favorit</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={'w-full block'}>
                                                <a href="" className={'flex items-start justify-start hover:bg-gray-50 transition-all p-2 rounded-lg gap-3'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                                        <rect width="24" height="24" fill="none" />
                                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l16 16m-3.5-3.244C15.147 17.485 13.618 18 12 18c-3.53 0-6.634-2.452-8.413-4.221c-.47-.467-.705-.7-.854-1.159c-.107-.327-.107-.913 0-1.24c.15-.459.385-.693.855-1.16c.897-.892 2.13-1.956 3.584-2.793M19.5 14.634c.333-.293.638-.582.912-.854l.003-.003c.468-.466.703-.7.852-1.156c.107-.327.107-.914 0-1.241c-.15-.458-.384-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-.338 0-.671.022-1 .064m2.323 7.436a2 2 0 0 1-2.762-2.889" />
                                                    </svg>
                                                    <div>
                                                        <h3 className={'text-sm font-semibold'}>Hide Post</h3>
                                                        <p className={'text-xs'}>Jangan Lihatkan postingan ini lagi</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={'w-full block'}>
                                                <a href="" className={'flex items-start justify-start hover:bg-gray-50 transition-all p-2 rounded-lg gap-3'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                                        <rect width="24" height="24" fill="none" />
                                                        <path fill="currentColor" d="M13 13h-2V7h2m-2 8h2v2h-2m4.73-14H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27z" />
                                                    </svg>
                                                    <div>
                                                        <h3 className={'text-sm font-semibold'}>Report Post</h3>
                                                        <p className={'text-xs'}>Laporkan Postingan Ini</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className={'w-full block'}>
                                                <a href="" className={'flex items-start justify-start hover:bg-gray-50 transition-all p-2 rounded-lg gap-3'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16">
                                                        <rect width="16" height="16" fill="none" />
                                                        <g fill="currentColor">
                                                            <path d="M5 4.001H1.5l-.5.5v10l.5.5h11l.5-.5V11.5h-1v2.501H2v-9h3z" />
                                                            <path fill-rule="evenodd" d="M6 11H5V8.5a5 5 0 0 1 4-4.9V2.349a1.349 1.349 0 0 1 2.333-.923l3.646 3.89v1.368l-3.646 3.89A1.349 1.349 0 0 1 9 9.65V8.6c-.933.211-1.384.711-1.632 1.145A2.9 2.9 0 0 0 7 11zm4-6.5a4 4 0 0 0-4 4V10h.176c.138-.443.384-.965.824-1.417c.442-.455 1.08-.839 2-1a6 6 0 0 1 1-.083v2.151a.349.349 0 0 0 .603.239L14.25 6l-3.647-3.89a.349.349 0 0 0-.603.24z" clip-rule="evenodd" />
                                                            <path d="M7 11c.052 0 .06 0 0 0m0 0v.008z" />
                                                        </g>
                                                    </svg>
                                                    <div>
                                                        <h3 className={'text-sm font-semibold'}>Bagian Postingan</h3>
                                                        <p className={'text-xs'}>Bagikan Postingan Ini</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'text-sm mt-1 -tracking-tight leading-relaxed'}>
                            Alhamdulilah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, distinctio?
                            <div className="text-blue-500">
                                <a href=""> #meme</a>
                                <a href=""> #memekomikindonesia</a>
                                <a href=""> #trending</a>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <img width={'100%'} class={'cursor-pointer'} src="https://qph.cf2.quoracdn.net/main-qimg-70cf9649fa636df3cca22493b8f8b63d-lq" alt="" />
                    </div>
                    <div className={'flex px-3 flex-col space-y-2 items-start justify-start'}>

                        <div className="flex items-center w-full justify-between">
                            <div className={'flex bg-gray-100 px-2 py-1.5 rounded-md items-center gap-2'}>
                                <div className={'flex space-x-1 items-center text-sm sm:text-sm'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="none" />
                                        <g fill="none">
                                            <path fill="currentColor" d="M17.36 20H8V10c.625 0 1.208-.312 1.555-.832l2.554-3.832A3 3 0 0 1 14.606 4h.213a1 1 0 0 1 .987 1.164L15 10h3.56a2 2 0 0 1 1.962 2.392l-1.2 6A2 2 0 0 1 17.36 20" opacity="0.16" />
                                            <path fill="currentColor" d="m15 10l-.986-.164A1 1 0 0 0 15 11zM4 10V9a1 1 0 0 0-1 1zm16.522 2.392l.98.196zM6 21h11.36v-2H6zM18.56 9H15v2h3.56zm-2.574 1.164l.806-4.835L14.82 5l-.805 4.836zM14.82 3h-.213v2h.213zm-3.542 1.781L8.762 8.555l1.664 1.11L12.94 5.89zM7.93 9H4v2h3.93zM3 10v8h2v-8zm17.302 8.588l1.2-6l-1.961-.392l-1.2 6zM8.762 8.555A1 1 0 0 1 7.93 9v2a3 3 0 0 0 2.496-1.336zm8.03-3.226A2 2 0 0 0 14.82 3v2zM18.56 11a1 1 0 0 1 .981 1.196l1.961.392A3 3 0 0 0 18.56 9zm-1.2 10a3 3 0 0 0 2.942-2.412l-1.961-.392a1 1 0 0 1-.98.804zM14.606 3a4 4 0 0 0-3.329 1.781l1.665 1.11A2 2 0 0 1 14.606 5zM6 19a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3z" />
                                            <path stroke="currentColor" stroke-width="2" d="M8 10v10" />
                                        </g>
                                    </svg>
                                    <span className={'-tracking-tight text-xs font-semibold text-gray-700'}>410</span>
                                </div>
                                <div className={'flex space-x-1 items-center text-sm sm:text-sm'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="none" />
                                        <g fill="none">
                                            <path fill="currentColor" d="M17.36 4H8v10c.625 0 1.208.312 1.555.832l2.554 3.832A3 3 0 0 0 14.606 20h.213a1 1 0 0 0 .987-1.164L15 14h3.56a2 2 0 0 0 1.962-2.392l-1.2-6A2 2 0 0 0 17.36 4" opacity="0.16" />
                                            <path fill="currentColor" d="m15 14l-.986.164A1 1 0 0 1 15 13zM4 14v1a1 1 0 0 1-1-1zm16.522-2.392l.98-.196zM6 3h11.36v2H6zm12.56 12H15v-2h3.56zm-2.574-1.164l.806 4.835L14.82 19l-.805-4.836zM14.82 21h-.213v-2h.213zm-3.542-1.781l-2.515-3.774l1.664-1.11l2.515 3.774zM7.93 15H4v-2h3.93zM3 14V6h2v8zm17.302-8.588l1.2 6l-1.961.392l-1.2-6zM8.762 15.445A1 1 0 0 0 7.93 15v-2a3 3 0 0 1 2.496 1.336zm8.03 3.226A2 2 0 0 1 14.82 21v-2zM18.56 13a1 1 0 0 0 .981-1.196l1.961-.392A3 3 0 0 1 18.56 15zm-1.2-10a3 3 0 0 1 2.942 2.412l-1.961.392a1 1 0 0 0-.98-.804zm-2.754 18a4 4 0 0 1-3.329-1.781l1.665-1.11a2 2 0 0 0 1.664.891zM6 5a1 1 0 0 0-1 1H3a3 3 0 0 1 3-3z" />
                                            <path stroke="currentColor" stroke-width="2" d="M8 14V4" />
                                        </g>
                                    </svg>
                                    <span className={'-tracking-tight text-xs font-semibold text-gray-700'}>10</span>
                                </div>
                                <div className={'flex space-x-1 items-center text-sm sm:text-sm'}>
                                    <Share2Icon className={'text-neutral-700'} size={19} />
                                    <span className={'-tracking-tight text-xs font-semibold text-gray-700'}>10</span>
                                </div>
                            </div>
                            <div className={'flex items-center gap-3'}>
                                <button className={'bg-gray-100 px-5 py-1.5 hover:bg-blue-500 hover:text-white rounded-md  text-gray-500'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="none" />
                                        <g fill="none">
                                            <path fill="currentColor" d="M17.36 20H8V10c.625 0 1.208-.312 1.555-.832l2.554-3.832A3 3 0 0 1 14.606 4h.213a1 1 0 0 1 .987 1.164L15 10h3.56a2 2 0 0 1 1.962 2.392l-1.2 6A2 2 0 0 1 17.36 20" opacity="0.16" />
                                            <path fill="currentColor" d="m15 10l-.986-.164A1 1 0 0 0 15 11zM4 10V9a1 1 0 0 0-1 1zm16.522 2.392l.98.196zM6 21h11.36v-2H6zM18.56 9H15v2h3.56zm-2.574 1.164l.806-4.835L14.82 5l-.805 4.836zM14.82 3h-.213v2h.213zm-3.542 1.781L8.762 8.555l1.664 1.11L12.94 5.89zM7.93 9H4v2h3.93zM3 10v8h2v-8zm17.302 8.588l1.2-6l-1.961-.392l-1.2 6zM8.762 8.555A1 1 0 0 1 7.93 9v2a3 3 0 0 0 2.496-1.336zm8.03-3.226A2 2 0 0 0 14.82 3v2zM18.56 11a1 1 0 0 1 .981 1.196l1.961.392A3 3 0 0 0 18.56 9zm-1.2 10a3 3 0 0 0 2.942-2.412l-1.961-.392a1 1 0 0 1-.98.804zM14.606 3a4 4 0 0 0-3.329 1.781l1.665 1.11A2 2 0 0 1 14.606 5zM6 19a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3z" />
                                            <path stroke="currentColor" stroke-width="2" d="M8 10v10" />
                                        </g>
                                    </svg>
                                </button>
                                <button className={'bg-gray-100 px-5 py-1.5 hover:bg-blue-500 hover:text-white rounded-md  text-gray-500'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="none" />
                                        <g fill="none">
                                            <path fill="currentColor" d="M17.36 4H8v10c.625 0 1.208.312 1.555.832l2.554 3.832A3 3 0 0 0 14.606 20h.213a1 1 0 0 0 .987-1.164L15 14h3.56a2 2 0 0 0 1.962-2.392l-1.2-6A2 2 0 0 0 17.36 4" opacity="0.16" />
                                            <path fill="currentColor" d="m15 14l-.986.164A1 1 0 0 1 15 13zM4 14v1a1 1 0 0 1-1-1zm16.522-2.392l.98-.196zM6 3h11.36v2H6zm12.56 12H15v-2h3.56zm-2.574-1.164l.806 4.835L14.82 19l-.805-4.836zM14.82 21h-.213v-2h.213zm-3.542-1.781l-2.515-3.774l1.664-1.11l2.515 3.774zM7.93 15H4v-2h3.93zM3 14V6h2v8zm17.302-8.588l1.2 6l-1.961.392l-1.2-6zM8.762 15.445A1 1 0 0 0 7.93 15v-2a3 3 0 0 1 2.496 1.336zm8.03 3.226A2 2 0 0 1 14.82 21v-2zM18.56 13a1 1 0 0 0 .981-1.196l1.961-.392A3 3 0 0 1 18.56 15zm-1.2-10a3 3 0 0 1 2.942 2.412l-1.961.392a1 1 0 0 0-.98-.804zm-2.754 18a4 4 0 0 1-3.329-1.781l1.665-1.11a2 2 0 0 0 1.664.891zM6 5a1 1 0 0 0-1 1H3a3 3 0 0 1 3-3z" />
                                            <path stroke="currentColor" stroke-width="2" d="M8 14V4" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'px-3'}>
                        <h2 className={'font-semibold -tracking-tight text-sm'}>Komentar (190)</h2>
                        <ul className={'space-y-2'}>
                            {[1].map(function () {
                                return (
                                    <li className={'border-l-2 p-2 rounded-lg border-r-gray-200 bg-gray-100'}>
                                        <div>
                                            <div className="text-sm space-x-1">
                                                <a href="" className={'text-black hover:text-blue-500 font-semibold'}>Dadan Hidayat</a>
                                                <span>-</span>
                                                <time className={'italic text-xs'} datetime="">1 hrs ago</time>
                                                <span>-</span>
                                                <span className={'text-xs'}>19&nbsp;
                                                    <a href="" className={'underline'}>Like</a>
                                                </span>
                                            </div>
                                            <p className={'text-sm'}>
                                                B*c**t
                                                <a className={'font-bold text-blue-500 underline mx-1'} href="">@anrrew</a>
                                                Liquidate to who? Are those assets things they can take with them, or are they things like buildings that stay right where they are?
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <a href="" className={'text-sm underline block mt-2'}>
                            <span>Komentar Lainya</span>
                        </a>
                    </div>
                </div>
            })}
        </div>

    )
}
