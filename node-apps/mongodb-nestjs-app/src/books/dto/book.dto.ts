import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  readonly author: string;

  @IsOptional()
  @IsString()
  readonly category: string;
}

export class UpdateBookDto extends CreateBookDto { }
