import React from 'react'
import './style.scss'
import type { PropType } from './types'

const TimeLine = ({ timelineItems = [] }: PropType) => {
    return (
        <ul className="timeline timeline-vertical">
            {timelineItems?.map((el: { id: number, title: string }) => (
                <li key={el?.id}>
                    <div className="timeline-start timeline-box text-xs font-mono uppercase bg-white/80 backdrop-blur-md border-neutral-200 shadow-sm">
                        {el?.title}
                    </div>
                    <div className="timeline-middle text-[#0a6451]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <hr className="bg-neutral-200" />
                </li>
            ))}
        </ul>
    )
}

export default TimeLine