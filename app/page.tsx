import Image from "next/image";
import { Navigation } from "@/components/navbar";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <Card className="w-full bg-background">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">COMPONENTS</CardTitle>
                <CardDescription>
                    I have created a few components to build a website.
                </CardDescription>
            </CardHeader>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Navbar</CardTitle>
                    <CardDescription>
                        This is a example of a navbar:
                    </CardDescription>
                </CardHeader>
                <Navigation />
            </Card>
        </Card>
    );
}
