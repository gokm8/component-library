import { Navigation } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AutoConfetti } from "@/components/auto-confetti";

export default function Hero() {
    return (
        <>
            <Navigation />
            {/* Konfetti komponent - usynlig men aktiv */}
            {/* Konfetti komponent - usynlig men aktiv */}
            <AutoConfetti
                delay={500}
                duration={3000}
                colors={["#dc2626", "#f59e0b", "#10b981", "#3b82f6"]}
            />
            <main>
                <section className="min-h-[90vh] bg-background flex items-center">
                    <div className="container mx-auto px-4">
                        {/* Hero content */}
                        <div className="text-center space-y-8 max-w-5xl mx-auto">
                            {/* Badges øverst */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <Badge
                                    variant="secondary"
                                    className="text-sm font-semibold px-3 py-1">
                                    🏆 #1 FESTPARTNER
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="text-sm font-semibold px-3 py-1">
                                    ⭐ 1.000+ TILFREDSE KUNDER
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="text-sm font-semibold px-3 py-1">
                                    🚚 LEVERING I HELE DANMARK
                                </Badge>
                            </div>

                            {/* Hovedoverskrift */}
                            <h1 className="font-black text-primary leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                                FESTPARTNER
                            </h1>

                            {/* Tagline */}
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/90 leading-tight">
                                FESTEN FOR GÆSTEN
                            </p>

                            {/* Beskrivelse */}
                            <p className="text-base sm:text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                                Vi skaber Danmarks bedste oplevelser. <br />{" "}
                                Komplet festudstyr og pakker til alle typer
                                fester - leveret til dig
                            </p>

                            {/* Call-to-action knapper */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="text-lg font-semibold px-8 py-4 min-w-[200px]">
                                    Book din fest nu
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg font-semibold px-8 py-4 min-w-[200px]">
                                    Se vores pakker
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
