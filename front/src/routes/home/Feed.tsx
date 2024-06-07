import { MoreHorizontal } from 'lucide-preact';

import NewPostAction from '../../features/Posts/NewPostAction';
import PostContent from '../Shared/PostContent';

export default function Feed() {
    return <div className="">
        <div className="container px-0 max-w-[560px] w-full">
            <NewPostAction />
            <div className="">
                <PostContent />
                <a href="" className="bg-white flex items-center justify-center gap-x-3 mt-2 text-center text-sm rounded p-2">
                    Lihat Laninnya
                    <span>
                        <MoreHorizontal/>
                    </span>
                </a>
            </div>
        </div>
    </div>
}