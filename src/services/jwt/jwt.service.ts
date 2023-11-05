export enum TokenType {
  AccessToken = 'AccessToken',
  RefreshToken = 'RefreshToken'
}

export enum TokenTypeIdentifier {
  AccessToken = 'at+jwt',
  RefreshToken = 'rt+jwt',
}

export type AccessTokenPayload = {
  sub: string;
};

export type RefreshTokenPayload = {
  sub: string;
};

export type Payload = {
  [TokenType.AccessToken]: AccessTokenPayload;
  [TokenType.RefreshToken]: RefreshTokenPayload;
};

export abstract class JWTService {
  abstract sign<type extends TokenType>(payload, tokenType: type): string;
  abstract verify<type extends TokenType>(
    token,
    tokenType: type,
  ): Payload[type];
}
