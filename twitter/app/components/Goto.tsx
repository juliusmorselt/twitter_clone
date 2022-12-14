import Link from "next/link";
import React, { ReactNode } from "react";

const Goto = ({ href, children }: any) => {
    const link =
        "p-2 relative flex items-center gap-5 text-xl my-5 rounded-full transition ease-in-out";
    return (
        <Link href={href} className={link}>
            {children}
        </Link>
    );
};

export default Goto;
