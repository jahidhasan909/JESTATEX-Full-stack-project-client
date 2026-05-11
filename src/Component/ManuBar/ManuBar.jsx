"use client"
import { Tabs } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ManuBar() {

    const pathname = usePathname()


    return (

        <div className="w-full max-w-[500px]">

            <Tabs selectedKey={pathname} className="">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Tabs with disabled" className="bg-white/40 py-2 border border-white/80">
                        <Tabs.Tab id="/" className="">
                            <Link className="px-4 py-2" href={'/'}>Home</Link>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="/sell">
                            <Link className="px-4 py-2" href={'/sell'}>Sell</Link>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="/buy">
                            <Link className="px-4 py-2" href={'/buy'}>Buy</Link>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="/wishlist">
                            <Link className="px-4 py-2" href={'/wishlist'}>Wishlist</Link>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="/profile">
                            <Link className="px-4 py-2" href={'/profile'}>Profile</Link>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
        </div>
    );
}