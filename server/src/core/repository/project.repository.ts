import { Repository } from "typeorm";
import { ProjectEntity } from "../entity/project.entity";

export type ProjectRepository = Repository<ProjectEntity>