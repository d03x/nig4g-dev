import LeaderBoard from '../features/LeaderBoard';

export default function RightSidebar() {
    return (
        <aside className={'sm:max-w-xs hidden sm:block relative sm:pt-16 bg-inherit w-full sm:fixed right-0 px-2'}>
            <div className="space-y-4">
               
               <LeaderBoard/>
              
            </div>
        </aside>
    )
}