import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PathwayServiceBase } from "./base/pathway.service.base";

@Injectable()
export class PathwayService extends PathwayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
