import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style"
import { repositories } from "@/utils/projects"

import { Text } from "@/styles/Text"
import { FaGithub, FaShare } from "react-icons/fa"

export const Project = (): JSX.Element => {
  return (
    <>
      {repositories.map((repository, index) => (
        <ProjectWrapper key={index}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <Text type="body1" color="grey2">
            {repository.description}
          </Text>
          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.gitUrl}>
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  )
}
