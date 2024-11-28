import { createLazyFileRoute } from "@tanstack/react-router";
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";
// import { Input } from "@/components/ui/input"
// import { MagnifyingGlass } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button";
export const Route = createLazyFileRoute("/")({
  component: Hero,
});

export default function Hero() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">mutube</span>
              <span className="text-2xl font-bold">µ</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="text-sm/6 font-semibold">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </nav>
      </header>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col gap-12 items-center mx-auto max-w-2xl -translate-y-16">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            µ-<span className="text-red-500">tube</span>
          </h1>
          {/* <div className="relative w-[30rem]">
						<Input placeholder='Search' className='rounded-xl hover:rounded-sm pl-10' />
						<MagnifyingGlass size={24} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
					</div> */}
          {/*
							<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
								State of the art tooling for ideation, analytics, and more...
							</p>
						*/}
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
