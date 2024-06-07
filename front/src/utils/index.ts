import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = function(...value : ClassValue[]){
    return twMerge(clsx(...value));
}

export { cn };
