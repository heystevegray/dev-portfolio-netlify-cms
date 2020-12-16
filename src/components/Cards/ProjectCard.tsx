import React from "react";
import dayjs from "dayjs";
import Tags from "../Tags";
import { mdiGithub, mdiLinkVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { Project } from "../../pages/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const image = project?.image?.publicURL;

  return (
    <div className="mb-14">
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
                    className="column is-primary"
                    path={mdiLinkVariant}
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
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 max-w-md">
          <p className="text-gray-100 text-4xl">{project.title}</p>
          <p className="text-gray-400 place-self-center">
            {dayjs(project.updated).format("MMM D, YYYY")}
          </p>
          <blockquote>
            <p className="text-lg font-semibold md:w-200">
              {project.description}
            </p>
          </blockquote>
          <div className="flex justify-center md:justify-start">
            <Tags tags={project.tags} />
          </div>
        </div>
      </figure>
    </div>
  );
}
