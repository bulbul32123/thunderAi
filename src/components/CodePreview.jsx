import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export default function CodePreview() {
  return (
    <div className="p-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen font-sans">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Overview</h1>
        <div className="flex gap-2">
          <Button variant="outline">Download</Button>
          <Button>New Report</Button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <MetricCard 
          title="Total Revenue" 
          value="$45,231.89" 
          icon={DollarSign} 
          change="+20.1% from last month" 
        />
        <MetricCard 
          title="Subscriptions" 
          value="+2350" 
          icon={Users} 
          change="+180.1% from last month" 
        />
        <MetricCard 
          title="Sales" 
          value="+12,234" 
          icon={CreditCard} 
          change="+19% from last month" 
        />
        <MetricCard 
          title="Active Now" 
          value="+573" 
          icon={Activity} 
          change="+201 since last hour" 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-zinc-400 bg-zinc-100 rounded-md">
              [Chart Placeholder]
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <SaleItem name="Olivia Martin" email="olivia.martin@email.com" amount="+$1,999.00" />
              <SaleItem name="Jackson Lee" email="jackson.lee@email.com" amount="+$39.00" />
              <SaleItem name="Isabella Nguyen" email="isabella.nguyen@email.com" amount="+$299.00" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, change }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-zinc-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-zinc-500">{change}</p>
      </CardContent>
    </Card>
  );
}

function SaleItem({ name, email, amount }) {
  return (
    <div className="flex items-center">
      <div className="h-9 w-9 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-medium">
        {name.charAt(0)}
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-zinc-500">{email}</p>
      </div>
      <div className="ml-auto font-medium">{amount}</div>
    </div>
  );
}