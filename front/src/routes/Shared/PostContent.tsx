import {
  CheckCircle2,
  MoreHorizontal,
  Share2Icon,
} from 'lucide-preact';
import { Virtuoso } from 'react-virtuoso';

import { cn } from '../../utils';
import FeedListHeader from '../home/Sections/FeedListsHeader';

const Footer = function () {
    return (
        <a href="" className="bg-white flex items-center justify-center gap-x-3 mt-2 text-center text-sm rounded p-2">
            Lihat Laninnya
            <span>
                <MoreHorizontal />
            </span>
        </a>
    )
}
export default function PostContent() {
    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="h-screen">
                <Virtuoso
                    onScrollEnd={function (e) {
                        console.log(e);

                    }}
                    components={{
                        Header: FeedListHeader,
                        Footer: Footer,
                    }}
                    useWindowScroll={false}
                    totalCount={5}
                    itemContent={() => {
                        return <div className={'flex py-3 mt-5  flex-col bg-white gap-y-3  rounded shadow-md'}>
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
                                <img width={'100%'} class={'cursor-pointer'} src="https://qph.cf2.quoracdn.net/main-qimg-affbd3527a0516938892e2b2b1dc4843" alt="" />
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
                    }}
                >

                </Virtuoso>
            </div>
        </div>

    )
}
