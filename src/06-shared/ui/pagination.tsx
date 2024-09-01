import clsx from 'clsx'
import { PrevIcon } from './icons/prev-icon'
import { NextIcon } from './icons/next-icon'

interface UiPaginationProps {
    currentPage: number
    maxPage: number
    prevClick: () => void
    nextClick: () => void
}

export const UiPagination = ({
    currentPage,
    maxPage,
    prevClick,
    nextClick,
}: UiPaginationProps) => {
    return (
        <div className="flex gap-2 items-center self-center">
            {/* Нужна обертка, чтобы повесить data-testid, на свг нельзя повесить атрибут, jest его не видит */}
            <div data-testid="Prev">
                <PrevIcon
                    onClick={() => currentPage > 0 && prevClick()}
                    className={clsx(
                        'size-4',
                        currentPage > 0
                            ? 'cursor-pointer'
                            : 'text-black/20 cursor-default'
                    )}
                />
            </div>
            <div>{currentPage + 1}</div>
            <div data-testid="Next" onClick={() => {currentPage < maxPage && nextClick()}}>
                <NextIcon
                    
                    className={clsx(
                        'cursor-pointer size-4',
                        currentPage < maxPage
                            ? 'cursor-pointer'
                            : 'text-black/20 cursor-default'
                    )}
                />
            </div>
        </div>
    )
}
