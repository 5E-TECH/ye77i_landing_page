import { BadRequestException } from "@nestjs/common";
import * as bcrypt from "bcrypt"

export class BcryptCompare {
    async compare(password: string, hash: string) {
        try {
          return await bcrypt.compare(password, hash);
        } catch (error) {
          throw new BadRequestException(`Error on decrypt: ${error}`);
        }
      }
}
