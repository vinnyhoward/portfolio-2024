import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { ShowcaseContainer } from "./Showcase.styles";
import { useTheme } from "../../contexts/ThemeContext";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { Project } from "../../constants/projects";
import { CaretIcon } from "../Icons/CaretIcon";

interface ShowcaseProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
  dataList: Project[];
}

export const Showcase: React.FC<ShowcaseProps> = ({
  sectionHeader = "Section Header",
  rightActionContainer = null,
  dataList,
}) => {
  const { theme } = useTheme();

  const isLightTheme = theme.name === "light";
  const primaryIconColor = isLightTheme
    ? theme.fontColor.fontColor2
    : theme.fontColor.fontColor1;
  const secondaryIconColor = theme.fontColor.fontColor1;
  const renderProjectList = () => {
    return dataList.map((project: Project) => {
      return (
        <Link key={uuidv4()} href={project.route}>
          <div className="showcase__item">
            <div className="showcase__content">
              <div className="showcase__logo">
                <Image
                  width={45}
                  height={45}
                  src={project.projectLogo}
                  alt={project.title}
                />
              </div>
              <div className="showcase__text">
                <div className="showcase__title">{project.title}</div>
                <div className="showcase__tech-stack">{project.techStack}</div>
              </div>
            </div>
            <div className="icon__container">
              <CaretIcon fill={secondaryIconColor} />
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <ShowcaseContainer>
      <SectionHeader
        sectionHeader={sectionHeader}
        rightActionContainer={rightActionContainer}
      />
      <div className="showcase__list">{renderProjectList()}</div>
    </ShowcaseContainer>
  );
};
