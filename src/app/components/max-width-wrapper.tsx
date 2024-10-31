import { cn } from "@/utils";

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    className?:string,
}


export const MaxWidthWrapper = ({className, children}:MaxWidthWrapperProps) =>{
    return (
        <div className={cn()}></div>
    )
}