"use client";

import * as React from "react";
import { Box, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./toggle";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-white">valueEq</span>
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Integrations
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-sm font-medium text-white hover:text-black"
          >
            Settings
          </Button>
          <Button>
            <Link
              href="/dashboard"
              className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-200"
            >
              Dashboard
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
