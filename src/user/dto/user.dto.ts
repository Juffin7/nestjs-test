import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  user_name: string;

  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsString()
  gender: string;

  @IsString()
  phone_number: string;

  @IsString()
  about: string;
}
