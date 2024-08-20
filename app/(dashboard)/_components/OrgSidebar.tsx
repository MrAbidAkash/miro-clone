"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({ subsets: ["latin"], weight: "600" });

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[205px] pl-5 pt-5 ">
      <Link href="/">
        <div className="flex items-center gap-x-0">
          <Image src={"/Ghost-logo.png"} alt="logo" width={60} height={60} />
          <span className={cn("text-2xl font-bold", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          asChild
          variant={favorites ? "ghost" : "secondary"}
          size={"lg"}
          className="font-medium justify-start px-2 w-full "
        >
          <Link href="/">
            <LayoutDashboard className=" h-4 w-4 mr-2" /> Team boards
          </Link>
        </Button>
        <Button
          asChild
          variant={favorites ? "secondary" : "ghost"}
          size={"lg"}
          className="font-medium justify-start px-2 w-full "
        >
          <Link
            href={{
              pathname: "/",
              query: {
                favorites: "true",
              },
            }}
          >
            <Star className=" h-4 w-4 mr-2" /> Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
