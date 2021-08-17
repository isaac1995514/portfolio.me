import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// TODO: Change Project Display to a infinite slider

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>{"<Projects />"}</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }, index) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLink href={visit}>Code</ExternalLink>
              <ExternalLink href={visit}>Source</ExternalLink>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
