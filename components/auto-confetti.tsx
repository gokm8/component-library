"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface AutoConfettiProps {
    /** Delay før konfetti starter (ms) */
    delay?: number;
    /** Varighed af konfetti (ms) */
    duration?: number;
    /** Custom farver til konfetti */
    colors?: string[];
    /** Om konfetti skal køre automatisk ved mount */
    autoTrigger?: boolean;
    /** Callback når konfetti er færdig */
    onComplete?: () => void;
}

export function AutoConfetti({
    delay = 500,
    duration = 3000,
    colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"],
    autoTrigger = true,
    onComplete,
}: AutoConfettiProps) {
    const triggerConfetti = () => {
        const end = Date.now() + duration;

        const frame = () => {
            if (Date.now() > end) {
                onComplete?.();
                return;
            }

            // Venstre kanon
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });

            // Højre kanon
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    useEffect(() => {
        if (!autoTrigger) return;

        const timer = setTimeout(() => {
            triggerConfetti();
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, autoTrigger]);

    // Returner intet visuelt - kun logik
    return null;
}
