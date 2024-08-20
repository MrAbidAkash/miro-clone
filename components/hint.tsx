import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"


export interface HintProps {
    children: React.ReactNode
    label: string
    side?: 'top' | 'bottom' | 'left' | 'right'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    alignOffset?: number
}

export const Hint= ({ children, label, side = 'top', align = 'start', sideOffset = 4, alignOffset = 4 }: HintProps) => {

    return (
       <TooltipProvider>
         <Tooltip delayDuration={100}>
             <TooltipTrigger asChild>
                 {children}
             </TooltipTrigger>
             <TooltipContent side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                 {label}
             </TooltipContent>
         </Tooltip>
       </TooltipProvider>
    )
}