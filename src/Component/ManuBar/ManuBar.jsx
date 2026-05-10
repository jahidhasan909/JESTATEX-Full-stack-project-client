import { Tabs } from "@heroui/react";
import Link from "next/link";

export function ManuBar() {
    return (
        <div className="w-full max-w-[500px]">

        <Tabs className="">
            <Tabs.ListContainer>
                <Tabs.List aria-label="Tabs with disabled" className="bg-white/40 border border-white/80">
                    <Tabs.Tab id="active">
                        <Link href={'/'}>Home</Link>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="sell">
                        <Link href={'/sell'}>Sell</Link>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="available">
                        <Link href={'/Buy'}>Buy</Link>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="Wishlist">
                        <Link href={'/Wishlist'}>Wishlist</Link>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="profile">
                        <Link href={'/Profile'}>Profile</Link>
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>
        </Tabs>
        </div>
    );
}