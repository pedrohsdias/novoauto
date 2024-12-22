import {JwtPayload} from "jwt-decode";

export interface TokenDataInterface extends JwtPayload{
  username: string;
}