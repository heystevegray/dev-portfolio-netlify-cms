import React from "react";
import dayjs from "dayjs";
import Tags from "../Tags";
import { mdiGithub, mdiLink } from "@mdi/js";
import Icon from "@mdi/react";
import { Project } from "../../pages/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const image = project?.image?.publicURL;

  return (
    <div className="mb-14 w-full max-w-2xl">
      <figure className="m-0 md:flex rounded-xl p-5">
        <div className="flex flex-col">
          <div className="app-icon p-8 w-40 h-40 align-middle rounded-full mx-auto ">
            {image && (
              <img
                aria-label={`${project.title}`}
                className="place-self-center w-24 h-24"
                src={image}
              />
            )}
          </div>
          <figcaption className="font-medium flex flex-row justify-center mt-8">
            <div className="">
              {project.demo && (
                <a
                  className="socials__link"
                  aria-label={`${project.title} demo`}
                  href={`${project.demo}`}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon
                    className="column is-primary transform -rotate-45"
                    path={mdiLink}
                    size={2.5}
                  />
                </a>
              )}
            </div>
            <div className="">
              {project.github && (
                <a
                  className="socials__link"
                  aria-label={`${project.title} on github`}
                  href={`${project.github}`}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon
                    className="column is-primary"
                    path={mdiGithub}
                    size={2.5}
                  />
                </a>
              )}
            </div>
          </figcaption>
        </div>
        <div className="pt-6 w-full md:p-8 text-center md:text-left">
          <p className="text-gray-100 text-4xl">{project.title}</p>
          <p className="text-gray-400 place-self-center">
            {dayjs(project.updated).format("MMM D, YYYY")}
          </p>
          <div className="md:justify-start place-items-center justify-center flex">
            <p className="text-lg font-semibold sm:p-0 px-10">
              {project.description}
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Tags
              className="max-w-xs sm:max-w-md mx-auto md:justify-start place-items-center justify-center flex flex-wrap"
              tags={project.tags}
            />
          </div>
        </div>
      </figure>
    </div>
  );
}
