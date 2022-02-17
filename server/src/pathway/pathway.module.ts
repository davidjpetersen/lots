import { Module } from "@nestjs/common";
import { PathwayModuleBase } from "./base/pathway.module.base";
import { PathwayService } from "./pathway.service";
import { PathwayController } from "./pathway.controller";
import { PathwayResolver } from "./pathway.resolver";

@Module({
  imports: [PathwayModuleBase],
  controllers: [PathwayController],
  providers: [PathwayService, PathwayResolver],
  exports: [PathwayService],
})
export class PathwayModule {}
