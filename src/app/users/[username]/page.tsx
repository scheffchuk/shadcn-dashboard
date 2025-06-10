import CardList from "@/components/card-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Sushi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT  */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGE CONTAINER  */}
          <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
          {/*  INFORMATION CONTAINER  */}
          <div className="bg-primary-foreground p-4 rounded-lg">Info</div>
          {/* CARD LIST CONTAINER  */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* RIGHT  */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* USER CARD CONTAINER  */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* CHART CONTAINER  */}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
}
