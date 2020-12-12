import React from "react";
import Img from "gatsby-image";
import dayjs from "dayjs";
import Tags from "../Tags";
import { mdiGithub, mdiLinkVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { Project } from "../../pages/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const image = project?.image.publicURL;
  //   const fluid = image?.childImageSharp.fluid;
  console.log({ image });

  return (
    <>
      <figure className="mt-28 md:flex bg-red rounded-xl p-8 md:p-0">
        <div className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto my-auto">
          {/* {fluid && <Img fluid={fluid} />} */}
          {image && <img src={image} />}
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 max-w-md">
          <p className="text-white">{project.title}</p>
          <div className="text-gray-500 align-middle">
            {dayjs(project.updated).format("MMM D, YYYY")}
          </div>
          <blockquote>
            <p className="text-lg font-semibold w-200">{project.description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="inline-block">
              {project.demo && (
                <a
                  className="socials__link"
                  aria-label={`${project.title} demo`}
                  href={`${project.demo}`}
                  target="_blank"
                >
                  <Icon
                    className="column is-primary"
                    path={mdiLinkVariant}
                    size={2.5}
                  />
                </a>
              )}
            </div>
            <div className="inline-block">
              {project.github && (
                <a
                  className="socials__link"
                  aria-label={`${project.title} on github`}
                  href={`${project.github}`}
                  target="_blank"
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
          <Tags tags={project.tags} />
        </div>
      </figure>
    </>
  );
}
