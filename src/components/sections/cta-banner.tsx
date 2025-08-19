import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <div className="px-4 md:px-6">
      <div className="relative overflow-hidden my-12 md:my-20 w-full dark-card-bg max-w-screen-lg mx-auto rounded-2xl py-8 md:py-16 px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center">
          Let's Build What Your Business Needs Next
          </h3>
          <p className="mt-3 md:mt-2 text-sm md:text-base lg:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Two weeks to a clear plan. A few months to a product you can trust
          </p>
        </div>
        <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="group relative">
            <div className="absolute -inset-1 brand-gradient rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <Button size="lg" className="relative bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
            Discover More <Forward className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}