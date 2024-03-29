import NextImage from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { ShowcaseContainer } from "./Showcase.styles";
import { useTheme } from "../../contexts/ThemeContext";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { Project } from "../../constants/projects";
import { Company } from "../../constants/companies";
import { CaretIcon } from "../Icons/CaretIcon";

interface ShowcaseProps {
  sectionHeader?: string;
  rightActionContainer?: React.ReactNode;
  dataList: Project[] | Company[];
  icon?: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({
  sectionHeader,
  rightActionContainer = null,
  dataList,
  icon,
}) => {
  const { theme } = useTheme();

  const secondaryIconColor = theme.fontColor.fontColor1;
  const renderProjectList = () => {
    return dataList.map((project: Project | Company) => {
      return (
        <Link key={uuidv4()} href={project.route}>
          <div className="showcase__item">
            <div className="showcase__content">
              <div className="showcase-image__container">
                <NextImage
                  className="showcase__image"
                  width={45}
                  height={45}
                  src={project.projectLogo}
                  alt={project.title}
                />
              </div>
              <div className="showcase__text">
                <div className="showcase__title">{project.title}</div>
                {project.techStack ? (
                  <div className="showcase__tech-stack">
                    {project.techStack}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="icon__container">
              {icon ? icon : <CaretIcon fill={secondaryIconColor} />}
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
