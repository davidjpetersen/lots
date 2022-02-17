import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PathwayResolverBase } from "./base/pathway.resolver.base";
import { Pathway } from "./base/Pathway";
import { PathwayService } from "./pathway.service";

@graphql.Resolver(() => Pathway)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PathwayResolver extends PathwayResolverBase {
  constructor(
    protected readonly service: PathwayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
