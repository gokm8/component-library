"use client";

import * as React from "react";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
    // Mobile menu state
    const [open, setOpen] = useState(false);

    // Pathname
    const pathname = usePathname();

    // Navigation items
    const navigationItems = [
        { href: "/", label: "HJEM" },
        { href: "/ydelser", label: "YDELSER" },
        { href: "/bliv-vikar", label: "BLIV VIKAR" },
        { href: "/om-os", label: "OM OS" },
        { href: "/faq", label: "FAQ" },
    ];

    return (
        <div className="w-full bg-background border-b sticky top-0 z-50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* ********************************************* */}
                    {/* Desktop menu */}
                    {/* ********************************************* */}

                    {/* Brand */}
                    <Link href="/" className="text-2xl font-bold">
                        <p>FAST VIKAR</p>
                    </Link>

                    {/* Desktop navigation */}
                    <NavigationMenu viewport={false} className="md:flex hidden">
                        <NavigationMenuList className="gap-4">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink
                                        asChild
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            pathname === item.href &&
                                                "bg-accent text-accent-foreground"
                                        )}>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Desktop CTA buttons */}
                    <div className="md:flex items-center gap-3 hidden">
                        <Button variant="outline" className="text-base">
                            Kontakt os
                        </Button>
                        <Button variant="default" className="text-base">
                            Login
                        </Button>
                    </div>

                    {/* ********************************************* */}
                    {/* Mobile menu */}
                    {/* ********************************************* */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        {/* Hamburger */}
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        {/* Mobile branding */}
                        <SheetContent side="right">
                            <SheetHeader className="border-b">
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="text-xl font-bold">
                                        FAST VIKAR
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile navigation items */}
                            <div className="flex flex-col gap-4 mt-8 ">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-lg font-medium py-3 px-4 transition-colors",
                                            pathname === item.href
                                                ? "bg-accent text-accent-foreground"
                                                : "hover:bg-accent hover:text-accent-foreground"
                                        )}
                                        onClick={() => setOpen(false)}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile CTA buttons */}
                            <div className="flex flex-col gap-3 mt-8 border-t pt-6">
                                <Button
                                    variant="outline"
                                    onClick={() => setOpen(false)}
                                    className="text-lg">
                                    Kontakt os
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => setOpen(false)}
                                    className="text-lg">
                                    Login
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
