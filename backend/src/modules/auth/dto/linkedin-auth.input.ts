import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class LinkedinAuthInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly code: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @IsUrl({
    require_tld: false,
  })
  readonly redirectUri: string;
}
