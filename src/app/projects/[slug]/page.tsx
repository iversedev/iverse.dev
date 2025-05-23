import { Marquee3D } from "@/components/Marquee3D"
import { projects } from "@/data/projects"
import { Commant } from "@/icons/command"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { unstable_ViewTransition as ViewTransition } from "react"

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function IndividualProjects({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    const { highlights } = project

    return (
        <main className="flex flex-col pt-12 w-full max-w-2xl mx-auto gap-2 min-w-[320px] ">
            <div className="flex pb-2 text-orange-600 text-lg font-semibold items-center gap-1">
                <Link
                    href="/projects"
                    className="font-semibold hover:underline"
                    scroll={false}
                >
                    Projects
                </Link>
                <ChevronRightIcon className="text-zinc-800 dark:text-zinc-100  h-3 w-3 self-center inline-block" />
                <ViewTransition name={`${slug}-title`}>
                    <h3 className="text-white font-bold text-xl">
                        {project.name}
                    </h3>
                </ViewTransition>
            </div>
            <div className="text-start  space-y-6">
                <ViewTransition name={`${slug}-description`}>
                    <h2>{project.description}</h2>
                </ViewTransition>
            </div>
            <div className="flex gap-2 pb-6">
                <ul className="flex flex-col gap-2 ">
                    <li className="flex gap-2 items-center">
                        <span className="bg-green-500/30 text-green-500 px-2 rounded-sm">
                            PLATFORM
                        </span>
                        <span>{project.type}</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <span className="bg-green-500/30 text-green-500 px-2 rounded-sm">
                            STACK
                        </span>
                        <ViewTransition name={`${slug}-highlight`}>
                            <div className=" flex flex-wrap gap-x-4 gap-2 items-start justify-start ">
                                {highlights &&
                                    highlights.map((highlight) => {
                                        const { name, icon: Icon } = highlight
                                        return (
                                            <div
                                                key={name}
                                                className="flex  items-center justify-center"
                                            >
                                                <Icon className="mr-1 text-zinc-800 dark:text-zinc-100  h-4 w-4" />
                                                <span className="text-zinc-800 dark:text-zinc-100  text-sm">
                                                    {name}
                                                </span>
                                            </div>
                                        )
                                    })}
                            </div>
                        </ViewTransition>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span className="bg-green-500/30 text-green-500 px-2 rounded-sm">
                            WEBSITE
                        </span>
                        <a
                            className="hover:underline text-orange-500"
                            href={project.url}
                            target="_blank"
                        >
                            {project.url}
                        </a>
                    </li>
                </ul>
            </div>
            <ViewTransition name={`image`}>
                <Marquee3D images={project.images} />
            </ViewTransition>

            <Link
                className="group text-green-400 flex items-center pb-6 font-semibold underline underline-offset-2"
                href="/projects"
                scroll={false}
            >
                <Commant className=" stroke-current group-hover:scale-110 transition-transform" />
                cd . .
            </Link>
        </main>
    )
}
