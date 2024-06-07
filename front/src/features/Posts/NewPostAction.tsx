import {
  ImageUp,
  User,
} from 'lucide-preact';

export default function NewPostAction(){
    return <>
    <div className="flex w-full bg-white justify-between  p-3 items-center overflow-hidden sm:rounded-lg my-0 sm:mt-2 mb-2">
       <div className="border-b-0 max-w-full w-full">
            <div className="flex gap-3">
            <div className="h-10 text-gray-800 flex items-center justify-center w-14 rounded-full overflow-hidden bg-gray-200">
            <User size={30}/>
            </div>
            <input placeholder={'Upload Meme'} className={'w-full text-sm placeholder:text-sm outline-none ring-0  px-3 rounded-lg shadow border'}/>
            <button className={'flex flex-col gap-0.1 items-center justify-center'}>
                <span>
                    <ImageUp width={40} color='green'/>
                </span>
                <span className={'text-xs -tracking-tight'}>Gambar</span>
            </button>
            </div>
       </div>
    </div>
    </>
}